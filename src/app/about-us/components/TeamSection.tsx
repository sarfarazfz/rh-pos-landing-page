import Image from 'next/image';
export default function TeamSection() {
  return (
    <section className="py-10 md:py-14 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
            Meet the founders
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto">
            The experienced team behind RH POS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          {[
            {
              name: 'Sarfaraz Shaikh',
              role: 'Co-Founder & CEO',
              image: 'https://placehold.co/600x600/e5f5f9/teal?text=Sarfaraz',
            },
            {
              name: 'Javad Sayyad',
              role: 'Co-Founder & CTO',
              image: 'https://placehold.co/600x600/e5f5f9/teal?text=Javad',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-md border border-slate-200 overflow-hidden hover:shadow-xs transition-all">
              <div className="relative aspect-square w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
                  priority={index === 0} // Only prioritize first image
                />
              </div>
              <div className="p-2.5 sm:p-3">
                <h3 className="text-xs font-bold text-slate-800">
                  {member.name}
                </h3>
                <p className="text-[0.65rem] text-teal-600 mb-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
