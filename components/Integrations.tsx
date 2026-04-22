"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const integrations = [
  { name: "Ximi", logo: "/logos/ximi.png" },
  { name: "Arche", logo: "/logos/arche.png" },
  { name: "Ogust", logo: "/logos/ogust-quadri-fond-blanc-100-e1648058063964.png" },
  { name: "Apologic", logo: "/logos/apologic.png" },
  { name: "Salesforce", logo: "/logos/salesforce.png" },
  { name: "HubSpot", logo: "/logos/hubspot.png" },
];

export default function Integrations() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fond sombre */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a2e10] to-gray-900" />
      {/* Lueur verte centrale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8DC63F]/10 rounded-full blur-3xl" />
      {/* Grid subtile */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(141,198,63,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(141,198,63,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#8DC63F] uppercase tracking-widest mb-5">
            Intégrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Cockpit s&apos;intègre avec{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8DC63F 0%, #b5e06a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              vos outils existants
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Cockpit est pensé comme une solution ouverte. Nous nous connectons aux logiciels métier et CRM que vous utilisez déjà.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 * i }}
              className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-white/10 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-[#8DC63F]/40 hover:shadow-lg hover:shadow-[#8DC63F]/10 transition-all duration-200 group w-36"
            >
              <div className="relative w-24 h-14 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200 font-medium">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-xs text-gray-500"
        >
          Et bien d&apos;autres — contactez-nous pour toute intégration spécifique.
        </motion.p>
      </div>
    </section>
  );
}
