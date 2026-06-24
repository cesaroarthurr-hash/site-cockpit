import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "L'histoire de Cockpit et de SAHANEST : notre mission pour faciliter l'aide à domicile.",
};

const values = [
  { title: "Le terrain d'abord", desc: "Chaque fonctionnalité est co-construite avec les auxiliaires et les responsables de secteur qui l'utilisent au quotidien." },
  { title: "Du temps rendu au soin", desc: "Notre obsession : retirer la paperasse pour rendre du temps humain à ceux qui accompagnent." },
  { title: "Souveraineté & confiance", desc: "Données de santé hébergées en France, certifiées HDS et conformes RGPD. La confiance n'est pas une option." },
];

export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div className="absolute inset-0 bg-hero-grid bg-grid" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-[#8DC63F]/[0.08] to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-600">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au site
          </Link>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/25 bg-[#8DC63F]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5a8a1f]">
            Notre histoire
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-gray-900 sm:text-5xl">
            Faciliter l’aide à domicile, <span className="gradient-text">tout simplement.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
            Cockpit est né d’un constat simple : ceux qui prennent soin des autres méritent
            des outils à la hauteur de leur travail. Cette page sera bientôt enrichie de notre
            parcours, notre équipe et notre vision.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-gray-50/70 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder à compléter */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50/60 p-10 text-center">
            <p className="font-display text-lg font-bold text-gray-700">Le reste de notre histoire arrive bientôt.</p>
            <p className="mt-2 text-sm text-gray-400">
              Parcours de SAHANEST, équipe, jalons et vision — section à compléter.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8DC63F] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8DC63F]/25 transition-colors hover:bg-[#6fa32e]"
            >
              Échanger avec l’équipe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
