"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

function TestimonialCard({ item }: { item: (typeof testimonials.items)[0] }) {
  return (
    <div className="relative flex flex-col shrink-0 w-[320px] sm:w-[360px] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm mx-3">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-[#8DC63F]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote mark */}
      <div className="absolute top-4 right-5 text-5xl text-[#8DC63F]/10 font-serif leading-none select-none">&ldquo;</div>

      {/* Quote */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8DC63F] to-[#6fa32e] flex items-center justify-center text-white font-semibold text-xs shrink-0">
          {item.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-xs">{item.author}</p>
          <p className="text-[11px] text-gray-400">{item.role} · {item.structure}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Triplicate for seamless infinite loop
  const row1 = [...testimonials.items, ...testimonials.items, ...testimonials.items];
  const row2 = [...testimonials.items].reverse();
  const row2Full = [...row2, ...row2, ...row2];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {testimonials.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {testimonials.subheadline}
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scroll left */}
      <div className="relative mb-4">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex"
          style={{
            animation: "marquee-left 60s linear infinite",
          }}
        >
          {row1.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex"
          style={{
            animation: "marquee-right 70s linear infinite",
          }}
        >
          {row2Full.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* CSS keyframes */}
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        div:hover {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
}
