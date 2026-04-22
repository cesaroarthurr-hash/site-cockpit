"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trustedBy } from "@/lib/content";

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {trustedBy.logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200 min-h-[72px]"
            >
              <div className="relative w-full h-10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 12vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-100 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest shrink-0">Certifications</p>
            <div className="h-px bg-gray-100 flex-1 hidden sm:block" />

            {/* HDS */}
            <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div className="relative w-16 h-16">
                <Image
                  src="/logos/logo-hds.png"
                  alt="Certifié HDS"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-700 leading-tight">Certifié HDS</p>
                <p className="text-[10px] text-gray-400 leading-tight">Hébergeur de Données de Santé</p>
              </div>
            </div>

            {/* RGPD */}
            <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div className="relative w-16 h-16">
                <Image
                  src="/logos/logo-rgpd.png"
                  alt="Conforme RGPD"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-700 leading-tight">Conforme RGPD</p>
                <p className="text-[10px] text-gray-400 leading-tight">Données hébergées en France</p>
              </div>
            </div>

            {/* Ségur */}
            <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-50/80 transition-colors">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-amber-800 leading-tight">Ségur du Numérique</p>
                <p className="text-[10px] text-amber-600 leading-tight">Référencement en cours</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
