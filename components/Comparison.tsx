"use client";

import { motion } from "framer-motion";
import { comparison } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";

function Yes() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8DC63F] text-white">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 10.5l4 4 8-8" />
      </svg>
    </span>
  );
}

function No() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-gray-400">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l8 8M14 6l-8 8" />
      </svg>
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="comparatif" className="bg-gray-50/70 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">
            {comparison.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {comparison.headline} <span className="gradient-text">{comparison.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{comparison.subheadline}</p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            {/* En-tête */}
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-gray-100 bg-gray-50/80 px-5 py-4 sm:gap-6 sm:px-7">
              <span />
              <span className="w-20 text-center text-[11px] font-bold uppercase tracking-wider text-[#5a8a1f] sm:w-28 sm:text-xs">
                {comparison.columns.with}
              </span>
              <span className="w-20 text-center text-[11px] font-bold uppercase tracking-wider text-gray-400 sm:w-28 sm:text-xs">
                {comparison.columns.without}
              </span>
            </div>

            {/* Lignes */}
            <StaggerGroup>
              {comparison.rows.map((row) => (
                <motion.div
                  key={row}
                  variants={staggerItem}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-gray-50 px-5 py-5 last:border-0 sm:gap-6 sm:px-7"
                >
                  <p className="text-sm font-semibold leading-snug text-gray-800 sm:text-base">
                    {row}
                  </p>
                  <span className="flex w-20 justify-center sm:w-28">
                    <Yes />
                  </span>
                  <span className="flex w-20 justify-center sm:w-28">
                    <No />
                  </span>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
