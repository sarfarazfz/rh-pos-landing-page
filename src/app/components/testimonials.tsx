"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image"; // Import the Next.js Image component
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Switching to RH POS was a game-changer. Our service is faster, our inventory is under control, and our customers love the loyalty program. Sales are up 15%!",
    name: "Maria Garcia",
    role: "Owner, The Corner Cafe",
    avatar: "https://placehold.co/100x100/14b8a6/FFFFFF?text=MG",
  },
  {
    id: 2,
    quote:
      "The analytics are incredibly powerful. I can see my top-selling items and busiest hours at a glance, which helps me make smarter staffing and purchasing decisions.",
    name: "David Chen",
    role: "Manager, Urban Eats",
    avatar: "https://placehold.co/100x100/0d9488/FFFFFF?text=DC",
  },
  {
    id: 3,
    quote:
      "The 24/7 support is fantastic. Any time I have a question, the RH POS team is there to help immediately. It gives me great peace of mind.",
    name: "John Smith",
    role: "Founder, The Burger Joint",
    avatar: "https://placehold.co/100x100/2dd4bf/FFFFFF?text=JS",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial-slider py-20 md:py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Don't Just Take Our Word For It
          </h2>
        </div>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              nextEl: ".testimonial-button-next",
              prevEl: ".testimonial-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            className="pb-16"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="material-card p-8 max-w-2xl mx-auto">
                  <p className="text-slate-600 mb-6 text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
                      {/* Using the Next.js Image component */}
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                        unoptimized={true} // Placeholder images don't need optimization
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation and Pagination elements */}
          <button
            className="testimonial-button-next absolute top-1/2 -translate-y-1/2 right-0 md:right-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-teal-600"
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
          <button
            className="testimonial-button-prev absolute top-1/2 -translate-y-1/2 left-0 md:left-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-teal-600"
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
          <div className="testimonial-pagination flex justify-center mt-8 space-x-2" />
        </div>
      </div>
    </section>
  );
}
