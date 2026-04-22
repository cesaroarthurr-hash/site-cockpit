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
              className="flex items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200 min-h-[112px]"
            >
              <div className="relative w-full h-20">
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

            {[
              { src: "/logos/logo-hds.png", alt: "Certifié HDS", label: "Certifié HDS", sub: "Hébergeur de Données de Santé" },
              { src: "/logos/logo-rgpd.png", alt: "Conforme RGPD", label: "Conforme RGPD", sub: "Données hébergées en France" },
              { src: "/logos/logo-segur.png", alt: "Ségur du Numérique", label: "Ségur du Numérique", sub: "Référencement en cours" },
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center justify-between gap-3 w-44 px-4 py-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm transition-all duration-200">
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-700 leading-tight">{cert.label}</p>
                  <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{cert.sub}</p>
                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
