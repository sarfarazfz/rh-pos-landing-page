import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-xs md:text-sm font-bold uppercase text-slate-400 tracking-widest">
            Trusted by 1,000+ Restaurants & Integrated With
          </h3>
        </div>
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1500}
            breakpoints={{
              480: { spaceBetween: 50, slidesPerView: 2 },
              768: { spaceBetween: 60, slidesPerView: 3 },
              1024: { spaceBetween: 70, slidesPerView: 4 },
            }}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <SwiperSlide key={`${partner.name}-${index}`} className="!w-auto">
                <div className="relative h-16 md:h-20 w-32 md:w-48 opacity-85 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="h-full w-full object-contain"
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
