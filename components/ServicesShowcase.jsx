"use client";

import { useState } from "react";
import "../styles/servicesShowcase.css";
import { Icon } from "@iconify/react";
import RequestQuoteModal from "./RequestQuoteModal";

export default function ServicesShowcase({ services = [], onSubmitQuoteForm }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  if (!services.length) return null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      {" "}
      <section className="services-showcase-section py-5 my-4">
        <div className="container px-3 px-md-0">
          <div className="service-tabs-scroll mb-4 mb-md-4">
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
                <div className="service-hero-overlay" />

                <div className="service-hero-copy">
                  {activeService.icon && (
                    <Icon
                      icon={activeService.icon}
                      className="servicepage-icon"
                      style={{ color: "white" }}
                    />
                  )}
                  <h3>{activeService.title}</h3>
                  <p>{activeService.description}</p>
                </div>
              </div>

              <div className="service-info-card">
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
              </div>
            </div>

            <div className="d-block d-md-none">
              <div className="service-mobile-copy mb-4">
                <h3>{activeService.title}</h3>
                <p>{activeService.description}</p>
              </div>

              <div className="service-mobile-card">
                <div className="service-mobile-image-wrap">
                  <img
                    src={activeService.imageMobile || activeService.image}
                    alt={activeService.title}
                    className="img-fluid w-100"
                  />
                </div>

                <div className="service-mobile-content">
                  <div className="service-mobile-block mb-4">
                    <h4>What we handle</h4>
                    <ul>
                      {activeService.whatWeHandle?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-mobile-block">
                    <h4>Who this is ideal for</h4>
                    <ul>
                      {activeService.idealFor?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {activeService.buttonLabel && (
                    <div className="mt-3">
                      <button
                        onClick={handleButtonClick}
                        className="btn service-quote-btn w-100"
                      >
                        {activeService.buttonLabel}
                      </button>
                    </div>
                  )}
                </div>
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
      </section>
      <RequestQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitForm={onSubmitQuoteForm}
      />
    </>
  );
}
