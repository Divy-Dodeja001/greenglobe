"use client";

import CTASection from "@/components/CTASection";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";
import HeroFold2 from "@/components/HeroFold2";
import SectionReveal from "@/components/SectionReveal";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Icon } from "@iconify/react";

const page = () => {
  const heroData = {
    logo: {
      src: "https://placehold.co/120x120/png?text=GG",
      alt: "GreenGlobe Logistics",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Clientele", href: "/clientele" },
    ],
    title: "Built on experience. Driven by trust.",
    subtitle:
      "GreenGlobe Logistics is a global freight forwarding company with over 22 years of experience in managing complex logistics operations across international markets.",
    backgroundImageDesktop: "/aboutHeroDesktop.png",
    backgroundImageMobile: "/aboutHeroMobile.png",
    showTextonDesktop: true,
  };

  const brandPointers = [
    {
      heading: "Reliability",
      text: "Delivering consistent outcomes across every shipment.",
      image:"icon-park-outline:protect"
    },
    {
      heading: "Precision",
      text: "Managing logistics with attention to detail at every stage.",
      image: "fluent:target-16-regular",
    },
    {
      heading: "Transparency",
      text: "Clear communication and honest operations.",
      image:"basil:hotspot-outline"
    },
    {
      heading: "Long-term partnerships",
      text: "Building relationships that grow with our clients.",
      image:"ph:handshake-light"
    },
  ];

  return (
    <>
      <FloatingHeader logo={heroData.logo} navLinks={heroData.navLinks} />
      <HeroFold2 data={heroData} />
      <div className="py-5 container px-4 px-md-0">
        <div className="border border-secondary d-flex justify-content-between flex-column flex-md-row p-3 p-md-0">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ps-md-5">
            <div>
              <h2 className="mb-4">
                Leadership that understands logistics from the ground up.
              </h2>
              <p>
                Founded by Kanika Arora, GreenGlobe Logistics is built on deep
                operational knowledge and hands-on experience.
              </p>

              <div className="d-lg-none mb-3">
                <div className="col-12 col-md-6 d-flex justify-content-end">
                  <img
                    src="./founder-about.jpg"
                    className="img-fluid"
                    alt="Founder"
                  />
                </div>
              </div>

              <p>
                As a women-led organisation in a traditionally male-dominated
                industry, GreenGlobe brings a fresh yet disciplined approach to
                global logistics, focused on accountability, precision, and
                long-term value creation.
              </p>
            </div>
          </div>

          <div className="d-none d-md-block col-12 col-md-6">
            <div className="d-flex justify-content-end">
              <img
                src="./founder-about.jpg"
                className="img-fluid"
                alt="Founder"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-5 pointer-slider-section my-5"
        style={{ backgroundColor: "#efefef" }}
      >
        <div className="container px-4 px-md-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            slidesPerView={1.2}
            spaceBetween={16}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1.6,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {brandPointers.map((pointer, index) => (
              <SwiperSlide key={index}>
                <div
                  className="pointer-card p-4 bg-white border"
                  style={{ height: "230px" }}
                >
                  <div className="mb-2">
                    <Icon
                      icon={pointer.image}
                      width="52"
                      height="52"
                      style={{ color: "#027EB9" }}
                    />
                  </div>
                  <p style={{ fontSize: "18px" }} className="inter-bold mb-2">
                    {pointer.heading}
                  </p>
                  <p style={{ fontSize: "16px" }} className="mb-0">
                    {pointer.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <section className="leadership-section py-5" id="about">
        <div className="container px-4 px-md-0">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-6 order-2 order-lg-1 m-0 mt-3">
              <SectionReveal>
                <div className="leadership-copy pe-lg-4 mx-auto d-none d-md-block">
                  <h2 className="section-title text-start mb-4 w-75">
                    Operating across 20+ countries
                  </h2>
                  <p>
                    Supporting international trade through a trusted network of
                    carriers, agents, and port partners.
                  </p>
                </div>
              </SectionReveal>
            </div>

            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <SectionReveal delay={0.15}>
                <div className="leadership-visual mx-auto d-md-none">
                  <h2 className="section-title text-start mb-3">
                    Operating across 20+ countries
                  </h2>
                  <p className="pb-4">
                    Supporting international trade through a trusted network of
                    carriers, agents, and port partners.
                  </p>
                </div>
                <div>
                  <img src="/map.png" className="w-100" alt="Map" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a reliable logistics partner?"
        subtitle="Let our team guide your next shipment."
        buttonLabel="Request a Quote"
      />

      <Footer />
    </>
  );
};

export default page;
