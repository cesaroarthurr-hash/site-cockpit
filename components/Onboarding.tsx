"use client";

import { motion } from "framer-motion";
import { onboarding } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";

export default function Onboarding() {
  return (
    <section id="accompagnement" className="relative overflow-hidden bg-night py-24 text-white">
      <div className="absolute inset-0 bg-night-grid bg-grid opacity-50" />
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#8DC63F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#a8d660]">{onboarding.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {onboarding.headline} <span className="gradient-text-light">{onboarding.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/55">{onboarding.subheadline}</p>
        </Reveal>

        <div className="relative mt-14">
          {/* ligne de liaison */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#8DC63F]/40 to-transparent lg:block" />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {onboarding.steps.map((step) => (
              <motion.div key={step.n} variants={staggerItem} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8DC63F] font-display text-lg font-extrabold text-white shadow-lg shadow-[#8DC63F]/30">
                  {step.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
