"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import DemoButton from "./ui/DemoButton";
import Icon from "./ui/Icon";
import VoiceWaveform from "./ui/VoiceWaveform";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

function useTimer() {
  const [s, setS] = useState(42);
  useEffect(() => {
    const id = setInterval(() => setS((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function Hero() {
  const timer = useTimer();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* Fond grille + lueurs */}
      <div className="absolute inset-0 bg-hero-grid bg-grid" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#8DC63F]/[0.07] to-transparent" />
      <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-[#8DC63F]/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-[#3B82F6]/[0.06] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Colonne texte */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/25 bg-[#8DC63F]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5a8a1f]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8DC63F]" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {hero.headline}{" "}
            <span className="gradient-text">{hero.highlight}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-gray-500"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DemoButton withArrow className="px-7 py-3.5 text-base">
              {hero.cta.primary}
            </DemoButton>
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-medium text-gray-700 transition-all hover:scale-[1.02] hover:border-gray-300"
            >
              {hero.cta.secondary}
            </a>
          </motion.div>

          {/* Badges de confiance */}
          <motion.div variants={item} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {hero.badges.map((b) => (
              <div
                key={b.label}
                className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-white/70 px-3 py-2.5 backdrop-blur"
              >
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#8DC63F]" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">{b.label}</p>
                  <p className="text-[11px] leading-tight text-gray-400">{b.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Colonne visuel — téléphone animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* halo */}
          <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-tr from-[#8DC63F]/30 to-[#3B82F6]/20 blur-3xl" />

          {/* Téléphone */}
          <div className="relative mx-auto w-[300px] rounded-[2.5rem] border-[10px] border-night bg-night p-1 shadow-2xl shadow-gray-900/30">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              {/* status bar */}
              <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-medium text-gray-700">
                <span>10:24</span>
                <span className="flex items-center gap-1 text-gray-400">●●● 95</span>
              </div>
              {/* header */}
              <div className="flex items-center gap-2 px-4 pb-3 pt-2">
                <Icon name="arrow" className="h-4 w-4 rotate-180 text-gray-400" />
                <span className="text-sm font-semibold text-gray-800">Nouveau compte rendu</span>
              </div>
              {/* progress */}
              <div className="flex items-center gap-1 px-5">
                <span className="h-1.5 flex-1 rounded-full bg-[#8DC63F]" />
                <span className="h-1.5 flex-1 rounded-full bg-[#8DC63F]" />
                <span className="h-1.5 flex-1 rounded-full bg-gray-200" />
              </div>

              <div className="px-5 py-4">
                <div className="rounded-xl bg-amber-50 p-3">
                  <p className="text-[11px] font-semibold text-amber-700">💡 Pensez à mentionner</p>
                  <ul className="mt-1 space-y-0.5 text-[10px] text-amber-600/80">
                    <li>• Vos actes réalisés</li>
                    <li>• L’état général · Points d’attention</li>
                  </ul>
                </div>

                <p className="mt-4 text-center text-[11px] text-gray-500">
                  Décrivez votre intervention auprès de <span className="font-semibold text-gray-700">Marianne</span>.
                  <br />L’IA structurera automatiquement.
                </p>

                {/* mic + waveform */}
                <div className="mt-4 flex flex-col items-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC63F]">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-[#8DC63F]" />
                    <Icon name="mic" className="h-7 w-7 text-white" />
                  </div>
                  <VoiceWaveform className="mt-4 w-full" height={34} />
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#5a8a1f]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    Enregistrement en cours… {timer}
                  </p>
                </div>

                <button className="mt-4 w-full rounded-xl bg-[#8DC63F] py-2.5 text-xs font-semibold text-white">
                  Suivant — Suivi bénéficiaire →
                </button>
              </div>
            </div>
          </div>

          {/* Carte flottante : IA */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-16 w-44 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-900/10 sm:-right-10"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8DC63F]/15">
                <Icon name="sparkles" className="h-4 w-4 text-[#8DC63F]" />
              </span>
              <span className="text-[11px] font-semibold text-gray-800">CR structuré par l’IA</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1.5 w-full rounded-full bg-gray-100" />
              <div className="h-1.5 w-3/4 rounded-full bg-gray-100" />
            </div>
          </motion.div>

          {/* Carte flottante : stat */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-20 w-40 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-900/10 sm:-left-12"
          >
            <p className="font-display text-2xl font-extrabold text-[#8DC63F]">16h</p>
            <p className="text-[10px] leading-tight text-gray-500">économisées / mois / auxiliaire</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
