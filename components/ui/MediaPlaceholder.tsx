"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";

/**
 * Emplacement réservé pour une vidéo ou un visuel à intégrer plus tard.
 * variant "video" → bouton play ; "image" → icône image.
 * Le client remplira ces blocs avec ses propres médias.
 */
export default function MediaPlaceholder({
  label,
  hint,
  variant = "video",
  color = "#8DC63F",
  dark = false,
  className = "",
  aspect = "aspect-video",
}: {
  label: string;
  hint?: string;
  variant?: "video" | "image";
  color?: string;
  dark?: boolean;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border-2 border-dashed ${
        dark ? "border-white/15 bg-white/[0.03]" : "border-gray-200 bg-gray-50/80"
      } ${className}`}
    >
      {/* léger motif de fond */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: dark
            ? "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)"
            : "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}1f` }}
        >
          {variant === "video" && (
            <span
              className="absolute inset-0 rounded-full animate-pulse-ring"
              style={{ border: `2px solid ${color}` }}
            />
          )}
          <Icon
            name={variant === "video" ? "play" : "image"}
            className="h-7 w-7"
            style={{ color }}
          />
        </motion.div>
        <div>
          <p className={`text-sm font-semibold ${dark ? "text-white/80" : "text-gray-700"}`}>
            {label}
          </p>
          {hint && (
            <p className={`mt-0.5 text-xs ${dark ? "text-white/40" : "text-gray-400"}`}>
              {hint}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
