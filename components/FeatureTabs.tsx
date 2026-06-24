"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featureTabs } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import Icon, { type IconName } from "./ui/Icon";
import MediaPlaceholder from "./ui/MediaPlaceholder";
import VoiceWaveform from "./ui/VoiceWaveform";
import DemoButton from "./ui/DemoButton";

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = featureTabs.tabs[active];

  return (
    <section id="fonctionnalites" className="relative overflow-hidden bg-night py-24 text-white">
      {/* fond */}
      <div className="absolute inset-0 bg-night-grid bg-grid opacity-60" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#8DC63F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#a8d660]">
            {featureTabs.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {featureTabs.headline} <span className="gradient-text-light">{featureTabs.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/55">{featureTabs.subheadline}</p>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-10 flex justify-center">
          <div className="flex w-full max-w-3xl flex-wrap justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur">
            {featureTabs.tabs.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  active === i ? "text-night" : "text-white/60 hover:text-white"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon name={t.icon as IconName} className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{t.tab}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              {/* Texte */}
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: tab.color }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tab.color }} />
                  {tab.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  {tab.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/60">{tab.description}</p>
                <ul className="mt-6 space-y-3">
                  {tab.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${tab.color}25`, color: tab.color }}
                      >
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <DemoButton variant="primary" withArrow>
                    Réserver une démo
                  </DemoButton>
                </div>
              </div>

              {/* Média + carte live */}
              <div className="relative">
                <MediaPlaceholder
                  label={tab.media.label}
                  hint={tab.media.hint}
                  color={tab.color}
                  dark
                  aspect="aspect-[4/3]"
                />

                {/* Carte live flottante */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -right-3 w-56 rounded-2xl border border-white/10 bg-night-50/95 p-4 shadow-2xl backdrop-blur sm:-right-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
                      <Icon name={tab.icon as IconName} className="h-3.5 w-3.5" style={{ color: tab.color }} />
                      Cockpit
                    </span>
                    {tab.key === "vocal" && (
                      <span className="text-[10px] text-white/40">00:42</span>
                    )}
                  </div>
                  {tab.key === "vocal" ? (
                    <>
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/50">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Dictée en cours
                      </div>
                      <VoiceWaveform className="mt-2 w-full" color={tab.color} height={26} bars={18} />
                    </>
                  ) : (
                    <div className="mt-3 space-y-2">
                      {[0, 1, 2].map((j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tab.color }} />
                          <span className="h-1.5 flex-1 rounded-full bg-white/15" style={{ width: `${80 - j * 15}%` }} />
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
