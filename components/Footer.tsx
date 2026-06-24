import Link from "next/link";
import { footer } from "@/lib/content";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{footer.description}</p>
            <p className="mt-4 text-sm font-medium text-[#a8d660]">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span className="rounded-full border border-white/15 px-2.5 py-1">Certifié HDS</span>
            <span className="rounded-full border border-white/15 px-2.5 py-1">Conforme RGPD</span>
            <span className="rounded-full border border-white/15 px-2.5 py-1">🇫🇷 Données en France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
