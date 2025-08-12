'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

const PARTNERS = [
  { name: 'Swiggy', logo: '/partners/swiggy.jpg' },
  { name: 'Zomato', logo: '/partners/zomato.jpg' },
  { name: 'Foodpanda', logo: '/partners/foodpanda.jpeg' },
  { name: 'Noon', logo: '/partners/noon.png' },
  { name: 'Careem', logo: '/partners/careem.jpg' },
  { name: 'Talabat', logo: '/partners/talabat.jpg' },
  { name: 'Smiles', logo: '/partners/smiles.png' },
  { name: 'Deliveroo', logo: '/partners/deliveroo.jpg' },
];

export default function Partners() {
  return (
    <section id="partners" className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-xs md:text-sm font-bold uppercase text-slate-400 tracking-widest">
            Trusted by 12,000+ Restaurants & Integrated With
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={100}
            slidesOffsetBefore={50}
            slidesOffsetAfter={50}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            speed={3000}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            watchSlidesProgress={true}
            breakpoints={{
              480: {
                spaceBetween: 80,
                slidesOffsetBefore: 60,
                slidesOffsetAfter: 60,
              },
              768: {
                spaceBetween: 100,
                slidesOffsetBefore: 80,
                slidesOffsetAfter: 80,
              },
              1024: {
                spaceBetween: 120,
                slidesOffsetBefore: 100,
                slidesOffsetAfter: 100,
              },
            }}
            className="overflow-hidden p-20">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <SwiperSlide key={`${partner.name}-${index}`} className="!w-auto">
                <div className="relative w-14 md:w-20 aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      fill
                      className="object-contain object-center transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 56px, 80px"
                      priority={index < 8}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
