"use client";

import { motion } from "framer-motion";
import { trustedBy } from "@/lib/content";

export default function TrustedBy() {
  return (
    <section className="py-16 border-t border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-1">
            {trustedBy.headline}
          </p>
          <p className="text-sm text-gray-400">{trustedBy.subheadline}</p>
        </motion.div>

        {/* Logos grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {trustedBy.logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white transition-all duration-200 group min-h-[64px]"
            >
              {/* Placeholder logo — remplacez par une <Image> réelle */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-gray-200 group-hover:bg-[#8DC63F]/15 transition-colors" />
                <span className="text-[10px] text-gray-300 font-medium">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for dev */}
        <p className="text-center text-xs text-gray-300 mt-6">
          Remplacez les logos dans{" "}
          <code className="text-[#8DC63F]">lib/content.ts → trustedBy.logos</code> et utilisez{" "}
          <code className="text-[#8DC63F]">next/image</code> dans{" "}
          <code className="text-[#8DC63F]">components/TrustedBy.tsx</code>
        </p>
      </div>
    </section>
  );
}
