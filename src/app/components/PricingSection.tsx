"use client";
import React from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "AED 1500",
    frequency: "per year /per outlet",
    features: [
      "Essential POS features",
      "Basic inventory tracking",
      "Standard reporting",
      "Email support",
      "Single location support",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "AED 2000",
    frequency: "per year /per outlet",
    features: [
      "All Basic features",
      "Advanced inventory management",
      "Real-time analytics dashboard",
      "Customer loyalty program",
      "24/7 priority support",
      "Multi-location support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "per month",
    features: [
      "All Pro features",
      "Custom integrations (ERP, CRM)",
      "Dedicated account manager",
      "On-site training & setup",
      "Advanced security features",
      "Unlimited locations",
    ],
    isPopular: false,
    buttonText: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 font-inter"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Flexible Pricing for Every Business
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect RH POS plan that scales with your needs, whether
            you&apos;re a small cafe or a multi-location retail chain.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                ${
                  plan.isPopular
                    ? "border-4 border-teal-700 transform scale-105"
                    : "border border-gray-200"
                }
              `}
            >
              <div>
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-teal-600">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-lg text-slate-500">
                      /{plan.frequency}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="mb-8 space-y-3 text-slate-700">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-base"
                    >
                      <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.name === "Enterprise" && (
                <button
                  className={`
                    w-full py-3 rounded-lg font-semibold text-white transition-colors duration-300 shadow-md
                    ${
                      plan.isPopular
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-gray-700 hover:bg-gray-800"
                    }
                    transform hover:scale-105
                  `}
                >
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
