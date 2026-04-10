"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8DC63F 0%, #6fa32e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              rien de superflu.
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un cockpit pensé pour les enjeux réels d&apos;une structure SAP : terrain, management, qualité et conformité.
          </p>
        </motion.div>

        {/* Feature cards — large 2-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative p-7 rounded-2xl bg-gradient-to-br ${feature.color} border border-gray-100/80 overflow-hidden group cursor-default`}
            >
              {/* Tag */}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/70 text-gray-500 border border-white/50 mb-4">
                {feature.tag}
              </span>

              {/* Icon */}
              <div className="text-3xl mb-3">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{feature.description}</p>

              {/* Details list */}
              <ul className="space-y-1.5">
                {feature.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-[#8DC63F] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Decorative */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/15 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#8DC63F] text-white hover:bg-[#6fa32e] transition-all duration-200 shadow-lg shadow-[#8DC63F]/25"
          >
            Voir une démo personnalisée
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
