"use client";

import { problem } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";
import { motion } from "framer-motion";
import Icon, { type IconName } from "./ui/Icon";

export default function Problem() {
  return (
    <section id="constat" className="relative bg-gray-50/70 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">
            {problem.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {problem.headline}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{problem.headlineHighlight}</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 -rotate-1 bg-[#8DC63F]/35" />
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{problem.subheadline}</p>
        </Reveal>

        {/* Pains */}
        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {problem.pains.map((pain) => (
            <motion.div
              key={pain.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-gray-200/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-400">
                <Icon name={pain.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-gray-900">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{pain.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>

      </div>
    </section>
  );
}
