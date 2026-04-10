import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineGlobeAlt,
  HiOutlineMap,
  HiOutlineCube,
} from "react-icons/hi2";
import { PiBoatLight } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import SectionReveal from "./SectionReveal";

const iconMap = {
  sea: PiBoatLight,
  route: HiOutlineMap,
  hands: LiaHandsHelpingSolid,
  support: HiOutlineChatBubbleLeftRight,
  globe: HiOutlineGlobeAlt,
  default: HiOutlineCube,
};

export default function WhySection({ items = [] }) {
  return (
    <section className="why-section">
      <div className="container px-4 px-md-0">
        <SectionReveal>
          <h2 className="section-title text-center">Why GreenGlobe</h2>
        </SectionReveal>

        <div className="d-flex justify-content-center">
          <picture className="d-flex justify-content-center">
            <source
              media="(max-width: 767px)"
              srcSet="/whygreenglobeMobile.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/whygreenglobeDesktop.png"
            />
            <img
              src="/whygreenglobeDesktop.png"
              alt="Hero Banner"
              className="why-image"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
