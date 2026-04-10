"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, siteConfig } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#8DC63F] flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
              C
            </div>
            <span className="font-semibold text-gray-900 text-sm">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#8DC63F] text-white hover:bg-[#6fa32e] transition-colors"
            >
              {nav.cta}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-full text-sm font-medium bg-[#8DC63F] text-white hover:bg-[#6fa32e] transition-colors"
              >
                {nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
