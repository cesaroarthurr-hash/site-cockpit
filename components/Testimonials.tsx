"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
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
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {testimonials.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {testimonials.subheadline}
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col p-8 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden group"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-[#8DC63F]/10 font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-[#8DC63F]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8DC63F] to-[#6fa32e] flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.author}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.role} · {item.structure}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8DC63F]/0 via-[#8DC63F]/40 to-[#8DC63F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
