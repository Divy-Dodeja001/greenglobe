import CTASection from "@/components/CTASection";
import FloatingHeader from "@/components/FloatingHeader";
import HeroFold2 from "@/components/HeroFold2";
import React from "react";
import "../../styles/clientele.css";
import Footer from "@/components/Footer";

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
    title: "Partner across industries",
    subtitle:
      "GreenGlobe Logistics works with businesses across manufacturing, export, and trade sectors. Our clientele reflects trust built through consistent execution and dependable service.",
    backgroundImageDesktop: "/clienteleHeroDesktop.jpg",
    backgroundImageMobile: "/clienteleHeroMobile.jpg",
    showTextonDesktop: false,
  };
  const clienteleArray = [
    { name: "Slack", image: "" },
    { name: "Jira", image: "" },
    { name: "Discord", image: "" },
    { name: "Notion", image: "" },
    { name: "Zoom", image: "" },
    { name: "Mailchimp", image: "" },
    { name: "Trello", image: "" },
    { name: "Shopify", image: "" },
  ];
  return (
    <>
      <FloatingHeader logo={heroData.logo} navLinks={heroData.navLinks} />
      <HeroFold2 data={heroData} />
      <div className="clientele-section my-5 pb-md-5">
        <div className="container px-4 px-md-0">
          <div className="row g-3">
            {clienteleArray.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div className="client-box">
                  <img src="" alt={item.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection
        title="Looking for a reliable logistics partner?"
        subtitle="Let our team guide your next shipment."
        buttonLabel="Request a Quote"
      />
      <Footer/>
    </>
  );
};

export default page;
