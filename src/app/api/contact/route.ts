import { sendContactEmail } from '@/app/libs/email';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  checkRateLimit,
  getClientIP,
  getRateLimitHeaders,
} from '@/app/libs/rateLimiter';
import { verifyRecaptcha } from '@/app/libs/recaptcha';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.email('Please enter a valid email address.'),
  phoneNo: z
    .string()
    .min(10, { message: 'Please enter a valid phone number.' }),
  restaurantName: z
    .string()
    .min(2, { message: 'Restaurant name is required.' }),
  restaurantCountry: z
    .string()
    .min(1, { message: 'Restaurant country is required.' }),
  restaurantCity: z
    .string()
    .min(1, { message: 'Restaurant city is required.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long.' }),
  recaptchaToken: z
    .string()
    .min(1, { message: 'reCAPTCHA verification is required.' }),
});

export async function POST(request: NextRequest) {
  let clientIP: string;
  let rateLimitResult: ReturnType<typeof checkRateLimit>;

  try {
    clientIP = getClientIP(request);

    rateLimitResult = checkRateLimit(clientIP);
    console.log('Rate limit check result:', rateLimitResult);

    if (!rateLimitResult.allowed) {
      console.log(
        `Rate limit exceeded for IP ${clientIP}. Remaining: ${
          rateLimitResult.remaining
        }, Reset: ${new Date(rateLimitResult.resetTime)}`
      );

      return NextResponse.json(
        {
          message: 'Too many requests. Please try again later.',
          retryAfter: rateLimitResult.retryAfter,
          resetTime: rateLimitResult.resetTime,
        },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      );
    }

    console.log(
      `Rate limit check passed for IP ${clientIP}. Remaining: ${rateLimitResult.remaining}`
    );

    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: 'Invalid form data.',
          errors: validationResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      );
    }

    const validatedData = validationResult.data;
    const { recaptchaToken, ...emailData } = validatedData;

    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken,
      'contact_form'
    );

    if (!recaptchaResult.success) {
      console.warn(
        `reCAPTCHA failed for IP ${clientIP}:`,
        recaptchaResult.error
      );
      return NextResponse.json(
        {
          message: 'Security verification failed. Please try again.',
          error: recaptchaResult.error,
        },
        {
          status: 422,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      );
    }

    await sendContactEmail(emailData);

    return NextResponse.json(
      {
        message: 'Thank you! Your message has been sent successfully.',
        recaptchaScore: recaptchaResult.score,
      },
      {
        status: 200,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    let headers = {};
    if (rateLimitResult!) {
      headers = getRateLimitHeaders(rateLimitResult);
    } else if (clientIP!) {
      const fallbackResult = checkRateLimit(clientIP);
      headers = getRateLimitHeaders(fallbackResult);
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
          headers,
        }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      {
        status: 500,
        headers,
      }
    );
  }
}

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimitResult = checkRateLimit(clientIP, {
    windowMs: 15 * 60 * 1000,
    maxRequests: 5,
  });

  return NextResponse.json({
    clientIP,
    rateLimit: {
      allowed: rateLimitResult.allowed,
      remaining: rateLimitResult.remaining,
      resetTime: new Date(rateLimitResult.resetTime).toISOString(),
      retryAfter: rateLimitResult.retryAfter,
    },
  });
}
