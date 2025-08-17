import Image from "next/image";
import { Users, Clock, Globe } from "lucide-react";

interface PrincipleCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl?: string | null;
}

export default function CorePrinciples() {
  const principles: PrincipleCard[] = [
    {
      icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />,
      title: "User-first design",
      description: "Intuitive interface for restaurant workflows",
      imageUrl: "https://placehold.co/600x400/e5f5f9/teal?text=UX+Design",
    },
    {
      icon: <Globe className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />,
      title: "Local expertise",
      description: "Built for Middle Eastern markets",
      imageUrl: "https://placehold.co/600x400/e5f5f9/teal?text=Localized",
    },
    {
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />,
      title: "Always improving",
      description: "Continuous updates from feedback",
      imageUrl: "https://placehold.co/600x400/e5f5f9/teal?text=Updates",
    },
  ];

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Built different from day one
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            We are not just another POS company. Here is what makes us
            different:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="relative aspect-[5/3] w-full bg-slate-100">
                {item.imageUrl ? (
                  <Image
                    src={encodeURI(item.imageUrl)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    priority={index < 2}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-teal-600 text-base md:text-lg">
                    {item.title}
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5">
                <div className="w-8 h-8 bg-teal-50 rounded-md flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
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
