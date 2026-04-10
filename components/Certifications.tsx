"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <section className="py-16 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/15 text-[#8DC63F] border border-[#8DC63F]/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
            Sécurité &amp; conformité
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {certifications.headline}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            {certifications.subheadline}
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {certifications.items.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/8 transition-colors duration-300"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: cert.color }}
              />

              {/* Status badge */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{cert.icon}</span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    backgroundColor: `${cert.color}20`,
                    color: cert.color,
                  }}
                >
                  {cert.status === "certified" ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cert.color }} />
                  )}
                  {cert.statusLabel}
                </span>
              </div>

              {/* Name */}
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500 mb-1">
                {cert.fullName}
              </p>
              <h3 className="text-lg font-bold text-white mb-3">{cert.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>

              {/* Glow decoration */}
              <div
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: cert.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-white/8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
        >
          {[
            { icon: "🇫🇷", text: "Hébergement en France" },
            { icon: "🔒", text: "Chiffrement de bout en bout" },
            { icon: "📋", text: "Conforme RGPD" },
            { icon: "🏛️", text: "Certifié ANS" },
            { icon: "👁️", text: "Audit de sécurité annuel" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
