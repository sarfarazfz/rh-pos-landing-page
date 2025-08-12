import Image from "next/image";
import { Users, Clock, Globe } from "lucide-react";
export default function CorePrinciples() {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
            Built different from day one
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            We are not just another POS company. Here it is what makes us
            different:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              icon: <Users className="w-3.5 h-3.5 text-teal-600" />,
              title: "User-first design",
              description: "Intuitive interface for restaurant workflows",
              image: "https://placehold.co/600x400/e5f5f9/teal?text=UX+Design",
            },
            {
              icon: <Globe className="w-3.5 h-3.5 text-teal-600" />,
              title: "Local expertise",
              description: "Built for Middle Eastern markets",
              image: "https://placehold.co/600x400/e5f5f9/teal?text=Localized",
            },
            {
              icon: <Clock className="w-3.5 h-3.5 text-teal-600" />,
              title: "Always improving",
              description: "Continuous updates from feedback",
              image: "https://placehold.co/600x400/e5f5f9/teal?text=Updates",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md border border-slate-200 hover:shadow-xs transition-all overflow-hidden group"
            >
              <div className="relative aspect-[5/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.015] transition-transform duration-150"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
                  priority={index < 2} // Only prioritize first 2 images
                />
              </div>
              <div className="p-2.5 sm:p-3">
                <div className="w-7 h-7 bg-teal-50 rounded-sm flex items-center justify-center mb-1.5">
                  {item.icon}
                </div>
                <h3 className="text-xs font-semibold text-slate-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-[0.65rem] text-slate-600 leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
