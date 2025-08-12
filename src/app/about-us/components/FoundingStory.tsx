import Image from "next/image";

export default function FoundingStory() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 shadow-lg">
              <Image
                src="https://placehold.co/800x450/teal/white?text=RH+POS+Team"
                alt="RH POS team"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              <span className="text-teal-600">Redefining</span> restaurant
              technology
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2025, RH POS was created by restaurant industry
              veterans who saw firsthand how outdated most POS systems were. We
              set out to build a solution that actually works for busy
              restaurants.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our platform combines cutting-edge technology with deep industry
              knowledge to help restaurants streamline operations, increase
              profits, and deliver better guest experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
