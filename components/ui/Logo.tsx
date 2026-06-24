import Link from "next/link";

// Logo Cockpit — carré vert arrondi + cible (crosshair) + "Cockpit."
export default function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#8DC63F] shadow-sm transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
        </svg>
      </span>
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        Cockpit<span className="text-[#8DC63F]">.</span>
      </span>
    </Link>
  );
}
