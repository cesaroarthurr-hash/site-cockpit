"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apps } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import Icon, { type IconName } from "./ui/Icon";
import VoiceWaveform from "./ui/VoiceWaveform";
import PhoneFrame from "./ui/PhoneFrame";

const iconFor: Record<string, IconName> = {
  aux: "mic",
  manager: "grid",
  famille: "family",
  pro: "stethoscope",
};

const DEEP: Record<string, string> = {
  aux: "#3f6f10",
  manager: "#1d5fd6",
  famille: "#6a36d1",
  pro: "#bf7008",
};

const SLIDER: Record<string, string> = {
  aux: "Glisser pour envoyer au manager",
  manager: "Glisser pour diffuser au terrain",
  famille: "Glisser pour partager à la famille",
  pro: "Glisser pour inviter un intervenant",
};

const AUTOPLAY_MS = 10000;

// Écran de téléphone clair, propre à chaque espace
function PhoneScreen({ id, color }: { id: string; color: string }) {
  return (
    <div className="flex h-full flex-col px-3 pb-3 pt-7 text-left">
      <div className="flex items-center justify-between text-[8px] font-medium text-gray-400">
        <span>10:24</span>
        <span className="flex items-center gap-1 text-gray-300">●●● 95</span>
      </div>

      <div className="mt-2 flex items-center gap-1.5 border-b border-gray-100 pb-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-md" style={{ backgroundColor: color }}>
          <Icon name={iconFor[id === "auxiliaire" ? "aux" : id === "pros" ? "pro" : id]} className="h-2.5 w-2.5 text-white" />
        </span>
        <span className="text-[10px] font-bold text-gray-800">Cockpit</span>
      </div>

      {id === "auxiliaire" && (
        <div className="mt-3 flex flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: color }}>M</span>
            <div className="leading-tight">
              <p className="text-[10px] font-semibold text-gray-800">Marianne</p>
              <p className="text-[8px] text-gray-400">CR vocal · 00:42</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-gray-50 p-2.5">
            <p className="flex items-center gap-1 text-[8px] text-gray-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Écoute en cours…
            </p>
            <VoiceWaveform className="mt-1.5 w-full" color={color} height={22} bars={16} />
          </div>
          <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-1.5">
            <span className="text-[9px] text-gray-600">Actes réalisés</span>
            <Icon name="check" className="h-3 w-3" style={{ color }} />
          </div>
          <div className="mt-1.5 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-1.5">
            <span className="text-[9px] text-gray-600">État général</span>
            <span className="text-[9px] font-semibold text-gray-800">Bon</span>
          </div>
        </div>
      )}

      {id === "manager" && (
        <div className="mt-3 space-y-2">
          <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">Tableau de bord</p>
          <div className="grid grid-cols-2 gap-1.5">
            {[{ v: "7", l: "Points d’attention" }, { v: "11", l: "Bénéficiaires" }].map((t) => (
              <div key={t.l} className="rounded-lg bg-gray-50 p-2">
                <p className="font-display text-base font-extrabold" style={{ color }}>{t.v}</p>
                <p className="text-[7px] leading-tight text-gray-400">{t.l}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1.5 rounded-lg bg-gray-50 p-2">
            {[90, 65, 45].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-gray-200">
                <div className="h-full rounded-full" style={{ width: `${w}%`, backgroundColor: i === 0 ? color : "#cbd5e1" }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {id === "famille" && (
        <div className="mt-3 space-y-2">
          <p className="text-[9px] font-bold" style={{ color }}>Des nouvelles de Joseline 💚</p>
          {["Josiane est rayonnante aujourd’hui.", "Nous avons partagé un bon moment."].map((m, i) => (
            <div key={i} className="rounded-xl rounded-tl-sm bg-gray-100 p-2 text-[9px] leading-snug text-gray-600">{m}</div>
          ))}
          <div className="ml-auto w-2/3 rounded-xl rounded-tr-sm p-2 text-[9px] text-white" style={{ backgroundColor: color }}>Merci beaucoup 🙏</div>
        </div>
      )}

      {id === "pros" && (
        <div className="mt-3 space-y-1.5">
          <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">Cercle de soin · Marianne</p>
          {[
            { n: "Cabinet IDEL Pasteur", s: "ACTIF" },
            { n: "Dr. Lemaitre", s: "ACTIF" },
            { n: "Sophie Vidal — Kiné", s: "ATTENTE" },
          ].map((p) => (
            <div key={p.n} className="flex items-center justify-between rounded-lg bg-gray-50 px-2 py-1.5">
              <span className="text-[9px] font-medium text-gray-700">{p.n}</span>
              <span className="rounded px-1 py-0.5 text-[7px] font-bold" style={{ backgroundColor: `${color}20`, color }}>{p.s}</span>
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
  const deep = DEEP[app.key];

  // navigation par ancre
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

  // auto-défilement toutes les 10 s (réinitialisé à chaque changement)
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % apps.items.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section id="apps" className="relative overflow-hidden bg-gradient-to-b from-night to-night-900 py-24 text-white">
      {apps.items.map((it) => (
        <span key={it.id} id={it.id} className="absolute -top-24" aria-hidden />
      ))}
      <div className="absolute inset-0 bg-night-grid bg-grid opacity-40" />
      <div
        className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl transition-colors duration-500"
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

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Rubriques épurées */}
          <div className="flex flex-col gap-6">
            {apps.items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setActive(i)}
                className="group flex items-start gap-3 text-left transition-opacity"
                style={{ opacity: active === i ? 1 : 0.5 }}
              >
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors"
                  style={{
                    backgroundColor: active === i ? it.color : `${it.color}26`,
                    color: active === i ? "#fff" : it.color,
                  }}
                >
                  <Icon name={iconFor[it.key]} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-white">{it.sidebarTitle}</p>
                  <p className="mt-0.5 text-sm leading-snug text-white/55">{it.sidebarDesc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Cartes empilées 3D */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-xl [perspective:2200px]">
              {/* peeks décoratifs */}
              {[1, 2].map((d) => {
                const peek = apps.items[(active + d) % apps.items.length];
                return (
                  <div
                    key={d}
                    className="absolute inset-x-0 top-0 hidden h-full rounded-3xl border border-white/10 lg:block"
                    style={{
                      background: `linear-gradient(160deg, ${DEEP[peek.key]}, ${peek.color})`,
                      transform: `translateX(${d * 34}px) translateY(${-d * 20}px) rotateY(-16deg) rotateX(3deg) scale(${1 - d * 0.04})`,
                      opacity: 0.55 - d * 0.16,
                      zIndex: 10 - d,
                    }}
                  >
                    <div className="flex items-center justify-end gap-2 p-5">
                      <span className="h-7 w-7 rounded-full bg-white/25" />
                      <span className="h-2 w-16 rounded-full bg-white/25" />
                    </div>
                  </div>
                );
              })}

              {/* carte avant */}
              <div className="relative z-20 [transform-style:preserve-3d] lg:[transform:rotateY(-15deg)_rotateX(3deg)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid overflow-hidden rounded-3xl border border-white/15 shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"
                    style={{ backgroundColor: deep }}
                  >
                    {/* moitié gauche — contenu */}
                    <div className="p-6 sm:p-7">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                        <Icon name={iconFor[app.key]} className="h-5 w-5 text-white" />
                      </span>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-white/70">{app.eyebrow}</p>
                      <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-white sm:text-2xl">{app.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">{app.description}</p>

                      <ul className="mt-5 space-y-2.5">
                        {app.steps.map((s) => (
                          <li key={s.n} className="flex items-center gap-2.5 text-sm text-white/90">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                              <Icon name="check" className="h-3 w-3 text-white" />
                            </span>
                            {s.title}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center gap-3 rounded-full bg-white/15 p-1.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: deep }}>
                          <Icon name="arrow" className="h-4 w-4" />
                        </span>
                        <span className="text-[13px] text-white/65">{SLIDER[app.key]}</span>
                      </div>
                    </div>

                    {/* moitié droite — téléphone */}
                    <div className="flex items-center justify-center p-6" style={{ backgroundColor: "rgba(0,0,0,0.12)" }}>
                      <PhoneFrame className="w-[190px]">
                        <PhoneScreen id={app.id} color={app.color} />
                      </PhoneFrame>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* stats de l'espace actif */}
            <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3">
              {app.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                  <p className="font-display text-xl font-extrabold sm:text-2xl" style={{ color: app.color }}>{s.value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-white/50">{s.label}</p>
                </div>
              ))}
            </div>

            {/* pagination */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-2">
                {apps.items.map((it, i) => (
                  <button
                    key={it.id}
                    onClick={() => setActive(i)}
                    aria-label={`Voir ${it.sidebarTitle}`}
                    className="h-2 rounded-full transition-all"
                    style={{ width: active === i ? 26 : 8, backgroundColor: active === i ? app.color : "rgba(255,255,255,0.25)" }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((active + 1) % apps.items.length)}
                aria-label="Espace suivant"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
                style={{ backgroundColor: app.color }}
              >
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
