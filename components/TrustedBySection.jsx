"use client";

import SectionReveal from "./SectionReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function TrustedBySection({ partners = [] }) {
  return (
    <section className="trusted-section mb-5" id="clientele">
      <div className="container px-4 px-md-0">
        <SectionReveal>
          <p className="trusted-label inter-medium">
            Trusted by +25,000 businesses
          </p>
        </SectionReveal>
      </div>
      <div>
        <div className="">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={1.9}
            spaceBetween={20}
            className="brand-marquee d-flex justify-content-center align-items-center"
            speed={4000} // smooth continuous motion
            autoplay={{
              delay: 0, // IMPORTANT for seamless scroll
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            grabCursor={false}
            breakpoints={{
              576: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4.2,
                spaceBetween: 25,
              },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                className="h-100 d-flex justify-content-center align-items-center"
              >
                <div className="partner-pill">{partner}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
