"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState } from "react";
import SectionReveal from "./SectionReveal";
import RequestQuoteModal from "./RequestQuoteModal";

export default function HeroFold2({ data }) {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero-section hero-section-2" id="home" ref={heroRef}>
        <motion.div className="hero-bg" style={{ y }}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={data.backgroundImageMobile}
            />
            <source
              media="(min-width: 768px)"
              srcSet={data.backgroundImageDesktop}
            />
            <img
              src={data.backgroundImageDesktop}
              alt="Cargo logistics background"
              className="hero-bg-image"
            />
          </picture>
          {data.showTextonDesktop && <div className="hero-overlay" />}
        </motion.div>

        <div
          className={`container px-4 px-md-0 hero-content-wrap ${data.showTextonDesktop ? "" : "d-md-none"}`}
        >
          <div className="row min-vh-100 align-items-center">
            <div className="col-12 col-lg-7 col-xl-6 position-relative z-2">
              <SectionReveal delay={0.15}>
                <div className="hero-copy hero-copy-2">
                  <h1>{data.title}</h1>
                  <p>{data.subtitle}</p>

                  {Array.isArray(data.buttons) &&
                  data.buttons.some((button) => button.show) ? (
                    <div className="hero-actions">
                      {data.buttons
                        .filter((button) => button.show)
                        .map((button) =>
                          button.variant === "success" ? (
                            <>
                              <button
                                className="btn btn-success-custom hero-btn"
                                onClick={handleButtonClick}
                              >
                                {button.label}
                              </button>
                            </>
                          ) : (
                            <>
                              <a
                                key={button.label}
                                href={button.href}
                                className={`btn hero-btn 
                              btn-primary-custom`}
                              >
                                {button.label}
                              </a>
                            </>
                          ),
                        )}
                    </div>
                  ) : null}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>

        {Array.isArray(data.stats) && data.stats.length ? (
          <div className="stats-outer">
            <div className="container px-4 px-md-0 stats-float-wrap">
              <SectionReveal yOffset={30}>
                <div className="stats-card">
                  <div className="row g-0">
                    {data.stats.map((item, index) => (
                      <div className="col-4" key={item.label}>
                        <div
                          className={`stat-item ${
                            index !== data.stats.length - 1
                              ? "with-divider"
                              : ""
                          }`}
                        >
                          <div className="stat-number">
                            <CountUp
                              end={item.value}
                              duration={2.4}
                              enableScrollSpy
                              scrollSpyOnce
                            />
                            {item.suffix || ""}
                          </div>
                          <div className="stat-label">{item.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        ) : null}
      </section>
      {!data.showTextonDesktop && (
        <div className="mt-5 pb-4 hero-desktop-copy d-none d-md-block container px-4 px-md-0 text-center">
          <h1 style={{ fontSize: "40px", fontWeight: "500" }} className="mb-3">
            {data.title}
          </h1>
          <div className="d-flex justify-content-center align-items-center">
            <p style={{ fontSize: "20px" }} className="w-75">
              {data.subtitle}
            </p>
          </div>
        </div>
      )}
      <RequestQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitForm={data.onSubmitQuoteForm}
      />
    </>
  );
}
