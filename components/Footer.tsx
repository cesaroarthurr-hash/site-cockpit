"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footer, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#8DC63F] flex items-center justify-center text-white font-bold text-xs">
                C
              </div>
              <span className="text-white font-semibold text-sm">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-gray-500">{footer.tagline}</p>

          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs hover:text-gray-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-xs text-gray-600">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
