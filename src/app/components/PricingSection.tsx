'use client';
import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'AED 1500',
    frequency: 'per year /per outlet',
    features: [
      'Essential POS features',
      'Basic inventory tracking',
      'Standard reporting',
      'Email support',
      'Single location support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: 'AED 2000',
    frequency: 'per year /per outlet',
    features: [
      'All Basic features',
      'Advanced inventory management',
      'Real-time analytics dashboard',
      'Customer loyalty program',
      '24/7 priority support',
      'Multi-location support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: 'per month',
    features: [
      'All Pro features',
      'Custom integrations (ERP, CRM)',
      'Dedicated account manager',
      'On-site training & setup',
      'Advanced security features',
      'Unlimited locations',
    ],
    isPopular: false,
    buttonText: 'Contact Sales',
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 font-inter">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Flexible Pricing for Every Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect RH POS plan that scales with your needs, whether
            you&apos;re a small cafe or a multi-location retail chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col justify-between 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2
                ${
                  plan.isPopular
                    ? 'border-2 md:border-4 border-teal-700 md:transform md:scale-[1.02] lg:scale-105'
                    : 'border border-gray-200'
                }
              `}>
              <div>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {plan.name}
                </h3>

                <div className="mb-4 md:mb-6">
                  <span className="block text-xl sm:text-1xl md:text-2xl font-extrabold text-teal-600">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-sm md:text-base text-slate-500">
                      {plan.frequency}
                    </span>
                  )}
                </div>

                <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 text-sm md:text-base text-slate-700">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.name === 'Enterprise' && (
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openContactModal'));
                  }}
                  className={`
                    w-full py-2 md:py-3 rounded-lg font-semibold text-white transition-colors duration-300 shadow-md
                    ${
                      plan.isPopular
                        ? 'bg-teal-600 hover:bg-teal-700'
                        : 'bg-gray-700 hover:bg-gray-800'
                    }
                    transform hover:scale-[1.02] md:hover:scale-105
                    text-sm md:text-base
                  `}>
                  {plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
