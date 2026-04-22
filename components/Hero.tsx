"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
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
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] text-balance max-w-4xl"
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
            className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#8DC63F] text-white hover:bg-[#6fa32e] transition-all duration-200 shadow-lg shadow-[#8DC63F]/25 hover:shadow-[#8DC63F]/40 hover:scale-[1.02]"
            >
              {hero.cta.primary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
            className="flex flex-col sm:flex-row items-center gap-8 mt-8 pt-8 border-t border-gray-100 w-full justify-center"
          >
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-gray-400 text-center max-w-[140px]">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust badges HDS + RGPD */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {/* HDS badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#8DC63F]/30 bg-[#8DC63F]/5">
              <svg className="w-4 h-4 text-[#8DC63F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-semibold text-[#5a8a1f]">Certifié HDS</span>
              <span className="text-[10px] text-gray-400">Hébergeur de Données de Santé</span>
            </div>

            {/* RGPD badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/50">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs font-semibold text-blue-600">Conforme RGPD</span>
              <span className="text-[10px] text-gray-400">Données hébergées en France</span>
            </div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" as const }}
            className="mt-12 w-full max-w-5xl"
          >
            <div className="relative rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/60 overflow-hidden bg-white">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-[#8DC63F]/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-300 font-mono border border-gray-100 max-w-xs mx-auto text-center">
                    app.cockpit.sahanest.fr
                  </div>
                </div>
              </div>

              {/* Fake dashboard UI */}
              <div className="p-6 bg-gray-50/50 min-h-[320px]">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Interventions aujourd'hui", value: "24", color: "#8DC63F" },
                    { label: "En cours", value: "8", color: "#3B82F6" },
                    { label: "Alertes actives", value: "2", color: "#F59E0B" },
                    { label: "Auxiliaires disponibles", value: "5", color: "#8B5CF6" },
                  ].map((card, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="text-2xl font-bold mb-1" style={{ color: card.color }}>{card.value}</div>
                      <div className="text-xs text-gray-400">{card.label}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="text-xs font-medium text-gray-500 mb-3">Interventions du jour</div>
                    <div className="space-y-2">
                      {[
                        { name: "M. Bernard", time: "09:00 – 10:30", status: "Terminée", aux: "Fatima K.", ok: true },
                        { name: "Mme Dupont", time: "10:00 – 11:00", status: "En cours", aux: "Sophie M.", ok: true },
                        { name: "M. Martin", time: "11:30 – 13:00", status: "Alerte", aux: "Non assigné", ok: false },
                        { name: "Mme Leroy", time: "14:00 – 15:30", status: "Planifiée", aux: "Amina B.", ok: true },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-50 last:border-0">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${row.ok ? (row.status === "En cours" ? "bg-[#8DC63F]" : "bg-gray-200") : "bg-amber-400"}`} />
                          <span className="text-xs text-gray-700 flex-1">{row.name}</span>
                          <span className="text-xs text-gray-400">{row.time}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            row.status === "En cours" ? "bg-[#8DC63F]/10 text-[#5a8a1f]" :
                            row.status === "Alerte" ? "bg-amber-50 text-amber-600" :
                            row.status === "Terminée" ? "bg-gray-50 text-gray-400" :
                            "bg-blue-50 text-blue-500"
                          }`}>{row.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="text-xs font-medium text-gray-500 mb-3">Bien-être équipes</div>
                    <div className="space-y-2.5">
                      {[
                        { name: "Fatima K.", score: 92, color: "#8DC63F" },
                        { name: "Sophie M.", score: 78, color: "#8DC63F" },
                        { name: "Amina B.", score: 61, color: "#F59E0B" },
                        { name: "Lucie P.", score: 45, color: "#EF4444" },
                      ].map((aux, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">{aux.name}</span>
                            <span className="font-medium" style={{ color: aux.color }}>{aux.score}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${aux.score}%`, backgroundColor: aux.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Aperçu du tableau de bord manager — remplacez par votre vrai screenshot dans{" "}
              <code className="text-[#8DC63F]">public/screenshots/</code>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
