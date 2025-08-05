import React from 'react';
import {
  ShoppingCart,
  BarChart2,
  Users,
  LifeBuoy,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    Icon: ShoppingCart,
    title: 'Effortless Ordering',
    description:
      'A lightning-fast interface for tableside, online, or QR code orders that reduces errors and speeds up service.',
  },
  {
    Icon: BarChart2,
    title: 'Smart Analytics',
    description:
      'Access powerful sales reports and inventory data to track performance and make smarter business decisions.',
  },
  {
    Icon: Users,
    title: 'Guest Loyalty & CRM',
    description:
      'Build lasting customer relationships with a built-in loyalty program and detailed guest profiles.',
  },
  {
    Icon: LifeBuoy,
    title: '24/7 Expert Support',
    description:
      'Our dedicated support team is always available to help you, any time of day or night, via chat or phone.',
  },
  {
    Icon: Zap,
    title: 'Delivery Integrations',
    description:
      'Seamlessly connect with major food delivery platforms like Swiggy, Zomato, and more, all from one place.',
  },
  {
    Icon: ShieldCheck,
    title: 'Secure & Reliable',
    description:
      'Rest easy with enterprise-grade security, automatic backups, and a 99.9% uptime guarantee.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            The Complete Restaurant OS
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            Our powerful, all-in-one platform is designed to help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 p-8 rounded-xl border border-transparent hover:border-teal-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <feature.Icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {feature.title}
                </h3>
              </div>
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

export default FeaturesSection;
