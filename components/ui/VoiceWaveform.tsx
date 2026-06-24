"use client";

// Barres d'égaliseur animées — façon "dictée en cours"
export default function VoiceWaveform({
  bars = 22,
  color = "#8DC63F",
  className = "",
  height = 40,
}: {
  bars?: number;
  color?: string;
  className?: string;
  height?: number;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-[3px] ${className}`}
      style={{ height }}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        // hauteurs et délais variés pour un rendu organique
        const base = 0.35 + (Math.sin(i * 1.7) + 1) / 2 * 0.65;
        return (
          <span
            key={i}
            className="w-[3px] rounded-full origin-center animate-wave"
            style={{
              height: "100%",
              backgroundColor: color,
              transform: `scaleY(${base})`,
              animationDelay: `${(i % 7) * 0.11}s`,
              animationDuration: `${0.9 + (i % 5) * 0.12}s`,
              opacity: 0.55 + (i % 4) * 0.12,
            }}
          />
        );
      })}
    </div>
  );
}
