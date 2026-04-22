"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Dois-je changer de logiciel de gestion pour utiliser Cockpit ?",
    answer:
      "Non. Cockpit ne remplace pas votre logiciel de planning ou de facturation. Il vient en complément : vos auxiliaires transmettent leurs comptes rendus via l'application mobile, et vos managers ont une vue temps réel sur l'activité. Cockpit se connecte à vos outils existants (Ximi, Ogust, Arche, Apologic...) via notre API.",
  },
  {
    question: "Puis-je garder mon logiciel de gestion et utiliser Cockpit uniquement pour les comptes rendus ?",
    answer:
      "Oui, c'est même le cas d'usage principal. Cockpit se positionne comme le cahier de liaison digital de votre structure : vos auxiliaires l'utilisent pour leurs transmissions quotidiennes, et vous conservez votre outil de planification habituel. Les deux cohabitent parfaitement.",
  },
  {
    question: "Combien de temps faut-il pour déployer Cockpit dans ma structure ?",
    answer:
      "Le déploiement se fait en moins d'une semaine. Nous accompagnons votre équipe lors d'une session de formation d'une demi-journée, nous paramétrons les accès, et vos auxiliaires sont opérationnels dès le lendemain. Aucune compétence technique requise.",
  },
  {
    question: "Mes auxiliaires sont peu à l'aise avec le numérique. Cockpit est-il adapté ?",
    answer:
      "C'est notre priorité. L'application auxiliaire est conçue pour être utilisée en moins de 60 secondes par intervention : l'auxiliaire dicte son compte rendu à l'oral, et Cockpit s'occupe du reste. Pas de formulaires complexes, pas de saisie longue. Nous avons conçu l'outil en collaboration avec des auxiliaires de terrain.",
  },
  {
    question: "Cockpit est-il conforme aux exigences de sécurité des données de santé ?",
    answer:
      "Oui. Cockpit est hébergé sur une infrastructure certifiée HDS (Hébergeur de Données de Santé), conforme au RGPD, avec des données hébergées exclusivement en France. Cockpit est également en cours de référencement Ségur du Numérique en Santé.",
  },
  {
    question: "Quel est le modèle tarifaire de Cockpit ?",
    answer:
      "Cockpit fonctionne sur abonnement mensuel, sans engagement longue durée. Le tarif est calculé en fonction du nombre d'utilisateurs actifs (auxiliaires + managers). Nous proposons une période d'essai gratuite de 30 jours pour tester la solution sans risque. Contactez-nous pour un devis personnalisé.",
  },
];

function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
      >
        <span className="text-sm font-medium text-gray-800 leading-snug">{faq.question}</span>
        <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${open ? "border-[#8DC63F] bg-[#8DC63F]" : "border-gray-200 bg-white"}`}>
          <svg className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-45 text-white" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au site
          </Link>
          <div className="mt-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-4">
              FAQ
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
            <p className="text-gray-500 text-lg">Tout ce que vous devez savoir avant de démarrer avec Cockpit.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-gray-100 text-center">
          <p className="text-gray-600 font-medium mb-2">Vous ne trouvez pas votre réponse ?</p>
          <p className="text-sm text-gray-400 mb-6">Notre équipe répond sous 24h.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#8DC63F] text-white hover:bg-[#6fa32e] transition-colors shadow-lg shadow-[#8DC63F]/25"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </main>
  );
}
