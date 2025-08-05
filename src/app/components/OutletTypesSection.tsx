import React from 'react';

const outletTypes = [
  'Quick Service (QSR)',
  'Fine Dining',
  'Cafes & Bakeries',
  'Food Trucks',
  'Bars & Pubs',
];

const OutletTypesSection = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Designed for All Restaurants
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            Whatever your format, RH POS is built to help you thrive.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {outletTypes.map((type) => (
            <div
              key={type}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            >
              <p className="font-semibold text-slate-700">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutletTypesSection;
