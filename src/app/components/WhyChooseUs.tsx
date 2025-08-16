import React from 'react';
import { Clock, LifeBuoy, DollarSign } from 'lucide-react';

const features = [
  {
    Icon: Clock,
    title: 'Easy 30-Min Setup',
    description:
      'Get your entire restaurant up and running with RH POS in less time than a lunch rush.',
  },
  {
    Icon: LifeBuoy,
    title: '24/7 Expert Support',
    description:
      'Our dedicated support team is always available to help you, any time of day or night.',
  },
  {
    Icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'No hidden fees. No surprises. Just simple, straightforward pricing that fits your budget.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="whyChooseUs" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            A Smarter Way to Run Your Restaurant
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            Everything you need to increase efficiency and boost your bottom
            line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-teal-100 text-teal-600 rounded-full p-4">
                  <feature.Icon className="w-8 h-8 sm:w-6 sm:h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
