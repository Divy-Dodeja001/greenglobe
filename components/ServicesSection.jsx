"use client";
import {
  HiOutlineArchiveBox,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineTruck,
  HiOutlineUser,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { PiBoatLight } from "react-icons/pi";
import SectionReveal from "./SectionReveal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const iconMap = {
  sea: PiBoatLight,
  air: HiOutlinePaperAirplane,
  truck: HiOutlineTruck,
  customs: HiOutlineUser,
  package: HiOutlineArchiveBox,
};

export default function ServicesSection({ services = [] }) {
  const sectionRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // when almost entire section is visible
        if (entry.intersectionRatio > 0.9) {
          setShowButton(true);
        }
      },
      {
        threshold: [0.9], // 90% visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container px-4 px-md-0">
        <div
          className="d-flex service-card-strip"
          style={{
            gap: "20px",
          }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || HiOutlineGlobeAsiaAustralia;
            return (
              <div className="col-lg-4 col-xl pb-3" key={service.title}>
                <Link href={service.link}>
                  <div className="service-card">
                    <div className="service-icon-wrap">
                      <Icon className="service-icon" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <small className="know-more-tag">Know More</small>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <SectionReveal delay={0.2}>
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: showButton ? 1 : 0,
              y: showButton ? 0 : 40,
            }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <a href="/services" className="btn btn-light section-ghost-btn">
              View All Services
            </a>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
