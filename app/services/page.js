"use client";

import CTASection from "@/components/CTASection";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";
import HeroFold2 from "@/components/HeroFold2";
import ServicesShowcase from "@/components/ServicesShowcase";
import { useSearchParams } from "next/navigation";
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
          question: "What shipping services does Green Globe Logistics offer?",
          answer:
            "We specialize in air freight, sea freight, road freight, quality checks, cargo sorting, and packaging. Our end-to-end delivery solutions cater to businesses globally, ensuring timely and efficient service.",
        },
        {
          question: "How can I choose the right shipping service for my needs?",
          answer:
            "Selecting the right service depends on your specific requirements, including speed, destination, and shipment size. Our team provides tailored solutions, so feel free to reach out for personalized advice based on your needs.",
        },
        {
          question:
            "Is my payment secure when booking with Green Globe Logistics?",
          answer:
            "Yes, we prioritize your security. We use encrypted payment methods to ensure that your financial transactions are safe and protected at all times.",
        },
        {
          question: "What happens to my shipment if I cancel?",
          answer:
            "In case of cancellation, the handling and refund process will depend on the timing and status of the shipment. Contact our customer service team for a smooth cancellation procedure and assistance with the next steps.",
        },
        {
          question: "What is remote tracking?",
          answer:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
          question: "Do you service my industry?",
          answer:
            "Yes, we provide customized logistics solutions for a variety of industries, including retail, manufacturing, and e-commerce. Get in touch with us to learn more about how we can cater to your specific needs.",
        },
        {
          question: "How do I track my shipment?",
          answer:
            "You can track your shipment using our online portal, which provides real-time updates on the location and estimated delivery time of your cargo.",
        },
        {
          question: "Can I schedule my shipment delivery?",
          answer:
            "Yes, we offer flexible delivery scheduling to ensure your shipment arrives at the most convenient time for you. Speak to our team for more details on available time slots.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, Green Globe Logistics operates globally and provides international shipping services to over 20 countries across all continents. Whether you're shipping to Europe, Asia, or beyond, we've got you covered.",
        },
        {
          question: "How do I prepare my shipment for delivery?",
          answer:
            "Ensure that your cargo is properly packed according to our guidelines. We also offer packaging services to ensure your items are securely packed for transport.",
        },
        {
          question: "What should I do if my shipment is delayed?",
          answer:
            "If your shipment is delayed, our team will immediately investigate and provide you with an updated status. We are committed to ensuring your goods arrive as quickly as possible.",
        },
        {
          question: "How are shipping costs calculated?",
          answer:
            "Shipping costs depend on factors such as the size and weight of your shipment, the destination, and the shipping method. Get in touch with our customer service team for a precise quote based on your specific needs.",
        },
        {
          question: "What types of cargo do you transport?",
          answer:
            "We handle a wide range of cargo, from small packages to large, bulky items. Whether it's fragile, perishable, or oversized, we provide specialized services to accommodate your needs.",
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
          question: "What shipping services does Green Globe Logistics offer?",
          answer:
            "We specialize in air freight, sea freight, road freight, quality checks, cargo sorting, and packaging. Our end-to-end delivery solutions cater to businesses globally, ensuring timely and efficient service.",
        },
        {
          question: "How can I choose the right shipping service for my needs?",
          answer:
            "Selecting the right service depends on your specific requirements, including speed, destination, and shipment size. Our team provides tailored solutions, so feel free to reach out for personalized advice based on your needs.",
        },
        {
          question:
            "Is my payment secure when booking with Green Globe Logistics?",
          answer:
            "Yes, we prioritize your security. We use encrypted payment methods to ensure that your financial transactions are safe and protected at all times.",
        },
        {
          question: "What happens to my shipment if I cancel?",
          answer:
            "In case of cancellation, the handling and refund process will depend on the timing and status of the shipment. Contact our customer service team for a smooth cancellation procedure and assistance with the next steps.",
        },
        {
          question: "What is remote tracking?",
          answer:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
          question: "Do you service my industry?",
          answer:
            "Yes, we provide customized logistics solutions for a variety of industries, including retail, manufacturing, and e-commerce. Get in touch with us to learn more about how we can cater to your specific needs.",
        },
        {
          question: "How do I track my shipment?",
          answer:
            "You can track your shipment using our online portal, which provides real-time updates on the location and estimated delivery time of your cargo.",
        },
        {
          question: "Can I schedule my shipment delivery?",
          answer:
            "Yes, we offer flexible delivery scheduling to ensure your shipment arrives at the most convenient time for you. Speak to our team for more details on available time slots.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, Green Globe Logistics operates globally and provides international shipping services to over 20 countries across all continents. Whether you're shipping to Europe, Asia, or beyond, we've got you covered.",
        },
        {
          question: "How do I prepare my shipment for delivery?",
          answer:
            "Ensure that your cargo is properly packed according to our guidelines. We also offer packaging services to ensure your items are securely packed for transport.",
        },
        {
          question: "What should I do if my shipment is delayed?",
          answer:
            "If your shipment is delayed, our team will immediately investigate and provide you with an updated status. We are committed to ensuring your goods arrive as quickly as possible.",
        },
        {
          question: "How are shipping costs calculated?",
          answer:
            "Shipping costs depend on factors such as the size and weight of your shipment, the destination, and the shipping method. Get in touch with our customer service team for a precise quote based on your specific needs.",
        },
        {
          question: "What types of cargo do you transport?",
          answer:
            "We handle a wide range of cargo, from small packages to large, bulky items. Whether it's fragile, perishable, or oversized, we provide specialized services to accommodate your needs.",
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
          question: "What shipping services does Green Globe Logistics offer?",
          answer:
            "We specialize in air freight, sea freight, road freight, quality checks, cargo sorting, and packaging. Our end-to-end delivery solutions cater to businesses globally, ensuring timely and efficient service.",
        },
        {
          question: "How can I choose the right shipping service for my needs?",
          answer:
            "Selecting the right service depends on your specific requirements, including speed, destination, and shipment size. Our team provides tailored solutions, so feel free to reach out for personalized advice based on your needs.",
        },
        {
          question:
            "Is my payment secure when booking with Green Globe Logistics?",
          answer:
            "Yes, we prioritize your security. We use encrypted payment methods to ensure that your financial transactions are safe and protected at all times.",
        },
        {
          question: "What happens to my shipment if I cancel?",
          answer:
            "In case of cancellation, the handling and refund process will depend on the timing and status of the shipment. Contact our customer service team for a smooth cancellation procedure and assistance with the next steps.",
        },
        {
          question: "What is remote tracking?",
          answer:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
          question: "Do you service my industry?",
          answer:
            "Yes, we provide customized logistics solutions for a variety of industries, including retail, manufacturing, and e-commerce. Get in touch with us to learn more about how we can cater to your specific needs.",
        },
        {
          question: "How do I track my shipment?",
          answer:
            "You can track your shipment using our online portal, which provides real-time updates on the location and estimated delivery time of your cargo.",
        },
        {
          question: "Can I schedule my shipment delivery?",
          answer:
            "Yes, we offer flexible delivery scheduling to ensure your shipment arrives at the most convenient time for you. Speak to our team for more details on available time slots.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, Green Globe Logistics operates globally and provides international shipping services to over 20 countries across all continents. Whether you're shipping to Europe, Asia, or beyond, we've got you covered.",
        },
        {
          question: "How do I prepare my shipment for delivery?",
          answer:
            "Ensure that your cargo is properly packed according to our guidelines. We also offer packaging services to ensure your items are securely packed for transport.",
        },
        {
          question: "What should I do if my shipment is delayed?",
          answer:
            "If your shipment is delayed, our team will immediately investigate and provide you with an updated status. We are committed to ensuring your goods arrive as quickly as possible.",
        },
        {
          question: "How are shipping costs calculated?",
          answer:
            "Shipping costs depend on factors such as the size and weight of your shipment, the destination, and the shipping method. Get in touch with our customer service team for a precise quote based on your specific needs.",
        },
        {
          question: "What types of cargo do you transport?",
          answer:
            "We handle a wide range of cargo, from small packages to large, bulky items. Whether it's fragile, perishable, or oversized, we provide specialized services to accommodate your needs.",
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
          question: "What shipping services does Green Globe Logistics offer?",
          answer:
            "We specialize in air freight, sea freight, road freight, quality checks, cargo sorting, and packaging. Our end-to-end delivery solutions cater to businesses globally, ensuring timely and efficient service.",
        },
        {
          question: "How can I choose the right shipping service for my needs?",
          answer:
            "Selecting the right service depends on your specific requirements, including speed, destination, and shipment size. Our team provides tailored solutions, so feel free to reach out for personalized advice based on your needs.",
        },
        {
          question:
            "Is my payment secure when booking with Green Globe Logistics?",
          answer:
            "Yes, we prioritize your security. We use encrypted payment methods to ensure that your financial transactions are safe and protected at all times.",
        },
        {
          question: "What happens to my shipment if I cancel?",
          answer:
            "In case of cancellation, the handling and refund process will depend on the timing and status of the shipment. Contact our customer service team for a smooth cancellation procedure and assistance with the next steps.",
        },
        {
          question: "What is remote tracking?",
          answer:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
          question: "Do you service my industry?",
          answer:
            "Yes, we provide customized logistics solutions for a variety of industries, including retail, manufacturing, and e-commerce. Get in touch with us to learn more about how we can cater to your specific needs.",
        },
        {
          question: "How do I track my shipment?",
          answer:
            "You can track your shipment using our online portal, which provides real-time updates on the location and estimated delivery time of your cargo.",
        },
        {
          question: "Can I schedule my shipment delivery?",
          answer:
            "Yes, we offer flexible delivery scheduling to ensure your shipment arrives at the most convenient time for you. Speak to our team for more details on available time slots.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, Green Globe Logistics operates globally and provides international shipping services to over 20 countries across all continents. Whether you're shipping to Europe, Asia, or beyond, we've got you covered.",
        },
        {
          question: "How do I prepare my shipment for delivery?",
          answer:
            "Ensure that your cargo is properly packed according to our guidelines. We also offer packaging services to ensure your items are securely packed for transport.",
        },
        {
          question: "What should I do if my shipment is delayed?",
          answer:
            "If your shipment is delayed, our team will immediately investigate and provide you with an updated status. We are committed to ensuring your goods arrive as quickly as possible.",
        },
        {
          question: "How are shipping costs calculated?",
          answer:
            "Shipping costs depend on factors such as the size and weight of your shipment, the destination, and the shipping method. Get in touch with our customer service team for a precise quote based on your specific needs.",
        },
        {
          question: "What types of cargo do you transport?",
          answer:
            "We handle a wide range of cargo, from small packages to large, bulky items. Whether it's fragile, perishable, or oversized, we provide specialized services to accommodate your needs.",
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
          question: "What shipping services does Green Globe Logistics offer?",
          answer:
            "We specialize in air freight, sea freight, road freight, quality checks, cargo sorting, and packaging. Our end-to-end delivery solutions cater to businesses globally, ensuring timely and efficient service.",
        },
        {
          question: "How can I choose the right shipping service for my needs?",
          answer:
            "Selecting the right service depends on your specific requirements, including speed, destination, and shipment size. Our team provides tailored solutions, so feel free to reach out for personalized advice based on your needs.",
        },
        {
          question:
            "Is my payment secure when booking with Green Globe Logistics?",
          answer:
            "Yes, we prioritize your security. We use encrypted payment methods to ensure that your financial transactions are safe and protected at all times.",
        },
        {
          question: "What happens to my shipment if I cancel?",
          answer:
            "In case of cancellation, the handling and refund process will depend on the timing and status of the shipment. Contact our customer service team for a smooth cancellation procedure and assistance with the next steps.",
        },
        {
          question: "What is remote tracking?",
          answer:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
          question: "Do you service my industry?",
          answer:
            "Yes, we provide customized logistics solutions for a variety of industries, including retail, manufacturing, and e-commerce. Get in touch with us to learn more about how we can cater to your specific needs.",
        },
        {
          question: "How do I track my shipment?",
          answer:
            "You can track your shipment using our online portal, which provides real-time updates on the location and estimated delivery time of your cargo.",
        },
        {
          question: "Can I schedule my shipment delivery?",
          answer:
            "Yes, we offer flexible delivery scheduling to ensure your shipment arrives at the most convenient time for you. Speak to our team for more details on available time slots.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, Green Globe Logistics operates globally and provides international shipping services to over 20 countries across all continents. Whether you're shipping to Europe, Asia, or beyond, we've got you covered.",
        },
        {
          question: "How do I prepare my shipment for delivery?",
          answer:
            "Ensure that your cargo is properly packed according to our guidelines. We also offer packaging services to ensure your items are securely packed for transport.",
        },
        {
          question: "What should I do if my shipment is delayed?",
          answer:
            "If your shipment is delayed, our team will immediately investigate and provide you with an updated status. We are committed to ensuring your goods arrive as quickly as possible.",
        },
        {
          question: "How are shipping costs calculated?",
          answer:
            "Shipping costs depend on factors such as the size and weight of your shipment, the destination, and the shipping method. Get in touch with our customer service team for a precise quote based on your specific needs.",
        },
        {
          question: "What types of cargo do you transport?",
          answer:
            "We handle a wide range of cargo, from small packages to large, bulky items. Whether it's fragile, perishable, or oversized, we provide specialized services to accommodate your needs.",
        },
      ],
    },
  ];
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  return (
    <>
      <FloatingHeader logo={heroData.logo} navLinks={heroData.navLinks} />
      <HeroFold2 data={heroData} />
      <ServicesShowcase services={servicesData} active={name} />
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
