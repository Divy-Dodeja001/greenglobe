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

const iconMap = {
  sea: PiBoatLight,
  air: HiOutlinePaperAirplane,
  truck: HiOutlineTruck,
  customs: HiOutlineUser,
  package: HiOutlineArchiveBox,
};

export default function ServicesSection({ services = [] }) {
  return (
    <section className="services-section" id="services">
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
              <div className="col-lg-4 col-xl" key={service.title}>
                <SectionReveal delay={index * 0.08}>
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
                </SectionReveal>
              </div>
            );
          })}
        </div>

        <SectionReveal delay={0.2}>
          <div className="text-center mt-4">
            <a href="/services" className="btn btn-light section-ghost-btn">
              View All Services
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
