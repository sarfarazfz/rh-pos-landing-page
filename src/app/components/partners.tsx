"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const PARTNERS = [
  { name: "Swiggy", logo: "/partners/swiggy.jpg" },
  { name: "Zomato", logo: "/partners/zomato.jpg" },
  { name: "Foodpanda", logo: "/partners/foodpanda.jpeg" },
  { name: "Noon", logo: "/partners/noon.png" },
  { name: "Careem", logo: "/partners/careem.jpg" },
  { name: "Talabat", logo: "/partners/talabat.jpg" },
  { name: "Smiles", logo: "/partners/smiles.png" },
  { name: "Deliveroo", logo: "/partners/deliveroo.jpg" },
];

export default function Partners() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-xs md:text-sm font-bold uppercase text-slate-400 tracking-widest">
            Trusted by 12,000+ Restaurants & Integrated With
          </h3>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            speed={3000}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            grabCursor={false}
            watchSlidesProgress={true}
            breakpoints={{
              480: { spaceBetween: 50 },
              768: { spaceBetween: 60 },
              1024: { spaceBetween: 70 },
            }}
            className="!overflow-visible"
          >
            {/* Duplicate slides for seamless looping */}
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <SwiperSlide key={`${partner.name}-${index}`} className="!w-auto">
                <div className="relative h-16 md:h-20 w-32 md:w-48 opacity-85 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 128px, 192px"
                    quality={100}
                    priority={index < 8} // Only prioritize first set of images
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
