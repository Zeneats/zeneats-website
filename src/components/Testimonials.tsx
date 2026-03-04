"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "VP of Digital Banking, HDFC Bank",
    quote:
      "ZenEats transformed how our users engage with the app. We saw a 3x increase in daily sessions within the first quarter of integration.",
    company: "HDFC",
    color: "#004B87",
  },
  {
    name: "Priya Sharma",
    role: "Head of Partnerships, Flipkart",
    quote:
      "The banking audience ZenEats gave us access to was incredibly high-intent. Our conversion rates were 2x higher than any other channel.",
    company: "Flipkart",
    color: "#2874F0",
  },
  {
    name: "Amit Patel",
    role: "Chief Product Officer, Axis Bank",
    quote:
      "Integrating ZenEats' reward layer took less than 2 weeks. The impact on our UPI adoption metrics was immediate and sustained.",
    company: "Axis",
    color: "#800054",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Director, Swiggy",
    quote:
      "ZenEats helped us reach banking app users at exactly the right moment — when they're thinking about spending. It's a game-changer.",
    company: "Swiggy",
    color: "#FC8019",
  },
  {
    name: "Vikram Singh",
    role: "GM Digital Channels, SBI",
    quote:
      "Our customers love the rewards experience. NPS scores for our mobile app improved by 18 points after launching with ZenEats.",
    company: "SBI",
    color: "#22409A",
  },
  {
    name: "Ananya Desai",
    role: "Brand Strategy Lead, Myntra",
    quote:
      "We achieved 500K impressions in the first week alone. The quality of engagement through banking apps is unmatched.",
    company: "Myntra",
    color: "#FF3F6C",
  },
  {
    name: "Karthik Nair",
    role: "CTO, Kotak Mahindra Bank",
    quote:
      "ZenEats' SDK was the easiest third-party integration we've ever done. Clean API, great docs, and stellar support.",
    company: "Kotak",
    color: "#ED1C24",
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-[28px] md:text-[40px] font-medium text-text-heading text-center mb-3">
          Voices of <em className="text-accent not-italic italic">impact</em>
        </h2>
        <p className="text-base text-text-primary text-center mb-10 max-w-[500px] mx-auto">
          Hear from the leaders who trust ZenEats to power engagement.
        </p>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="glass-card rounded-3xl p-6 h-full flex flex-col">
                <p className="text-base font-light text-text-primary mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-base font-normal text-[#E4E4E4]">
                    {t.name}
                  </p>
                  <p className="text-sm font-normal text-text-muted">
                    {t.role}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-white text-[8px] font-bold"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.company.charAt(0)}
                    </div>
                    <span className="text-xs text-text-muted">
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
