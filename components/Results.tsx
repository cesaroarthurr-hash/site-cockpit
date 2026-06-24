"use client";

import { motion } from "framer-motion";
import { results } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";
import Icon from "./ui/Icon";

const tones: Record<string, string> = {
  brand: "bg-[#8DC63F] text-white",
  light: "bg-[#eef7df] text-[#3c5e16]",
  dark: "bg-gradient-to-br from-night-50 to-night-900 text-white",
};

export default function Results() {
  return (
    <section id="resultats" className="bg-gradient-to-b from-white to-gray-50/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">{results.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {results.headline} <span className="gradient-text">{results.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{results.subheadline}</p>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {results.cells.map((cell, i) =>
            cell.type === "stat" ? (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className={`flex aspect-square flex-col justify-between rounded-3xl p-6 shadow-sm ${tones[cell.tone!]}`}
              >
                <p className="font-display text-4xl font-extrabold sm:text-5xl">{cell.value}</p>
                <div>
                  <p className="text-sm font-semibold leading-snug">{cell.label}</p>
                  {cell.sub && <p className="mt-1 text-xs opacity-70">{cell.sub}</p>}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-gray-200 bg-gray-100/70 text-center"
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.07) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC63F]/15">
                  <Icon name="image" className="h-6 w-6 text-[#8DC63F]" />
                </span>
                <p className="relative mt-3 px-4 text-xs font-semibold text-gray-600">{cell.label}</p>
                <p className="relative text-[11px] text-gray-400">{cell.hint}</p>
              </motion.div>
            )
          )}
        </StaggerGroup>
      </div>
    </section>
  );
}
