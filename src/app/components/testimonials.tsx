'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Switching to RH POS was a game-changer. Our service is faster, our inventory is under control, and our customers love the loyalty program. Sales are up 15%!',
    name: 'Maria Garcia',
    role: 'Owner, The Corner Cafe',
    avatar: 'https://placehold.co/100x100/14b8a6/FFFFFF?text=MG',
  },
  {
    id: 2,
    quote:
      'The analytics are incredibly powerful. I can see my top-selling items and busiest hours at a glance, which helps me make smarter staffing and purchasing decisions.',
    name: 'David Chen',
    role: 'Manager, Urban Eats',
    avatar: 'https://placehold.co/100x100/0d9488/FFFFFF?text=DC',
  },
  {
    id: 3,
    quote:
      'The 24/7 support is fantastic. Any time I have a question, the RH POS team is there to help immediately. It gives me great peace of mind.',
    name: 'John Smith',
    role: 'Founder, The Burger Joint',
    avatar: 'https://placehold.co/100x100/2dd4bf/FFFFFF?text=JS',
  },
];

export default function TestimonialSlider() {
  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
            Do not Just Take Our Word For It
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            }}
            breakpoints={{
              640: {
                spaceBetween: 32,
              },
              1024: {
                spaceBetween: 40,
              },
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="pt-2 pb-12">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 max-w-2xl mx-auto hover:-translate-y-1">
                    <p className="text-slate-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm sm:text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="testimonial-button-prev hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-teal-600 hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="testimonial-button-next hidden sm:flex absolute top-1/2 -translate-y-1/2 right-0 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-teal-600 hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
