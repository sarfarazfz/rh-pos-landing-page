'use client';

import React, { useState, FormEvent } from 'react';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
};

const ContactUsSection = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [generalErrorMessage, setGeneralErrorMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setGeneralErrorMessage('');
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      phoneNo: formData.get('phoneNo'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setGeneralErrorMessage(result.message || 'Message sent successfully!');
        (event.target as HTMLFormElement).reset();

        setTimeout(() => {
          setStatus('idle');
          setGeneralErrorMessage('');
        }, 3000);
      } else {
        setStatus('error');
        const errorMessage = result.message || 'An unknown error occurred.';

        if (errorMessage.includes('Name')) {
          setErrors({ name: errorMessage });
        } else if (errorMessage.includes('Email')) {
          setErrors({ email: errorMessage });
        } else if (errorMessage.includes('Message')) {
          setErrors({ message: errorMessage });
        } else if (errorMessage.includes('Phone')) {
          setErrors({ phone: errorMessage });
        } else {
          setGeneralErrorMessage(errorMessage);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        setStatus('error');
        setGeneralErrorMessage(
          'An unexpected error occurred. Please try again.'
        );
      } else {
        console.log(error);
      }
    }
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to see a demo? We would love to hear from
            you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`mt-1 block w-full px-4 py-3 bg-slate-50 border rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 ${
                  errors.name ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertTriangle size={16} />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Phone No.
              </label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                required
                className={`mt-1 block w-full px-4 py-3 bg-slate-50 border rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 ${
                  errors.phone ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertTriangle size={16} />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`mt-1 block w-full px-4 py-3 bg-slate-50 border rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 ${
                  errors.email ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertTriangle size={16} />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`mt-1 block w-full px-4 py-3 bg-slate-50 border rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 ${
                  errors.message ? 'border-red-500' : 'border-slate-300'
                }`}
              ></textarea>

              {errors.message && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertTriangle size={16} />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 py-3 px-12 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:bg-teal-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Send />
                )}
                <span>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </div>
          </form>

          {(generalErrorMessage || status !== 'idle') && (
            <div
              className={`mt-6 p-4 rounded-lg text-center text-sm font-medium flex items-center justify-center gap-2 ${
                status === 'success' ? 'bg-green-100 text-green-800' : ''
              } ${status === 'error' ? 'bg-red-100 text-red-800' : ''}`}
            >
              {status === 'success' && <CheckCircle size={20} />}
              {status === 'error' && <AlertTriangle size={20} />}
              {generalErrorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
