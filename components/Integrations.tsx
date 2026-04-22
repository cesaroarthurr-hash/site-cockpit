"use client";

import { motion } from "framer-motion";

const integrations = [
  {
    name: "Ogust",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" fill="#8DC63F" opacity="0.2" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#8DC63F">O</text>
      </svg>
    ),
  },
  {
    name: "Domino",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" fill="#8DC63F" opacity="0.2" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#8DC63F">D</text>
      </svg>
    ),
  },
  {
    name: "Gmail",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="4" y="9" width="32" height="22" rx="3" fill="none" stroke="#8DC63F" strokeWidth="2" />
        <polyline points="4,9 20,22 36,9" stroke="#8DC63F" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "Google Agenda",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="5" y="7" width="30" height="28" rx="3" fill="none" stroke="#8DC63F" strokeWidth="2" />
        <line x1="5" y1="15" x2="35" y2="15" stroke="#8DC63F" strokeWidth="2" />
        <line x1="13" y1="4" x2="13" y2="10" stroke="#8DC63F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="27" y1="4" x2="27" y2="10" stroke="#8DC63F" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="13" y="20" width="5" height="5" rx="1" fill="#8DC63F" opacity="0.7" />
        <rect x="22" y="20" width="5" height="5" rx="1" fill="#8DC63F" opacity="0.4" />
        <rect x="13" y="28" width="5" height="3" rx="1" fill="#8DC63F" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Apologic",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" fill="#8DC63F" opacity="0.2" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#8DC63F">A</text>
      </svg>
    ),
  },
  {
    name: "DocuSign",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="8" y="4" width="20" height="26" rx="2" fill="none" stroke="#8DC63F" strokeWidth="2" />
        <line x1="12" y1="12" x2="24" y2="12" stroke="#8DC63F" strokeWidth="1.5" />
        <line x1="12" y1="17" x2="24" y2="17" stroke="#8DC63F" strokeWidth="1.5" />
        <path d="M12 24 Q16 20 20 24 Q24 28 28 22" stroke="#8DC63F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="30" r="7" fill="#8DC63F" />
        <path d="M27 30 l2 2 l4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="19" r="14" fill="none" stroke="#8DC63F" strokeWidth="2" />
        <path d="M13 27 l2-5 a8 8 0 1 1 3 3 z" fill="none" stroke="#8DC63F" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 18 q1-1 2 0 q1 2 2 1" stroke="#8DC63F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "API ouverte",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M8 20 Q8 10 20 10 Q32 10 32 20 Q32 30 20 30" stroke="#8DC63F" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="#8DC63F" />
        <path d="M16 26 l-8 4 l2-8" stroke="#8DC63F" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="2" fill="#8DC63F" opacity="0.5" />
        <circle cx="28" cy="14" r="2" fill="#8DC63F" opacity="0.5" />
        <circle cx="28" cy="26" r="2" fill="#8DC63F" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fond sombre dégradé aux couleurs de la marque */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a2e10] to-gray-900" />
      {/* Lueur verte centrale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8DC63F]/10 rounded-full blur-3xl" />
      {/* Grid subtile */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(141,198,63,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(141,198,63,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#8DC63F] uppercase tracking-widest mb-5">
            Intégrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Cockpit s'intègre avec{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8DC63F 0%, #b5e06a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              vos outils existants
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Cockpit est pensé comme une solution ouverte. Nous nous connectons aux logiciels métier, messageries et outils que vous utilisez déjà.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-14"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex flex-col items-center gap-2.5 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#8DC63F]/40 transition-all duration-200 group w-24"
            >
              <div className="group-hover:scale-110 transition-transform duration-200">
                {integration.icon}
              </div>
              <span className="text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors duration-200 font-medium leading-tight text-center">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mention API */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-xs text-gray-500"
        >
          Et bien d'autres via notre{" "}
          <span className="text-[#8DC63F] font-medium">API ouverte</span>
          {" "}— contactez-nous pour toute intégration spécifique.
        </motion.p>
      </div>
    </section>
  );
}
