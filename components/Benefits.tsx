"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/content";

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
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
            Impact concret
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {benefits.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {benefits.subheadline}
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col p-7 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: item.color }} />

              {/* Metric */}
              <div className="mb-4">
                <span className="text-4xl font-bold" style={{ color: item.color }}>
                  {item.metric}
                </span>
                <p className="text-xs text-gray-400 mt-0.5">{item.metricLabel}</p>
              </div>

              {/* Icon */}
              <div className="text-2xl mb-3">{item.icon}</div>

              {/* Content */}
              <h3 className="font-semibold text-gray-900 mb-2 text-base">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>

              {/* Hover decoration */}
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
