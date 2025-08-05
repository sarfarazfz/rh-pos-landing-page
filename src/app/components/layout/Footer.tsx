const Footer = () => {
  return (
    <footer className="bg-slate-800 py-12 md:py-16 text-center px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Ready to Grow Your Restaurant?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-md sm:max-w-xl mx-auto">
          See how RH POS can help you save time, reduce costs, and create
          happier customers.
        </p>
        <a
          href="#"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-base sm:text-lg"
        >
          Get Your Free Demo
        </a>
        <div className="mt-8 sm:mt-12 text-sm sm:text-base text-slate-400">
          &copy; 2025 RH POS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
