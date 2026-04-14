import FloatingHeader from "@/components/FloatingHeader";
import HeroFold from "@/components/HeroFold";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import LeadershipSection from "@/components/LeadershipSection";
import TrustedBySection from "@/components/TrustedBySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
  title: "Global logistics, led by expertise and trust.",
  subtitle:
    "Sea-freight-led forwarding solutions connecting India to the world with precision and reliability.",
  backgroundImageDesktop: "/homeHeroDesktop.jpg",
  backgroundImageMobile: "/homeHeroMobile.jpg",
  buttons: [
    {
      label: "Request a Quote",
      href: "#contact",
      variant: "success",
      show: true,
    },
    {
      label: "Explore Our Services",
      href: "/services",
      variant: "primary",
      show: true,
    },
  ],
  stats: [
    { value: 23, suffix: "+", label: "Years of Industry Experience" },
    { value: 20, suffix: "+", label: "Countries in our Global Network" },
    { value: 50, suffix: "+", label: "Major Projects Handled Annually" },
  ],
};

const services = [
  {
    icon: "sea",
    title: "Sea Freight",
    description: "Cost-effective global shipping for high-volume cargo.",
    link: "/services?name=sea-freight#showcase",
  },
  {
    icon: "air",
    title: "Air Freight",
    description: "Fast, premium delivery for time-critical goods.",
    link: "/services?name=air-freight#showcase",
  },
  {
    icon: "truck",
    title: "Inland Transportation",
    description: "Reliable ground logistics from port to door.",
    link: "/services?name=inland-transportation#showcase",
  },
  {
    icon: "customs",
    title: "Customs Assistance",
    description: "Seamless clearance and expert regulatory compliance.",
    link: "/services?name=customs-assistance#showcase",
  },
  {
    icon: "package",
    title: "Packaging & Quality Checks",
    description: "Expert protection and inspection for a perfect arrival.",
    link: "/services?name=packaging-quality-checks#showcase",
  },
];

const whyItems = [
  { icon: "sea", title: "Sea-freight-first expertise" },
  { icon: "route", title: "Intelligent routing and planning" },
  { icon: "hands", title: "Personalised handling" },
  { icon: "support", title: "24/7 availability" },
  { icon: "globe", title: "Global partner network" },
];

const partners = [
  "coda",
  "inter",
  "Atlassian",
  "ClickTravel",
  "Notion",
  "eToro",
  "H&R Block",
];

export default function HomePage() {
  return (
    <main className="position-relative">
      <FloatingHeader logo={heroData.logo} navLinks={heroData.navLinks} />
      <HeroFold data={heroData} />
      <ServicesSection services={services} />
      <WhySection items={whyItems} />
      <LeadershipSection />
      <TrustedBySection partners={partners} />
      <CTASection
        title="Looking for a reliable logistics partner?"
        subtitle="Let our team guide your next shipment."
        buttonLabel="Request a Quote"
      />
      <Footer />
      <div
        className="position-absolute d-md-block d-none"
        style={{ top: "60%", right: "0%" }}
      >
        <img src="/blue.png" className="img-fluid"></img>
      </div>
      <div
        className="position-absolute d-md-block d-none"
        style={{ top: "50%", left: "0%" }}
      >
        <img src="/green.png" className="img-fluid"></img>
      </div>
    </main>
  );
}
