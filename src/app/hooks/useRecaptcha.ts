import { useEffect, useState } from 'react';
import { getRecaptchaSiteKey } from '../libs/recaptcha';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export function useRecaptcha() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const siteKey = getRecaptchaSiteKey();
  useEffect(() => {
    if (!siteKey) {
      console.warn('reCAPTCHA site key not found in environment variables');
      return;
    }

    if (window.grecaptcha) {
      setIsLoaded(true);
      return;
    }

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };

    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [siteKey, isLoading]);

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    if (!isLoaded || !window.grecaptcha || !siteKey) {
      console.warn('reCAPTCHA not loaded or site key missing');
      return null;
    }

    try {
      await new Promise<void>((resolve) => {
        window.grecaptcha.ready(() => {
          resolve();
        });
      });

      const token = await window.grecaptcha.execute(siteKey, { action });
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  };

  return {
    isLoaded,
    isLoading,
    executeRecaptcha,
  };
}
