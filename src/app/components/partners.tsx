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
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-xs md:text-sm font-bold uppercase text-slate-400 tracking-widest">
            Trusted by 12,000+ Restaurants & Integrated With
          </h3>
        </div>

        <div className="relative px-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24} // Slightly more space for larger images
            slidesPerView="auto"
            centeredSlides={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={5000}
            freeMode={true}
            watchSlidesProgress={true}
            breakpoints={{
              480: { spaceBetween: 28 },
              768: { spaceBetween: 32 },
              1024: { spaceBetween: 36 },
            }}
            className="!overflow-visible"
          >
            {PARTNERS.map((partner, index) => (
              <SwiperSlide key={`${partner.name}-${index}`} className="!w-auto">
                <div className="relative h-20 w-48 opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 192px, 240px"
                    quality={100}
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
