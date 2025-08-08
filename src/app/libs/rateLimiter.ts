import { NextRequest } from 'next/server';

interface RateLimitEntry {
  count: number;
  resetTime: number;
  windowStart: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

export const defaultRateLimitConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000,
  maxRequests: 2,
};

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');

  // Vercel specific headers
  const vercelIP = request.headers.get('x-vercel-forwarded-for');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfIP) {
    return cfIP;
  }
  if (vercelIP) {
    return vercelIP.split(',')[0].trim();
  }

  const userAgent = request.headers.get('user-agent') || '';
  const host = request.headers.get('host') || 'localhost';

  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return `dev-${Buffer.from(userAgent).toString('base64').slice(0, 8)}`;
  }

  return 'unknown';
}

export function checkRateLimit(
  clientIP: string,
  config: RateLimitConfig = defaultRateLimitConfig
): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  retryAfter?: number;
} {
  const now = Date.now();
  const key = `rate_limit:${clientIP}`;

  if (Math.random() < 0.1) {
    cleanupExpiredEntries();
  }

  const entry = rateLimitMap.get(key);

  if (!entry || now >= entry.resetTime) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + config.windowMs,
      windowStart: now,
    };
    rateLimitMap.set(key, newEntry);

    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: newEntry.resetTime,
    };
  }

  const timeInWindow = now - entry.windowStart;
  if (timeInWindow >= config.windowMs) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + config.windowMs,
      windowStart: now,
    };
    rateLimitMap.set(key, newEntry);

    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: newEntry.resetTime,
    };
  }

  // Increment the count
  entry.count += 1;
  rateLimitMap.set(key, entry);

  if (entry.count >= config.maxRequests) {
    const timeUntilReset = entry.resetTime - now;
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
      retryAfter: Math.ceil(timeUntilReset / 1000),
    };
  }

  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

function cleanupExpiredEntries() {
  const now = Date.now();
  const keysToDelete: string[] = [];

  for (const [key, entry] of rateLimitMap.entries()) {
    if (now >= entry.resetTime) {
      keysToDelete.push(key);
    }
  }

  keysToDelete.forEach((key) => rateLimitMap.delete(key));

  if (keysToDelete.length > 0) {
    console.log(`Cleaned up ${keysToDelete.length} expired rate limit entries`);
  }
}

export function getRateLimitHeaders(
  result: ReturnType<typeof checkRateLimit>,
  config: RateLimitConfig = defaultRateLimitConfig
) {
  const headers: Record<string, string> = {
    'X-RateLimit-Limit': config.maxRequests.toString(),
    'X-RateLimit-Remaining': Math.max(0, result.remaining).toString(),
    'X-RateLimit-Reset': Math.ceil(result.resetTime / 1000).toString(),
    'X-RateLimit-Window': config.windowMs.toString(),
  };

  if (result.retryAfter) {
    headers['Retry-After'] = result.retryAfter.toString();
  }

  return headers;
}

export function getRateLimitStatus(
  clientIP: string
): RateLimitEntry | undefined {
  const key = `rate_limit:${clientIP}`;
  return rateLimitMap.get(key);
}

export function resetRateLimit(clientIP: string): void {
  const key = `rate_limit:${clientIP}`;
  rateLimitMap.delete(key);
}
