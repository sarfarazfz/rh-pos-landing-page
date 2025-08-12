export default function ValuesSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Our guiding principles
          </h2>
          <p className="text-slate-600">
            The foundation of everything we build at RH POS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Restaurant First",
              description:
                "Built by restaurateurs for restaurateurs. We speak your language.",
              icon: "🍽️",
              bgColor: "bg-teal-50",
              borderColor: "border-teal-100",
            },
            {
              title: "Relentless Innovation",
              description:
                "We push boundaries to deliver solutions that actually move your business forward.",
              icon: "🚀",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-100",
            },
            {
              title: "Transparent Partnerships",
              description:
                "No hidden fees or surprises. Just honest relationships built on trust.",
              icon: "🤝",
              bgColor: "bg-amber-50",
              borderColor: "border-amber-100",
            },
            {
              title: "Local Expertise",
              description:
                "Deep understanding of Middle Eastern markets and customs.",
              icon: "🌍",
              bgColor: "bg-emerald-50",
              borderColor: "border-emerald-100",
            },
            {
              title: "Simplicity Wins",
              description:
                "We remove complexity so you can focus on what matters - your guests.",
              icon: "✨",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-100",
            },
            {
              title: "Joy in Service",
              description:
                "We love what we do and it shows in every interaction.",
              icon: "😊",
              bgColor: "bg-rose-50",
              borderColor: "border-rose-100",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-4 sm:p-6 rounded-xl border ${item.borderColor} hover:shadow-md transition-all hover:-translate-y-1 group`}
            >
              <span className="text-2xl sm:text-3xl mb-3 block transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
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
