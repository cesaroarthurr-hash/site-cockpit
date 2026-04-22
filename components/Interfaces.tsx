"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { interfaces } from "@/lib/content";

export default function Interfaces() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = interfaces.profiles[activeIndex];

  return (
    <section id="interfaces" className="py-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-4">
            Interfaces dédiées
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {interfaces.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {interfaces.subheadline}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: tab list */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {interfaces.profiles.map((profile, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                whileHover={{ x: 2 }}
                className={`relative flex items-center gap-3 px-4 py-4 rounded-2xl text-left transition-all duration-200 shrink-0 lg:shrink border ${
                  activeIndex === i
                    ? "bg-white shadow-md border-gray-200"
                    : "bg-white/50 border-transparent hover:bg-white hover:border-gray-100"
                }`}
              >
                {activeIndex === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ backgroundColor: profile.color }}
                  />
                )}
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ backgroundColor: profile.lightColor }}
                >
                  {profile.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{profile.role}</p>
                  {profile.badge && (
                    <span
                      className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-0.5"
                      style={{ backgroundColor: `${profile.color}18`, color: profile.color }}
                    >
                      {profile.badge}
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
              >
                {/* Color band */}
                <div className="h-2" style={{ backgroundColor: active.color }} />

                <div className="p-8">
                  {/* Role badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: active.lightColor }}
                    >
                      {active.icon}
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Espace</p>
                      <p className="font-bold text-gray-900">{active.role}</p>
                    </div>
                    {active.badge && (
                      <span
                        className="ml-auto text-xs font-medium px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${active.color}15`, color: active.color }}
                      >
                        {active.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{active.headline}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{active.description}</p>

                  {/* Capabilities */}
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {active.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${active.color}20` }}
                        >
                          <svg
                            className="w-3 h-3"
                            style={{ color: active.color }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vidéo ou placeholder */}
                  <div className="mt-8 rounded-2xl border border-gray-100 overflow-hidden bg-gray-50">
                    {active.videoUrl ? (
                      <div className="relative aspect-video">
                        <iframe
                          src={active.videoUrl}
                          title={`Démo ${active.role}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 min-h-[180px] p-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${active.color}15` }}
                        >
                          <svg className="w-6 h-6" style={{ color: active.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-500">Vidéo de présentation à venir</p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            Ajoutez l&apos;URL dans{" "}
                            <code className="text-[#8DC63F]">lib/content.ts → videoUrl</code>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
