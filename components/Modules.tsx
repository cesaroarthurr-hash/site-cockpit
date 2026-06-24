"use client";

import { motion } from "framer-motion";
import { modules } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";
import Icon, { type IconName } from "./ui/Icon";

export default function Modules() {
  return (
    <section id="modules" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">{modules.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {modules.headline} <span className="gradient-text">{modules.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{modules.subheadline}</p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.items.map((m) => (
            <motion.div
              key={m.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-gray-200/60"
            >
              <span
                className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
                style={{ backgroundColor: m.color }}
              />
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${m.color}1a`, color: m.color }}
              >
                <Icon name={m.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-gray-900">{m.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{m.desc}</p>
              <div className="mt-5 flex items-baseline gap-2 border-t border-gray-50 pt-4">
                <span className="font-display text-xl font-extrabold" style={{ color: m.color }}>{m.stat}</span>
                <span className="text-xs text-gray-400">{m.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal className="mt-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-xs font-medium text-gray-400">
            <Icon name="sparkles" className="h-3.5 w-3.5 text-[#8DC63F]" />
            {modules.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
