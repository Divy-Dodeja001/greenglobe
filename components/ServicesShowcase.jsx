"use client";

import { useEffect, useState } from "react";
import "../styles/servicesShowcase.css";
import { Icon } from "@iconify/react";
import RequestQuoteModal from "./RequestQuoteModal";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesShowcase({
  services = [],
  active,
  onSubmitQuoteForm,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeService, setActiveService] = useState(null);
  useEffect(() => {
    if (!services.length) return;

    if (active) {
      const index = services.findIndex((s) => s.slug === active);

      if (index !== -1) {
        setActiveIndex(index);
        setActiveService(services[index]);
      }
    } else {
      setActiveService(services[activeIndex]);
    }
  }, [active, activeIndex]);

  if (!services.length) return null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="services-showcase-section py-5 my-4" id="showcase">
        {activeService && (
          <div className="container px-3 px-md-0">
            <div className="service-tabs-scroll mb-5">
              <div className="service-tabs-list">
                {services.map((service, index) => (
                  <button
                    key={service.slug || service.title || index}
                    type="button"
                    className={`service-tab-btn ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {service.tabLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="service-main-card">
              <div className="service-hero-block d-none d-md-block">
                <div className="service-hero-media">
                  <img
                    src={activeService.imageDesktop || activeService.image}
                    alt={activeService.title}
                    className="img-fluid w-100"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`overlay-${activeService.title}`}
                      className="service-hero-overlay"
                      initial={{ scaleX: 0, transformOrigin: "left center" }}
                      animate={{ scaleX: 1, transformOrigin: "left center" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`copy-${activeService.title}`}
                      className="service-hero-copy"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {activeService.icon && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.45 }}
                        >
                          <Icon
                            icon={activeService.icon}
                            className="servicepage-icon"
                            style={{ color: "white" }}
                          />
                        </motion.div>
                      )}

                      <motion.h3
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.5 }}
                      >
                        {activeService.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.6 }}
                      >
                        {activeService.description}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.div
                  key={`info-${activeService.title}`}
                  className="service-info-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9, // 👈 AFTER copy animation
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {" "}
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="service-info-col with-divider">
                        <h4>What we handle</h4>
                        <ul>
                          {activeService.whatWeHandle?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="service-info-col">
                        <h4>Who this is ideal for</h4>
                        <ul>
                          {activeService.idealFor?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {activeService.buttonLabel && (
                    <div className="text-center mt-3">
                      <button
                        className="btn service-quote-btn"
                        onClick={handleButtonClick}
                      >
                        {activeService.buttonLabel}
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="d-block d-md-none">
                <motion.div
                  key={`mobile-copy-${activeService.title}`}
                  className="service-mobile-copy mb-4"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3>{activeService.title}</h3>
                  <p>{activeService.description}</p>
                </motion.div>

                <div className="service-mobile-card">
                  <motion.div
                    key={`mobile-image-${activeService.title}`}
                    className="service-mobile-image-wrap"
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <img
                      src={activeService.imageMobile || activeService.image}
                      alt={activeService.title}
                      className="img-fluid w-100"
                    />
                  </motion.div>

                  <motion.div
                    key={`mobile-content-${activeService.title}`}
                    className="service-mobile-content"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.14,
                          delayChildren: 0.38,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="service-mobile-block mb-4"
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      <h4>What we handle</h4>
                      <ul>
                        {activeService.whatWeHandle?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      className="service-mobile-block"
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      <h4>Who this is ideal for</h4>
                      <ul>
                        {activeService.idealFor?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>

                    {activeService.buttonLabel && (
                      <motion.div
                        className="mt-3"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.45,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                      >
                        <button
                          onClick={handleButtonClick}
                          className="btn service-quote-btn w-100"
                        >
                          {activeService.buttonLabel}
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {activeService.faqs?.length ? (
              <div className="service-faq-wrap mt-5 pt-md-3">
                <h2 className="service-faq-title mb-4">
                  <span className="d-none d-md-inline">
                    Frequently Asked Questions
                  </span>
                  <span className="d-inline d-md-none">FAQs</span>
                </h2>

                <div
                  className="accordion service-faq-accordion"
                  id="serviceFaqAccordion"
                >
                  {activeService.faqs.map((faq, index) => {
                    const collapseId = `faq-collapse-${activeIndex}-${index}`;
                    const headingId = `faq-heading-${activeIndex}-${index}`;

                    return (
                      <div
                        className="accordion-item service-faq-item"
                        key={index}
                      >
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button service-faq-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            <span className="faq-question">
                              <span className="faq-prefix">Q.</span>{" "}
                              {faq.question}
                            </span>
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent="#serviceFaqAccordion"
                        >
                          <div className="accordion-body service-faq-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </section>

      {activeService && (
        <RequestQuoteModal
          isOpen={isModalOpen}
          cargo={activeService.title}
          onClose={() => setIsModalOpen(false)}
          onSubmitForm={onSubmitQuoteForm}
        />
      )}
    </>
  );
}
