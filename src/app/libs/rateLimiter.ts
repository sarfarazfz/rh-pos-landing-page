import { NextRequest } from 'next/server';

const requests = new Map<string, number[]>();

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();

  const realIP = request.headers.get('x-real-ip');
  if (realIP) return realIP;

  return 'unknown';
}

export function checkRateLimit(
  clientIP: string,
  maxRequests: number = 10,
  windowMs: number = 60000 // 1 minute
): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  // Get existing requests for this IP
  const userRequests = requests.get(clientIP) || [];

  // Filter out old requests
  const recentRequests = userRequests.filter((time) => time > windowStart);

  // Add current request
  recentRequests.push(now);

  // Update the map
  requests.set(clientIP, recentRequests);

  // Check if limit exceeded
  return recentRequests.length <= maxRequests;
}
