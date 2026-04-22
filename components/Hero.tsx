"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { hero } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(141,198,63,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(141,198,63,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      {/* Green top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#8DC63F]/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — texte */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] animate-pulse" />
                {hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] text-balance"
            >
              {hero.headline}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8DC63F 0%, #6fa32e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {hero.highlight}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 leading-relaxed max-w-xl"
            >
              {hero.subheadline}
            </motion.p>

            {/* Solution française souveraine */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-[#8DC63F]/30 bg-[#8DC63F]/5">
                <div className="relative w-12 h-12 shrink-0">
                  <Image src="/logos/coq.png" alt="Coq français" fill className="object-contain" sizes="48px" />
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Solution française souveraine</span>
              </div>
            </motion.div>

            {/* CTA secondaire */}
            <motion.div variants={itemVariants}>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-[1.02]"
              >
                {hero.cta.secondary}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 mt-2"
            >
              {hero.stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative flex flex-col gap-1.5 px-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-[#8DC63F]" />
                  <span className="text-2xl sm:text-3xl font-bold text-[#8DC63F] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Cal.com inline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
            className="w-full"
          >
            <div className="rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/60 overflow-hidden bg-white">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8DC63F] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  C
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Réserver une démonstration</p>
                  <p className="text-xs text-gray-400">30 min · Arthur Cesaro, Cockpit</p>
                </div>
              </div>
              <Cal
                namespace="30min"
                calLink="arthur-cesaro-2bgnnx/30min"
                style={{ width: "100%", height: "500px", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
