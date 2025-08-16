'use client';

import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { clsx } from 'clsx';
import {
  User,
  Store,
  MapPin,
  Globe,
  Phone,
  Mail,
  MessageSquare,
  Paperclip,
} from 'lucide-react';

// Custom Hooks
import { useMountTransition } from '../hooks/useMountTransition';
import { useRecaptcha } from '../hooks/useRecaptcha';

// UI Components
import { FormField } from './ui/FormField';
import { Alert, AlertTitle, AlertDescription } from './ui/Alert';

// Type Definitions
interface ContactFormData {
  name: string;
  phoneNo: string;
  email: string;
  message: string;
  restaurantName: string;
  restaurantCity: string;
  restaurantCountry: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // The rest of your existing, well-written code works perfectly with this setup.
  const { isRendered, isAnimatingIn } = useMountTransition({
    isOpen,
    duration: 300,
  });
  const [status, setStatus] = useState<{ type: Status; message?: string }>({
    type: 'idle',
  });
  const methods = useForm<ContactFormData>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  const {
    executeRecaptcha,
    isLoaded: recaptchaLoaded,
    isLoading: recaptchaIsLoading,
  } = useRecaptcha();

  // Effect to clean up form state when the modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        reset();
        setStatus({ type: 'idle' });
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, reset]);

  // Effect to prevent body scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Effect to close the modal with the Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const onSubmit = async (data: ContactFormData) => {
    setStatus({ type: 'submitting' });
    try {
      if (!recaptchaLoaded)
        throw new Error('Security check is not ready. Please try again.');
      const recaptchaToken = await executeRecaptcha('contact_form');
      if (!recaptchaToken)
        throw new Error(
          'Security verification failed. Please refresh and retry.'
        );

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || 'An unknown error occurred.');

      setStatus({
        type: 'success',
        message: 'Message sent! We will get back to you soon.',
      });
      setTimeout(onClose, 3000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.';
      setStatus({ type: 'error', message });
    }
  };

  if (!isRendered) {
    return null;
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm transition-opacity duration-300 ease-out',
        { 'opacity-100': isAnimatingIn, 'opacity-0': !isAnimatingIn }
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title">
      <div
        className={clsx(
          'bg-slate-50 rounded-lg shadow-2xl w-full max-w-md max-h-[95vh] flex flex-col transition-all duration-300 ease-out',
          {
            'opacity-100 scale-100 translate-y-0': isAnimatingIn,
            'opacity-0 scale-95 -translate-y-4': !isAnimatingIn,
          }
        )}
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex-shrink-0 flex items-start justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <Paperclip className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h2
                id="contact-modal-title"
                className="text-xl font-bold text-slate-800">
                Get in Touch
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill out the form below and we will get back to you.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form Body with Scrolling */}
        <div className="flex-grow p-6 overflow-y-auto">
          <FormProvider {...methods}>
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5">
              {/* Status Messages */}
              {status.type === 'success' && (
                <Alert variant="success">
                  <AlertTitle>Message Sent!</AlertTitle>
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}
              {status.type === 'error' && (
                <Alert variant="destructive">
                  <AlertTitle>Submission Error</AlertTitle>
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}

              <FormField
                name="name"
                label="Name"
                icon={<User className="w-4 h-4 text-slate-500" />}
                placeholder="Your full name"
                rules={{ required: 'Name is required' }}
              />
              <FormField
                name="restaurantName"
                label="Restaurant"
                icon={<Store className="w-4 h-4 text-slate-500" />}
                placeholder="Your restaurant's name"
                rules={{ required: 'Restaurant name is required' }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  name="restaurantCity"
                  label="City"
                  icon={<MapPin className="w-4 h-4 text-slate-500" />}
                  placeholder="e.g., New York"
                  rules={{ required: 'City is required' }}
                />
                <FormField
                  name="restaurantCountry"
                  label="Country"
                  icon={<Globe className="w-4 h-4 text-slate-500" />}
                  placeholder="e.g., USA"
                  rules={{ required: 'Country is required' }}
                />
              </div>
              <FormField
                name="phoneNo"
                label="Phone Number"
                type="tel"
                icon={<Phone className="w-4 h-4 text-slate-500" />}
                placeholder="Your contact number"
                rules={{ required: 'Phone number is required' }}
              />
              <FormField
                name="email"
                label="Email"
                type="email"
                icon={<Mail className="w-4 h-4 text-slate-500" />}
                placeholder="your.email@example.com"
                rules={{ required: 'Email is required' }}
              />
              <FormField
                as="textarea"
                name="message"
                label="Message"
                icon={<MessageSquare className="w-4 h-4 text-slate-500" />}
                placeholder="How can we help?"
                className="resize-none"
                rules={{ required: 'Message is required' }}
              />
            </form>
          </FormProvider>
        </div>

        {/* Footer with Buttons */}
        <div className="flex-shrink-0 flex flex-col-reverse sm:flex-row gap-3 p-6 pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-transparent rounded-md hover:bg-slate-200/60 transition-all">
            Cancel
          </button>
          <button
            type="submit"
            form="contact-form"
            disabled={isSubmitting || recaptchaIsLoading}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:-translate-y-px transition-all">
            {isSubmitting
              ? 'Sending...'
              : recaptchaIsLoading
              ? 'Loading Security...'
              : 'Send Message'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
