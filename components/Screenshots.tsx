"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { screenshots } from "@/lib/content";

function ScreenshotCard({
  item,
  index,
}: {
  item: (typeof screenshots.items)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Alternating parallax direction
  const yRange = index % 2 === 0 ? [30, -30] : [50, -20];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flex flex-col gap-4"
    >
      <motion.div
        style={{ y }}
        className="relative rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden bg-white"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-300/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]/70" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white rounded px-2 py-0.5 text-[10px] text-gray-300 font-mono border border-gray-100 max-w-[180px]">
              cockpit.sahanest.fr
            </div>
          </div>
        </div>

        {item.placeholder ? (
          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#8DC63F]/10 flex items-center justify-center">
              <span className="text-2xl">
                {index === 0 ? "📊" : index === 1 ? "👤" : index === 2 ? "🎙️" : "👨‍👩‍👧"}
              </span>
            </div>
            <div className="text-center px-4">
              <p className="text-xs text-gray-400 font-medium">{item.title}</p>
              <p className="text-[10px] text-gray-300 mt-0.5">
                → <code className="text-[#8DC63F]">public/screenshots/{item.src.split("/").pop()}</code>
              </p>
            </div>
          </div>
        ) : (
          <div className="aspect-video relative">
            <Image src={item.src} alt={item.title} fill className="object-cover" />
          </div>
        )}
      </motion.div>

      <div>
        <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
        <p className="text-sm text-gray-400 mt-0.5">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Screenshots() {
  return (
    <section className="py-24 bg-gray-50/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-4">
            L&apos;interface
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {screenshots.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{screenshots.subheadline}</p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {screenshots.items.map((item, i) => (
            <ScreenshotCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Mobile CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#8DC63F] to-[#6fa32e] p-8 sm:p-12 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <h3 className="text-2xl font-bold mb-3">Application mobile — iOS & Android</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Les auxiliaires de vie et les managers accèdent à Cockpit depuis leur smartphone. Comptes rendus vocaux, planning en temps réel, alertes push, messagerie — tout est là.
              </p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/15 backdrop-blur-sm text-sm font-medium text-white">
                  <span>📱</span> iOS
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/15 backdrop-blur-sm text-sm font-medium text-white">
                  <span>🤖</span> Android
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative w-36 sm:w-44 shrink-0">
              <div className="relative rounded-[2.5rem] border-4 border-white/30 shadow-2xl shadow-black/30 overflow-hidden bg-gray-900 aspect-[9/19]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-gray-800" />
                <div className="p-3 pt-8 h-full flex flex-col gap-2">
                  {/* Fake mobile UI */}
                  <div className="w-full h-5 rounded-lg bg-white/10 flex items-center px-2">
                    <div className="w-3 h-3 rounded-full bg-[#8DC63F]/60 mr-1.5" />
                    <div className="h-1.5 w-16 rounded-full bg-white/20" />
                  </div>
                  <div className="w-full h-16 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="text-2xl">🎙️</span>
                  </div>
                  <div className="text-[8px] text-white/40 text-center">Dictez votre compte rendu</div>
                  <div className="flex gap-1">
                    <div className="flex-1 h-12 rounded-lg bg-white/8" />
                    <div className="flex-1 h-12 rounded-lg bg-white/8" />
                  </div>
                  <div className="h-4 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/8" />
                  <div className="mt-auto h-8 rounded-xl bg-[#8DC63F]/60 flex items-center justify-center">
                    <div className="h-1.5 w-16 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorations */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -left-8 -top-8 w-48 h-48 rounded-full bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
