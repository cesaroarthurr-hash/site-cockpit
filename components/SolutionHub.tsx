"use client";

import { motion } from "framer-motion";
import { solution } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import Icon from "./ui/Icon";

const a = solution.actors;
const leftCol = [a[0], a[2]];
const rightCol = [a[1], a[3]];

function ActorCard({ actor, align }: { actor: (typeof a)[number]; align: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-gray-200/60"
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${actor.color}1f`, color: actor.color }}
        >
          <Icon name={actor.key === "aux" ? "mic" : actor.key === "manager" ? "grid" : actor.key === "famille" ? "family" : "stethoscope"} className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: actor.color }}>
            {actor.role}
          </p>
          <p className="font-display text-sm font-bold text-gray-900">{actor.position}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-500">{actor.description}</p>
      <span
        className="mt-3 inline-block rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide"
        style={{ backgroundColor: `${actor.color}15`, color: actor.color }}
      >
        {actor.verbs}
      </span>
    </motion.div>
  );
}

export default function SolutionHub() {
  return (
    <section id="solution" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">
            {solution.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {solution.headline}{" "}
            <span className="gradient-text">{solution.highlights[0]}</span> et{" "}
            <span className="gradient-text">{solution.highlights[1]}</span> {solution.headlineEnd}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{solution.subheadline}</p>
        </Reveal>

        <div className="relative mt-14">
          {/* Connecteurs animés (desktop) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[
              [16, 27],
              [16, 73],
              [84, 27],
              [84, 73],
            ].map(([x, y], i) => (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="#8DC63F"
                strokeWidth="0.3"
                strokeDasharray="1.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
              />
            ))}
          </svg>

          <div className="grid items-center gap-5 lg:grid-cols-3 lg:gap-8">
            {/* Colonne gauche */}
            <div className="order-2 grid gap-5 lg:order-1">
              {leftCol.map((actor) => (
                <ActorCard key={actor.key} actor={actor} align="left" />
              ))}
            </div>

            {/* Hub central */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-night-50 to-night-900 p-8 text-center shadow-2xl shadow-night/40 lg:order-2"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8DC63F]/20 blur-2xl" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8DC63F]/30 bg-[#8DC63F]/10 px-3 py-1 text-[11px] font-semibold text-[#a8d660]">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                {solution.hub.aiBadge}
              </span>
              <div className="mt-5 flex justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8DC63F] shadow-lg shadow-[#8DC63F]/40">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-white" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="7" />
                    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-white">
                {solution.hub.title}<span className="text-[#8DC63F]">.</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{solution.hub.subtitle}</p>
              <ul className="mt-5 space-y-2 text-left">
                {solution.hub.aiPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                    <Icon name="arrow" className="h-4 w-4 shrink-0 text-[#8DC63F]" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne droite */}
            <div className="order-3 grid gap-5">
              {rightCol.map((actor) => (
                <ActorCard key={actor.key} actor={actor} align="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
