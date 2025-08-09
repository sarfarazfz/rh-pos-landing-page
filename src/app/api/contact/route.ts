import { sendContactEmail } from '@/app/libs/email';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit, getClientIP } from '@/app/libs/rateLimiter';
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
  const clientIP = getClientIP(request);

  if (!checkRateLimit(clientIP, 2, 15 * 60 * 1000)) {
    console.log(`Rate limit exceeded for IP ${clientIP}`);

    return NextResponse.json(
      {
        message: 'Too many requests. Please try again later.',
      },
      {
        status: 429,
      }
    );
  }

  try {
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
        }
      );
    }

    const validatedData = validationResult.data;
    const { recaptchaToken, ...emailData } = validatedData;

    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken,
      'contact_form'
    );
    console.log(`reCAPTCHA verification result:`, recaptchaResult);

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
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request);
  const allowed = checkRateLimit(clientIP, 2, 60 * 1000); // 5 requests per minute for GET

  return NextResponse.json({
    clientIP,
    rateLimit: {
      allowed,
    },
  });
}
