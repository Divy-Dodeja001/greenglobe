import CTASection from "@/components/CTASection";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";
import HeroFold2 from "@/components/HeroFold2";
import ServicesShowcase from "@/components/ServicesShowcase";
import React from "react";

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
    title: "Comprehensive logistics solutions for global trade.",
    subtitle:
      "GreenGlobe offers a full range of logistics services designed to support businesses at every stage of the supply chain. Our solutions are built to handle complexity while maintaining reliability and control.",
    backgroundImageDesktop: "/serviceHeroDesktop.jpg",
    backgroundImageMobile: "/serviceHeroMobile.jpg",
    showTextonDesktop: true,
  };
  const servicesData = [
    {
      slug: "sea-freight",
      tabLabel: "Sea Freight",
      title: "Sea Freight",
      description:
        "Sea freight is GreenGlobe’s flagship service. We manage ocean freight movements across major international routes with a focus on planning, coordination, and reliable execution. This is not transactional shipping. It is route intelligence backed by experience.",
      imageDesktop: "/sea-freight.jpg",
      imageMobile: "/sea-freight.jpg",
      icon: "ri:ship-fill",
      whatWeHandle: [
        "Full Container Load and Less than Container Load shipments",
        "Export and import movements across major global trade lanes",
        "Complex routing requiring coordination across ports and partners",
        "Documentation aligned with international trade regulations",
      ],
      idealFor: [
        "Indian exporters shipping at scale",
        "International importers sourcing from India",
        "Businesses requiring predictable ocean freight execution",
        "Clients handling high value or time sensitive cargo by sea",
      ],
      buttonLabel: "Request a Quote",
      buttonHref: "#contact",
      faqs: [
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
      ],
    },
    {
      slug: "air-freight",
      tabLabel: "Air Freight",
      title: "Air Freight",
      description:
        "Air freight services designed for time critical cargo requiring speed, security, and precision. Used selectively. Executed professionally.",
      imageDesktop: "/sea-freight.jpg",
      imageMobile: "/sea-freight.jpg",
      icon: "mdi:flight",
      whatWeHandle: [
        "Time sensitive international shipments",
        "Priority cargo movements",
        "Coordinated air freight with customs and inland support",
      ],
      idealFor: [
        "Businesses with urgent delivery requirements",
        "High value or sensitive cargo",
        "Clients balancing speed with controlled execution",
      ],
      buttonLabel: "Request a Quote",
      buttonHref: "#contact",
      faqs: [
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
      ],
    },
    {
      slug: "inland-transportation",
      tabLabel: "Inland Transportation",
      title: "Inland Transportation",
      description:
        "Inland transportation solutions supporting seamless movement between ports, warehouses, and final destinations. Built to connect the supply chain without breaks.",
      imageDesktop: "/sea-freight.jpg",
      imageMobile: "/sea-freight.jpg",
      icon: "boxicons:truck-filled",
      whatWeHandle: [
        "Port to warehouse movements",
        "Warehouse to port coordination",
        "Multi leg inland routing",
      ],
      idealFor: [
        "Exporters and importers requiring door-to-door continuity",
        "Clients managing multi location logistics",
        "Businesses seeking fewer handoffs",
      ],
      buttonLabel: "Request a Quote",
      buttonHref: "#contact",
      faqs: [
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
      ],
    },
    {
      slug: "customs-assistance",
      tabLabel: "Customs Assistance",
      title: "Customs Assistance",
      description:
        "Expert handling of documentation, compliance, and customs coordination to ensure smooth clearance across borders. This is risk management, not paperwork.",
      imageDesktop: "/sea-freight.jpg",
      imageMobile: "/sea-freight.jpg",
      icon: "healthicons:officer",
      whatWeHandle: [
        "Export and import documentation",
        "Regulatory compliance support",
        "Coordination with customs authorities",
      ],
      idealFor: [
        "Businesses new to international trade",
        "Companies handling regulated cargo",
        "Clients wanting fewer clearance delays",
      ],
      buttonLabel: "Request a Quote",
      buttonHref: "#contact",
      faqs: [
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
      ],
    },
    {
      slug: "packaging-quality-checks",
      tabLabel: "Packaging & Quality Checks",
      title: "Packaging & Quality Checks",
      description:
        "Professional packaging and quality verification to ensure cargo safety and regulatory compliance before movement. Problems solved before they travel.",
      imageDesktop: "/sea-freight.jpg",
      imageMobile: "/sea-freight.jpg",
      icon: "fluent:box-20-filled",
      whatWeHandle: [
        "Export compliant packaging",
        "Cargo inspection and verification",
        "Pre shipment quality checks",
      ],
      idealFor: [
        "Exporters handling sensitive or regulated goods",
        "Clients shipping high value cargo",
        "Businesses seeking damage risk reduction",
      ],
      buttonLabel: "Request a Quote",
      buttonHref: "#contact",
      faqs: [
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
        {
          question: "How do you handle complex international routes?",
          answer:
            "We plan routes based on port efficiency, carrier reliability, transit time, and customs feasibility — not just price. Every shipment is mapped for risk and reliability before execution.",
        },
      ],
    },
  ];
  return (
    <>
      <FloatingHeader logo={heroData.logo} navLinks={heroData.navLinks} />
      <HeroFold2 data={heroData} />
      <ServicesShowcase services={servicesData} />
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
