import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  heroImageUrl?: string | null;
}

export default function HeroSection({ heroImageUrl }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-700 to-teal-800 py-16 md:py-24 text-white">
      {heroImageUrl ? (
        <Image
          src={encodeURI(heroImageUrl)}
          alt="RH POS System"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-20"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-200 opacity-20" />
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            About RH POS
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
            Modern POS solutions designed for todays restaurants
          </p>
        </div>
      </div>
    </section>
  );
}
