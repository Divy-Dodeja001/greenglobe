import { HiOutlineCheckCircle } from "react-icons/hi2";
import SectionReveal from "./SectionReveal";

export default function LeadershipSection() {
  return (
    <section className="leadership-section" id="about">
      <div className="container px-4 px-md-0">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1 m-0 mt-3">
            <SectionReveal>
              <div className="leadership-copy pe-lg-4 mx-auto">
                <h2 className="section-title text-start mb-4 d-none d-md-block">
                  Founder & Leadership
                </h2>
                <p>
                  Founded and led by Kanika Arora, a logistics professional with
                  over two decades of hands-on industry experience.
                </p>
                <p>
                  GreenGlobe is built on expertise, accountability, and
                  long-term partnerships.
                </p>
              </div>
            </SectionReveal>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <SectionReveal delay={0.15}>
              <div className="leadership-visual mx-auto">
                <h2 className="section-title mb-4 pb-4 d-md-none">
                  Founder & Leadership
                </h2>

                <div className="leader-image-card">
                  <img
                    src="/founder.jpg"
                    alt="Founder portrait"
                  />
                  {/* <div className="leader-badge leader-name-badge shadow-lg">
                    <div className="badge-avatar" />
                    <span>Kanika Arora</span>
                  </div>
                  <div className="leader-badge leader-role-badge shadow-sm">
                    <HiOutlineCheckCircle size={18} />
                    <span>Founder & CEO</span>
                  </div> */}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
