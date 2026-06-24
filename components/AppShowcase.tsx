"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apps } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import Icon, { type IconName } from "./ui/Icon";
import VoiceWaveform from "./ui/VoiceWaveform";

const iconFor: Record<string, IconName> = {
  aux: "mic",
  manager: "grid",
  famille: "family",
  pro: "stethoscope",
};

// Mini-maquette animée propre à chaque espace
function MiniMock({ id, color }: { id: string; color: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
          <span className="flex h-5 w-5 items-center justify-center rounded-md" style={{ backgroundColor: color }}>
            <Icon name={iconFor[id === "auxiliaire" ? "aux" : id === "pros" ? "pro" : id]} className="h-3 w-3 text-white" />
          </span>
          Cockpit
        </span>
        <span className="text-[10px] text-gray-300">10:24</span>
      </div>

      {id === "auxiliaire" && (
        <div className="flex flex-col items-center py-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: color }}>
            <span className="absolute inset-0 animate-pulse-ring rounded-full border-2" style={{ borderColor: color }} />
            <Icon name="mic" className="h-5 w-5 text-white" />
          </div>
          <VoiceWaveform className="mt-3 w-full" color={color} height={26} bars={20} />
          <p className="mt-2 text-[10px] font-medium" style={{ color }}>● Enregistrement… 00:42</p>
        </div>
      )}

      {id === "manager" && (
        <div className="py-3">
          <div className="grid grid-cols-2 gap-2">
            {[
              { v: "7", l: "Points d'attention" },
              { v: "11", l: "Bénéficiaires" },
            ].map((t) => (
              <div key={t.l} className="rounded-lg bg-gray-50 p-2">
                <p className="font-display text-lg font-extrabold" style={{ color }}>{t.v}</p>
                <p className="text-[9px] text-gray-400">{t.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1.5">
            {[90, 70, 55].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-1.5 rounded-full" style={{ width: `${w}%`, backgroundColor: i === 0 ? color : "#e5e7eb" }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {id === "famille" && (
        <div className="space-y-2 py-3">
          <p className="text-[10px] font-bold" style={{ color }}>Des nouvelles de Joseline 💚</p>
          {["Josiane est rayonnante aujourd’hui.", "Nous avons échangé un bon moment."].map((m, i) => (
            <div key={i} className="rounded-xl rounded-tl-sm bg-gray-50 p-2 text-[10px] text-gray-600">{m}</div>
          ))}
          <div className="ml-auto w-2/3 rounded-xl rounded-tr-sm p-2 text-[10px] text-white" style={{ backgroundColor: color }}>
            Merci beaucoup 🙏
          </div>
        </div>
      )}

      {id === "pros" && (
        <div className="space-y-1.5 py-3">
          {[
            { n: "Cabinet IDEL Pasteur", s: "ACTIF" },
            { n: "Dr. Lemaitre", s: "ACTIF" },
            { n: "Sophie Vidal — Kiné", s: "EN ATTENTE" },
          ].map((p) => (
            <div key={p.n} className="flex items-center justify-between rounded-lg bg-gray-50 p-2">
              <span className="text-[10px] font-medium text-gray-700">{p.n}</span>
              <span className="rounded px-1.5 py-0.5 text-[8px] font-bold" style={{ backgroundColor: `${color}20`, color }}>{p.s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AppShowcase() {
  const [active, setActive] = useState(0);
  const app = apps.items[active];

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.replace("#", "");
      const idx = apps.items.findIndex((it) => it.id === id);
      if (idx >= 0) setActive(idx);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="apps" className="relative overflow-hidden bg-gradient-to-b from-night to-night-900 py-24 text-white">
      {/* ancres de navigation par espace */}
      {apps.items.map((it) => (
        <span key={it.id} id={it.id} className="absolute -top-24" aria-hidden />
      ))}
      <div className="absolute inset-0 bg-night-grid bg-grid opacity-40" />
      <div
        className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full blur-3xl transition-colors duration-500"
        style={{ backgroundColor: `${app.color}22` }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#a8d660]">{apps.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text-light">{apps.headline}</span> {apps.highlight}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/55">{apps.subheadline}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Rubriques (gauche) */}
          <div className="flex flex-col gap-3">
            {apps.items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                  active === i
                    ? "border-white/20 bg-white/[0.06]"
                    : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="app-rail"
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                    style={{ backgroundColor: it.color }}
                  />
                )}
                <div className="flex items-center gap-3 pl-2">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors"
                    style={{
                      backgroundColor: active === i ? it.color : `${it.color}22`,
                      color: active === i ? "#fff" : it.color,
                    }}
                  >
                    <Icon name={iconFor[it.key]} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`font-display text-base font-bold ${active === i ? "text-white" : "text-white/70"}`}>
                      {it.sidebarTitle}
                    </p>
                    <p className="text-xs text-white/45">{it.sidebarDesc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Cartes empilées (droite) */}
          <div className="relative">
            {/* peeks décoratifs */}
            {[1, 2].map((d) => {
              const peek = apps.items[(active + d) % apps.items.length];
              return (
                <div
                  key={d}
                  className="absolute inset-x-0 top-0 h-full rounded-3xl"
                  style={{
                    backgroundColor: peek.color,
                    opacity: 0.5 - d * 0.15,
                    transform: `translateY(${-d * 14}px) translateX(${d * 10}px) scale(${1 - d * 0.03})`,
                    zIndex: 10 - d,
                  }}
                />
              );
            })}

            {/* carte avant */}
            <AnimatePresence mode="wait">
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 rounded-3xl border border-white/10 p-6 shadow-2xl sm:p-8"
                style={{ background: `linear-gradient(160deg, ${app.color}26, ${app.color}0d)` }}
              >
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color: app.color }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: app.color }} />
                      {app.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">{app.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{app.description}</p>

                    {/* stats */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {app.stats.map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                          <p className="font-display text-lg font-extrabold" style={{ color: app.color }}>{s.value}</p>
                          <p className="text-[10px] leading-tight text-white/50">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <MiniMock id={app.id} color={app.color} />
                </div>

                {/* étapes */}
                <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
                  {app.steps.map((step) => (
                    <div key={step.n} className="rounded-xl bg-white/[0.04] p-3">
                      <span className="font-display text-sm font-extrabold" style={{ color: app.color }}>{step.n}</span>
                      <p className="mt-1 text-xs font-semibold text-white/90">{step.title}</p>
                      <p className="mt-1 text-[11px] leading-snug text-white/45">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
