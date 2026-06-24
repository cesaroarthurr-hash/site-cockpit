"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { integrations } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";
import Icon, { type IconName } from "./ui/Icon";

export default function Integrations() {
  return (
    <section id="integrations" className="bg-gray-50/70 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">{integrations.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {integrations.headline} <span className="gradient-text">{integrations.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{integrations.subheadline}</p>
        </Reveal>

        {/* Logos intégrations */}
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="flex items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-10 w-full opacity-70 grayscale transition group-hover:grayscale-0">
                <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="120px" />
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
        <Reveal className="mt-5 text-center">
          <p className="text-sm text-gray-400">{integrations.note}</p>
        </Reveal>

        {/* Certifications */}
        <Reveal className="mt-16">
          <div id="confiance" className="grid gap-5 md:grid-cols-3">
            {integrations.certifications.map((c) => (
              <div key={c.name} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8DC63F]/12 text-[#5a8a1f]">
                  <Icon name={c.icon as IconName} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-gray-900">{c.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
