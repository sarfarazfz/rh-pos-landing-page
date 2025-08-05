import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white text-center pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-4">
          Your Business,
          <span className="whitespace-nowrap bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            &nbsp;Our Tech
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 mb-10">
          The all-in-one POS solution designed to streamline your operations,
          delight your guests, and grow your profits.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto sm:max-w-md">
          <a
            href="#"
            className="text-center text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get A Free Demo
          </a>
          <a
            href="#"
            className="text-center text-base font-semibold text-slate-700 bg-white hover:bg-slate-200 py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
