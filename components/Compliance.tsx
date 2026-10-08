"use client";

import { motion } from "framer-motion";
import { compliance } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";
import Icon from "./ui/Icon";

export default function Compliance() {
  return (
    <section id="has" className="bg-gradient-to-b from-white to-gray-50/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">
            {compliance.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {compliance.headline} <span className="gradient-text">{compliance.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{compliance.subheadline}</p>
        </Reveal>

        {/* En-têtes de colonnes (desktop) */}
        <Reveal className="mt-14 hidden lg:block">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {compliance.columns.left}
            </p>
            <span className="w-10" />
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {compliance.columns.right}
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-5 space-y-4">
          {compliance.rows.map((row) => (
            <motion.div
              key={row.event}
              variants={staggerItem}
              className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6"
            >
              {/* Ce qui se passe */}
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
                <span
                  className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-bold ${
                    row.tone === "dark"
                      ? "bg-night text-white"
                      : "bg-[#8DC63F]/15 text-[#3c5e16]"
                  }`}
                >
                  {row.source}
                </span>
                <p className="text-sm font-semibold text-gray-900">{row.event}</p>
              </div>

              {/* Flèche */}
              <span className="hidden justify-center text-[#8DC63F] lg:flex">
                <Icon name="arrow" className="h-5 w-5" />
              </span>

              {/* Chapitre HAS */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#8DC63F]/25 bg-[#eef7df]/60 px-5 py-4">
                <span className="flex shrink-0 flex-col items-center justify-center rounded-md bg-[#8DC63F] px-2.5 py-1 leading-none text-white">
                  <span className="text-[8px] font-bold tracking-wider">HAS</span>
                  <span className="font-display text-sm font-extrabold">{row.chapter}</span>
                </span>
                <p className="text-sm font-semibold text-[#2f4a11]">{row.criterion}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal className="mt-10">
          <div className="flex items-start gap-3 rounded-2xl bg-night px-6 py-5 text-white">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8DC63F]">
              <Icon name="check" className="h-4 w-4 text-night" />
            </span>
            <p className="font-display text-base font-bold sm:text-lg">{compliance.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
