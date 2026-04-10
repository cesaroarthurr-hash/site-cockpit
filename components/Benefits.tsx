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

        {/* Planning highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-3xl border border-[#8DC63F]/20 bg-gradient-to-br from-[#8DC63F]/5 to-emerald-50/50 p-8 sm:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/15 text-[#5a8a1f] mb-4">
                🗓️ Gestion du planning
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Le planning, votre plus grand défi — enfin maîtrisé.
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Les absences de dernière minute, les remplacements impossibles à gérer au téléphone, les tournées non optimisées : Cockpit centralise et automatise toute la gestion du planning pour vous redonner la maîtrise.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: "🔄", text: "Remplacement intelligent en 2 clics" },
                  { icon: "🗺️", text: "Optimisation automatique des tournées" },
                  { icon: "⚖️", text: "Équité de charge entre auxiliaires" },
                  { icon: "📱", text: "Mises à jour en temps réel sur mobile" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-lg">{feat.icon}</span>
                    <span className="text-sm text-gray-600">{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Planning visual */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-900">Planning — Semaine du 7 avril</span>
                <span className="text-xs text-[#8DC63F] font-medium">Optimisé ✓</span>
              </div>

              {/* Fake planning grid */}
              <div className="space-y-2">
                {[
                  { name: "Fatima K.", slots: [true, true, false, true, true], hours: "35h" },
                  { name: "Sophie M.", slots: [true, false, true, true, false], hours: "28h" },
                  { name: "Amina B.", slots: [false, true, true, false, true], hours: "26h" },
                  { name: "Lucie P.", slots: [true, true, true, false, false], hours: "21h", alert: true },
                ].map((aux, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 w-24 shrink-0">
                      <div className={`w-2 h-2 rounded-full ${aux.alert ? "bg-amber-400" : "bg-[#8DC63F]"}`} />
                      <span className="text-xs text-gray-600 truncate">{aux.name}</span>
                    </div>
                    <div className="flex gap-1 flex-1">
                      {["L", "M", "M", "J", "V"].map((day, di) => (
                        <div
                          key={di}
                          className={`flex-1 h-6 rounded text-[10px] font-medium flex items-center justify-center ${
                            aux.slots[di]
                              ? "bg-[#8DC63F]/15 text-[#5a8a1f]"
                              : "bg-gray-50 text-gray-200"
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <span className={`text-xs font-medium w-8 text-right ${aux.alert ? "text-amber-500" : "text-gray-400"}`}>
                      {aux.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-2.5 rounded-lg bg-amber-50 border border-amber-100 flex items-center gap-2">
                <span className="text-sm">⚠️</span>
                <span className="text-xs text-amber-600">Lucie P. sous le seuil hebdomadaire — remplacement suggéré</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
