export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-teal-700 to-teal-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-12 shadow-lg border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Ready to transform your restaurant?
          </h2>
          <p className="text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join hundreds of restaurants using RH POS to streamline operations
            and grow their business
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {/* <button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="bg-teal-600 text-white hover:scale-105 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all border-2 border-teal-600 text-sm sm:text-base">
                Get a Demo
              </button> */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
              className="bg-white text-teal-600 border-teal-600 hover:scale-105 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all border-2 text-sm sm:text-base">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
