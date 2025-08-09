interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(
  token: string,
  expectedAction: string = 'contact_form'
): Promise<{
  success: boolean;
  score?: number;
  error?: string;
}> {
  const secretKey =
    process.env.NODE_ENV === 'development'
      ? process.env.RECAPTCHA_SECRET_KEY_DEVELOPMENT
      : process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY environment variable is not set');
    return {
      success: false,
      error: 'reCAPTCHA configuration error',
    };
  }

  if (!token) {
    return {
      success: false,
      error: 'reCAPTCHA token is required',
    };
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return {
        success: false,
        error: 'reCAPTCHA verification failed',
      };
    }

    if (data.score !== undefined) {
      const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');

      if (data.score < minScore) {
        console.warn(
          `reCAPTCHA score too low: ${data.score} (minimum: ${minScore})`
        );
        return {
          success: false,
          score: data.score,
          error: 'reCAPTCHA score too low - suspected bot activity',
        };
      }

      if (data.action !== expectedAction) {
        console.warn(
          `reCAPTCHA action mismatch: expected ${expectedAction}, got ${data.action}`
        );
        return {
          success: false,
          score: data.score,
          error: 'reCAPTCHA action mismatch',
        };
      }
    }

    return {
      success: true,
      score: data.score,
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      error: 'reCAPTCHA verification failed due to network error',
    };
  }
}

export function getRecaptchaSiteKey(): string {
  const siteKey =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_DEVELOPMENT
      : process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.warn(
      'NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable is not set'
    );
    return '';
  }

  return siteKey;
}
