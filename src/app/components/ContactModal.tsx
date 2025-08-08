'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContactTrigger } from '../hooks/useContactTrigger';
import { useRecaptcha } from '../hooks/useRecaptcha';

interface ContactFormData {
  name: string;
  phoneNo: string;
  email: string;
  message: string;
  restaurantName: string;
  restaurantCity: string;
  restaurantCountry: string;
}

const ContactModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const { executeRecaptcha, isLoaded: recaptchaLoaded } = useRecaptcha();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    reset(); // Reset form when modal closes
  };

  useContactTrigger({ openModal, isModalOpen });

  // Listen for custom event from header button
  useEffect(() => {
    const handleOpenModal = () => {
      openModal();
    };

    window.addEventListener('openContactModal', handleOpenModal);

    return () => {
      window.removeEventListener('openContactModal', handleOpenModal);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Reset any previous error states
      setShowError(false);
      setErrorMessage('');

      // Check if reCAPTCHA is loaded
      if (!recaptchaLoaded) {
        throw new Error(
          'Security verification is loading. Please wait and try again.'
        );
      }

      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form');
      if (!recaptchaToken) {
        throw new Error(
          'Security verification failed. Please refresh the page and try again.'
        );
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 429) {
          throw new Error(
            `Too many requests. Please try again in ${
              result.retryAfter || 15
            } minutes.`
          );
        }
        if (response.status === 422) {
          throw new Error('Security verification failed. Please try again.');
        }
        if (result.errors) {
          // Handle validation errors
          const errorMessages = Object.values(result.errors).flat();
          throw new Error(errorMessages.join(', '));
        }
        throw new Error(
          result.message || result.error || 'Failed to send message'
        );
      }

      // Success!
      localStorage.setItem('contactFormSubmitted', 'true');

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        closeModal();
      }, 3000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Sorry, there was an error submitting your message. Please try again.';

      setErrorMessage(message);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
        setErrorMessage('');
      }, 8000);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  // Phone number validation function
  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return (
      phoneRegex.test(phone.replace(/[\s\-\(\)]/g, '')) ||
      'Please enter a valid phone number'
    );
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-1 sm:p-4"
      onClick={handleBackdropClick}>
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-full sm:max-w-md max-h-[98vh] sm:max-h-[85vh] overflow-y-auto relative mx-1 sm:mx-0"
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-teal-100 bg-gradient-to-r from-teal-50 to-teal-100">
          <h2 className="text-lg sm:text-2xl font-bold text-teal-800">
            Contact Us
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-white/50"
            aria-label="Close modal">
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

        {/* Success Message */}
        {showSuccess && (
          <div className="mx-3 sm:mx-6 mt-3 sm:mt-4 p-2 sm:p-4 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-lg">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-teal-800 font-semibold text-sm">
                  Message Sent Successfully!
                </h3>
                <p className="text-teal-700 text-sm mt-1">
                  Thank you for your message! We will get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {showError && (
          <div className="mx-3 sm:mx-6 mt-3 sm:mt-4 p-2 sm:p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-red-800 font-semibold text-sm">
                  Oops! Something went wrong
                </h3>
                <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 sm:p-6 space-y-3 sm:space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* restaurant name fields */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant *
            </label>
            <input
              type="text"
              id="name"
              {...register('restaurantName', {
                required: 'restaurant is required',
                minLength: {
                  value: 2,
                  message: 'Restaurant name must be at least 2 characters',
                },
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                errors.restaurantName ? 'border-red-500' : ''
              }`}
              placeholder="Enter your full name"
            />
            {errors.restaurantName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.restaurantName.message}
              </p>
            )}
          </div>

          {/* restaurant city */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant City *
            </label>
            <input
              type="text"
              id="name"
              {...register('restaurantCity', {
                required: 'restaurantCity is required',
                minLength: {
                  value: 2,
                  message: 'Restaurant City must be at least 2 characters',
                },
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                errors.restaurantCity ? 'border-red-500' : ''
              }`}
              placeholder="Enter your full name"
            />
            {errors.restaurantCity && (
              <p className="mt-1 text-sm text-red-600">
                {errors.restaurantCity.message}
              </p>
            )}
          </div>

          {/* Restaurant country */}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant Country *
            </label>
            <input
              type="text"
              id="name"
              {...register('restaurantCountry', {
                required: 'restaurantCountry is required',
                minLength: {
                  value: 2,
                  message: 'Restaurant Country must be at least 2 characters',
                },
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                errors.restaurantCountry ? 'border-red-500' : ''
              }`}
              placeholder="Enter your full name"
            />
            {errors.restaurantCountry && (
              <p className="mt-1 text-sm text-red-600">
                {errors.restaurantCountry.message}
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNo"
              {...register('phoneNo', {
                required: 'Phone number is required',
                validate: validatePhoneNumber,
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                errors.phoneNo ? 'border-red-500' : ''
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phoneNo && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phoneNo.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-colors ${
                errors.message ? 'border-red-500' : ''
              }`}
              placeholder="Enter your message..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
