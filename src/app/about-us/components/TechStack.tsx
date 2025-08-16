import { Smartphone, Server, Shield, Zap } from 'lucide-react';
export default function TechStack() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Built with modern technology
          </h2>
          <p className="text-slate-600">
            We leverage the latest tech to deliver a reliable, secure platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: <Server className="w-6 h-6 text-teal-600" />,
              title: 'Cloud Infrastructure',
              description: 'AWS-powered for maximum reliability',
            },
            {
              icon: <Smartphone className="w-6 h-6 text-teal-600" />,
              title: 'Mobile First',
              description: 'Works seamlessly on all devices',
            },
            {
              icon: <Shield className="w-6 h-6 text-teal-600" />,
              title: 'Bank-grade Security',
              description: 'End-to-end encryption',
            },
            {
              icon: <Zap className="w-6 h-6 text-teal-600" />,
              title: 'Real-time Sync',
              description: 'Instant updates across locations',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-md flex items-center justify-center mx-auto mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
