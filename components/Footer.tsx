"use client";

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

            {/* Certification badges */}
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8DC63F]/15 border border-[#8DC63F]/25 text-[10px] font-semibold text-[#8DC63F]">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Certifié HDS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Ségur — en cours
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-semibold text-purple-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Pro Santé Connect — bientôt
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs hover:text-gray-200 transition-colors"
              >
                {link.label}
              </a>
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
