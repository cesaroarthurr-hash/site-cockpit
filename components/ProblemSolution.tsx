"use client";

import { motion } from "framer-motion";
import { problem } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {problem.headline}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {problem.headlineHighlight}
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{problem.subheadline}</p>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {problem.pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-300/0 via-red-300 to-red-300/0" />
              <div className="text-3xl mb-3">{pain.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-snug">{pain.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider arrow */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-red-200 to-[#8DC63F]" />
          <div className="w-9 h-9 rounded-full bg-[#8DC63F] flex items-center justify-center shadow-lg shadow-[#8DC63F]/30">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-[#8DC63F] to-[#8DC63F]/20" />
        </motion.div>

        {/* Solution banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DC63F] to-[#6fa32e]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative px-8 py-14 sm:px-16 sm:py-20 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              La réponse Cockpit
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              {problem.solution.headline}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              {problem.solution.description}
            </p>
            <a
              href="#interfaces"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-[#5a8a1f] hover:bg-gray-50 transition-all duration-200 shadow-xl shadow-black/10 hover:scale-[1.02]"
            >
              Voir les espaces dédiés
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
