"use client";

import { motion } from "framer-motion";
import { trustedBy } from "@/lib/content";

// Logo HDS officiel ANS (Agence du Numérique en Santé)
function HdsLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="40" height="40" rx="8" fill="#00A19A" />
          <path d="M8 20C8 13.373 13.373 8 20 8s12 5.373 12 12-5.373 12-12 12S8 26.627 8 20z" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M14 20h12M20 14v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-800 leading-tight">HDS</p>
        <p className="text-[10px] text-gray-400 leading-tight">Hébergeur de</p>
        <p className="text-[10px] text-gray-400 leading-tight">Données de Santé</p>
      </div>
    </div>
  );
}

// Logo RGPD
function RgpdLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="40" height="40" rx="8" fill="#003189" />
          {/* EU stars simplified */}
          <circle cx="20" cy="14" r="1.2" fill="#FFD700" />
          <circle cx="24.5" cy="15.5" r="1.2" fill="#FFD700" />
          <circle cx="26" cy="20" r="1.2" fill="#FFD700" />
          <circle cx="24.5" cy="24.5" r="1.2" fill="#FFD700" />
          <circle cx="20" cy="26" r="1.2" fill="#FFD700" />
          <circle cx="15.5" cy="24.5" r="1.2" fill="#FFD700" />
          <circle cx="14" cy="20" r="1.2" fill="#FFD700" />
          <circle cx="15.5" cy="15.5" r="1.2" fill="#FFD700" />
          <path d="M17 20c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" stroke="white" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-800 leading-tight">RGPD</p>
        <p className="text-[10px] text-gray-400 leading-tight">Données hébergées</p>
        <p className="text-[10px] text-gray-400 leading-tight">en France</p>
      </div>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-16 border-t border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            {trustedBy.headline}
          </p>
        </motion.div>

        {/* Logos partenaires */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-10">
          {trustedBy.logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white transition-all duration-200 group min-h-[64px]"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-gray-200 group-hover:bg-[#8DC63F]/15 transition-colors" />
                <span className="text-[10px] text-gray-300 font-medium">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-100 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest shrink-0">Certifications</p>
            <div className="h-px bg-gray-100 flex-1 hidden sm:block" />

            {/* HDS */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00A19A]/20 bg-[#00A19A]/5 hover:bg-[#00A19A]/8 transition-colors">
              <HdsLogo />
            </div>

            {/* RGPD */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#003189]/15 bg-[#003189]/5 hover:bg-[#003189]/8 transition-colors">
              <RgpdLogo />
            </div>

            {/* Ségur */}
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-50/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-800 leading-tight">Ségur</p>
                <p className="text-[10px] text-amber-600 leading-tight">En cours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
