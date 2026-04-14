"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function FloatingHeader({ logo, navLinks = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`floating-header ${isScrolled ? "is-scrolled" : ""}`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container px-4 px-md-0">
        <div className="header-shell d-flex align-items-center justify-content-end px-md-5">
          <div className="position-absolute logo-header">
            <a
              href="/"
              className="brand-logo d-flex align-items-center text-decoration-none"
            >
              <video
                className=""
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/preloader.mp4" type="video/mp4" />
              </video>
            </a>
          </div>

          <nav className="d-none d-lg-flex align-items-center gap-5 px-md-5">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link-custom">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle d-lg-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <HiOutlineX size={24} />
            ) : (
              <HiOutlineMenuAlt3 size={24} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu d-lg-none"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container px-4 px-md-0">
              <div className="mobile-menu-card">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
