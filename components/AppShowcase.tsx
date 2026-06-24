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

// Teinte profonde par espace (carte saturée + texte blanc, façon speakli)
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

// Panneau UI translucide (moitié droite de la carte avant)
function MiniPanel({ id }: { id: string }) {
  const box = "rounded-xl bg-white/12 backdrop-blur-sm p-3";

  if (id === "auxiliaire") {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">M</span>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-white">Marianne</p>
            <p className="text-[10px] text-white/55">CR vocal · 00:42</p>
          </div>
        </div>
        <div className={box}>
          <p className="flex items-center gap-1.5 text-[10px] text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Écoute en cours…
          </p>
          <VoiceWaveform className="mt-2 w-full" color="#ffffff" height={26} bars={20} />
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/12 px-3 py-2">
          <span className="text-[11px] text-white/80">Actes réalisés</span>
          <Icon name="check" className="h-3.5 w-3.5 text-white" />
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/12 px-3 py-2">
          <span className="text-[11px] text-white/80">État général</span>
          <span className="text-[11px] font-semibold text-white">Bon</span>
        </div>
      </div>
    );
  }

  if (id === "manager") {
    return (
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">Tableau de bord</p>
        <div className="grid grid-cols-2 gap-2">
          {[{ v: "7", l: "Points d’attention" }, { v: "11", l: "Bénéficiaires" }].map((t) => (
            <div key={t.l} className={box}>
              <p className="font-display text-2xl font-extrabold text-white">{t.v}</p>
              <p className="text-[10px] text-white/55">{t.l}</p>
            </div>
          ))}
        </div>
        <div className={box}>
          {[90, 65, 45].map((w, i) => (
            <div key={i} className="mb-2 last:mb-0">
              <div className="h-1.5 rounded-full bg-white/15">
                <div className="h-full rounded-full bg-white/80" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "famille") {
    return (
      <div className="space-y-2.5">
        <p className="text-[11px] font-semibold text-white">Des nouvelles de Joseline 💚</p>
        {["Josiane est rayonnante aujourd’hui.", "Nous avons partagé un bon moment."].map((m, i) => (
          <div key={i} className="rounded-2xl rounded-tl-sm bg-white/15 p-2.5 text-[11px] leading-snug text-white/90">{m}</div>
        ))}
        <div className="ml-auto w-2/3 rounded-2xl rounded-tr-sm bg-white/25 p-2.5 text-[11px] text-white">Merci beaucoup 🙏</div>
      </div>
    );
  }

  // pros
  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">Cercle de soin · Marianne</p>
      {[
        { n: "Cabinet IDEL Pasteur", s: "ACTIF" },
        { n: "Dr. Lemaitre", s: "ACTIF" },
        { n: "Sophie Vidal — Kiné", s: "EN ATTENTE" },
      ].map((p) => (
        <div key={p.n} className="flex items-center justify-between rounded-xl bg-white/12 px-3 py-2">
          <span className="text-[11px] font-medium text-white/90">{p.n}</span>
          <span className="rounded px-1.5 py-0.5 text-[8px] font-bold text-white" style={{ backgroundColor: "rgba(255,255,255,0.22)" }}>{p.s}</span>
        </div>
      ))}
    </div>
  );
}

export default function AppShowcase() {
  const [active, setActive] = useState(0);
  const app = apps.items[active];
  const deep = DEEP[app.key];

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
          {/* Rubriques épurées (gauche) */}
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

          {/* Cartes empilées 3D (droite) */}
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
                      opacity: 0.6 - d * 0.18,
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
              <div className="relative z-20 [transform-style:preserve-3d] lg:[transform:rotateY(-16deg)_rotateX(3deg)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid overflow-hidden rounded-3xl border border-white/15 shadow-2xl lg:grid-cols-2"
                    style={{ backgroundColor: deep }}
                  >
                    {/* moitié gauche — contenu */}
                    <div className="p-6 sm:p-7">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                        <Icon name={iconFor[app.key]} className="h-5 w-5 text-white" />
                      </span>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-white/70">{app.eyebrow}</p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-white">{app.title}</h3>
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

                      {/* faux-slider */}
                      <div className="mt-6 flex items-center gap-3 rounded-full bg-white/15 p-1.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white" style={{ color: deep }}>
                          <Icon name="arrow" className="h-4 w-4" />
                        </span>
                        <span className="text-[13px] text-white/65">{SLIDER[app.key]}</span>
                      </div>
                    </div>

                    {/* moitié droite — mock translucide */}
                    <div className="p-6 sm:p-7" style={{ backgroundColor: "rgba(255,255,255,0.10)" }}>
                      <div className="mb-4 flex items-center justify-end gap-2">
                        <span className="text-[11px] text-white/70">Cockpit</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-[10px] font-bold text-white">JN</span>
                      </div>
                      <MiniPanel id={app.id} />
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
                    style={{
                      width: active === i ? 26 : 8,
                      backgroundColor: active === i ? app.color : "rgba(255,255,255,0.25)",
                    }}
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
