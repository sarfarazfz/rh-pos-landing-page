'use client';

import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { clsx } from 'clsx';

// Custom Hooks
import { useMountTransition } from '../hooks/useMountTransition';
import { FormField } from './ui/FormField';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { Alert, AlertTitle, AlertDescription } from './ui/Alert';
import { useModalTrigger } from '../hooks/useModalTrigger';

// Headless UI and Icons
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Floating UI hooks
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
} from '@floating-ui/react';

// assets
import { countryCodes } from '@/app/assets/countryCode';
// Type Definitions
interface InquiryFormData {
  name: string;
  countryCode: string;
  phoneNo: string;
  queryType: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface InquiryModalProps {
  isContactModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const InquiryModal: React.FC<InquiryModalProps> = ({
  isContactModalOpen,
  onOpen,
  onClose,
  isOpen,
}) => {
  const { isRendered, isAnimatingIn } = useMountTransition({
    isOpen,
    duration: 300,
  });

  const [status, setStatus] = useState<{ type: Status; message?: string }>({
    type: 'idle',
  });

  useEffect(() => {
    const isSubmitted = sessionStorage.getItem('inquiryFormSubmitted');
    if (isSubmitted || isContactModalOpen) return;

    // Set timer for inquiry popup
    const timer = setTimeout(() => {
      onOpen();
    }, 25000);

    return () => clearTimeout(timer);
  }, [isContactModalOpen, onOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const methods = useForm<InquiryFormData>({
    defaultValues: {
      name: '',
      countryCode: '+91',
      phoneNo: '',
      queryType: '',
      message: '',
    },
  });
  const [selected, setSelected] = useState(countryCodes[0]);
  const [search, setSearch] = useState('');

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  const filteredCountries = countryCodes.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useModalTrigger({
    openModal: onClose,
    isModalOpen: isOpen,
    storageKey: 'inquiryFormSubmitted',
  });

  const {
    executeRecaptcha,
    isLoaded: recaptchaLoaded,
    isLoading: recaptchaIsLoading,
  } = useRecaptcha();

  const queryOptions = [
    'Looking for Restaurant Software Demo',
    'Software Support/Training',
    'Become Reseller/Partner',
    'Job/Internship',
  ];

  const onSubmit = async (data: InquiryFormData) => {
    setStatus({ type: 'submitting' });
    try {
      if (!recaptchaLoaded)
        throw new Error('Security check is not ready. Please try again.');
      const recaptchaToken = await executeRecaptcha('inquiry_form');
      if (!recaptchaToken)
        throw new Error(
          'Security verification failed. Please refresh and retry.'
        );

      const finalData = {
        ...data,
        countryCode: selected.code,
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...finalData, recaptchaToken }),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || 'An unknown error occurred.');

      setStatus({
        type: 'success',
        message: 'Message sent! We will get back to you soon.',
      });
      sessionStorage.setItem('inquiryFormSubmitted', 'true');
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
      aria-labelledby="inquiry-modal-title">
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
        <div className="flex-shrink-0 p-6">
          <h2
            id="inquiry-modal-title"
            className="text-xl font-bold text-teal-700">
            What are you looking for?
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Let us know how we can help, and we will get in touch right away.
          </p>
        </div>

        {/* Form Body */}
        <div className="flex-grow px-6 pb-6 overflow-y-auto">
          <FormProvider {...methods}>
            <form
              id="inquiry-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5">
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
              <FormField name="name" placeholder="Your Name" />

              <div className="flex gap-2 items-start">
                <Listbox value={selected} onChange={setSelected}>
                  <ListboxButton
                    ref={refs.setReference}
                    className="relative mt-1.5 min-w-[90px] cursor-pointer rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="mr-2">{selected.flag}</span>
                      <span>{selected.code}</span>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                    </span>
                  </ListboxButton>

                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <ListboxOptions
                      ref={refs.setFloating}
                      style={floatingStyles}
                      className="mt-1 min-w-[250px] max-h-64 z-[99999] overflow-y-auto rounded-md border border-slate-200 bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar-thin scrollbar-thumb-slate-300 hover:scrollbar-thumb-slate-400">
                      <div className="px-2 pb-2 sticky top-0 bg-white z-10 border-b border-slate-200">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                            }
                          }}
                          className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      {filteredCountries.map((country) => (
                        <ListboxOption
                          key={country.code}
                          value={country}
                          className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 transition-colors ui-active:bg-teal-50 ui-active:text-teal-900">
                          <div className="flex items-center">
                            <span className="mr-2">{country.flag}</span>
                            <span>{country.label}</span>
                            <span className="ml-auto text-gray-500">
                              {country.code}
                            </span>
                          </div>
                        </ListboxOption>
                      ))}

                      {filteredCountries.length === 0 && (
                        <div className="relative cursor-default select-none py-2 px-3 text-gray-500">
                          No results found
                        </div>
                      )}
                    </ListboxOptions>
                  </Transition>
                </Listbox>

                <FormField
                  name="phoneNo"
                  placeholder="Your Phone Number"
                  rules={{
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'Phone number must be 10 digits',
                    },
                  }}
                  className="flex-1"
                />
              </div>

              <FormField as="select" name="queryType">
                <option value="" disabled>
                  -- What are looking for ? --
                </option>
                {queryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FormField>
              {/* /message field */}
              <FormField
                as="textarea"
                name="message"
                placeholder="Your message"
                className="resize-none h-16"
              />
              <p className="text-xs text-slate-500 mt-1">
                We will never share your personal information with anyone.
              </p>
            </form>
          </FormProvider>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 flex flex-col-reverse sm:flex-row gap-3 p-6 pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-transparent rounded-md hover:bg-slate-200/60 transition-all">
            Close
          </button>
          <button
            type="submit"
            form="inquiry-form"
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

export default InquiryModal;
