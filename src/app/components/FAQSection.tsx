'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'What is RH POS and how can it benefit my business?',
    answer:
      'RH POS is a comprehensive Point of Sale system designed for restaurants, cafes, and retail stores in Dubai, UAE, and Saudi Arabia. It streamlines operations, manages inventory, processes payments efficiently, and provides valuable analytics to help you make informed business decisions, ultimately boosting your sales and customer satisfaction.',
  },
  {
    question: 'Is RH POS suitable for both small and large businesses?',
    answer:
      'Absolutely! RH POS is highly scalable. Our Basic plan is perfect for small cafes and single-location shops, while our Pro and Enterprise plans offer advanced features, multi-location support, and custom integrations to meet the demands of larger businesses and growing chains.',
  },
  {
    question: 'What kind of support does RH POS offer?',
    answer:
      "We offer dedicated customer support to ensure your business runs smoothly. Our Pro plan includes 24/7 priority support, while Enterprise clients receive a dedicated account manager and on-site training. We're committed to providing immediate assistance whenever you need it.",
  },
  {
    question: 'How secure is my data with RH POS?',
    answer:
      'Data security is our top priority. RH POS employs advanced security features, including encryption and secure payment processing, to protect your sensitive business and customer information. We adhere to industry best practices to ensure your data is safe and private.',
  },
  {
    question: 'Do you offer a free trial or demo?',
    answer:
      'Yes, we encourage you to experience RH POS firsthand! You can request a free demo to see how our system works and how it can be tailored to your specific business needs. Our Pro plan also includes a free trial to help you get started.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white font-inter">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about RH POS and how it can help
            your business thrive.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 pb-4 text-left text-base font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}>
                {item.question}
                <ChevronDown
                  className={`w-6 h-6 text-teal-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-max-height duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                style={{
                  maxHeight: openIndex === index ? '1000px' : '0px',
                  overflow: 'hidden',
                }}>
                <p className="p-6 pt-2 text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
