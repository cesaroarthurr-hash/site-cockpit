"use client";

import { testimonials } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import AnimatedCounter from "./ui/AnimatedCounter";

type Item = (typeof testimonials.items)[number];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: Item }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <Stars />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-gray-50 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8DC63F] to-[#5a8a1f] font-display text-sm font-bold text-white">
          {t.author.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold text-gray-900">{t.author}</p>
          <p className="text-xs text-gray-400">{t.role} · {t.structure}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const half = Math.ceil(testimonials.items.length / 2);
  const row1 = testimonials.items.slice(0, half);
  const row2 = testimonials.items.slice(half);

  return (
    <section id="temoignages" className="overflow-hidden bg-gradient-to-b from-gray-50/60 to-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">{testimonials.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {testimonials.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{testimonials.subheadline}</p>
        </Reveal>
      </div>

      {/* Rangées défilantes */}
      <div className="mask-fade-x mt-12 space-y-5">
        <div className="flex w-max animate-marquee gap-5 pause-on-hover">
          {[...row1, ...row1].map((t, i) => (
            <Card key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-rev gap-5 pause-on-hover">
          {[...row2, ...row2].map((t, i) => (
            <Card key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Bande de stats */}
      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-night-50 to-night-900 px-6 py-12 shadow-xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8DC63F]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#3B82F6]/15 blur-3xl" />
            <div className="relative grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {testimonials.stats.map((s) => (
                <div key={s.label} className="px-4 py-4 text-center">
                  <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
