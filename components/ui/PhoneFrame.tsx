import type { ReactNode } from "react";

// Cadre de téléphone réaliste (portrait 9:19) — écran clair par défaut
export default function PhoneFrame({
  children,
  className = "w-[208px]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[2rem] bg-night p-[6px] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-white">
          {/* encoche */}
          <div className="absolute left-1/2 top-1.5 z-20 h-3.5 w-14 -translate-x-1/2 rounded-full bg-night" />
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
