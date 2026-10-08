"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Dois-je changer de logiciel de gestion pour utiliser Cockpit ?",
    answer:
      "Non, et c'est le principe même de Cockpit. Vos plannings, votre facturation et votre télégestion restent exactement là où ils sont. Cockpit se branche sur vos outils existants (Ximi, Ogust, Arche, Apologic...) via notre API et vient capter ce qu'ils ne voient pas : les appels, les mails, les SMS et ce qui se dit au domicile.",
  },
  {
    question: "Comment Cockpit récupère-t-il nos appels et nos e-mails ?",
    answer:
      "Par connexion API à votre messagerie (Outlook, Gmail) et à votre centrale téléphonique (Aircall, Ringover). Les e-mails reçus et envoyés, le journal d'appels, le résumé de chaque conversation et les SMS échangés sont rattachés automatiquement au bon bénéficiaire. Personne n'a à transférer ni à recopier quoi que ce soit.",
  },
  {
    question: "Mes auxiliaires sont peu à l'aise avec le numérique. Comment font-elles ?",
    answer:
      "Elles n'ont aucune application à installer ni compte à créer. Un QR code est déposé au domicile du bénéficiaire : l'intervenante le scanne avec son téléphone, raconte sa visite à voix haute dans ses propres mots, et c'est terminé. L'IA rédige le compte rendu et le range dans la fiche. Moins d'une minute, aucun formulaire à remplir.",
  },
  {
    question: "Les infirmiers, kinés et médecins peuvent-ils l'utiliser aussi ?",
    answer:
      "Oui, et c'est tout l'intérêt. Le QR code posé au domicile est accessible à tous les intervenants, quel que soit leur métier et leur employeur. Chacun peut laisser son compte rendu sans créer de compte. C'est ce qui permet de reconstituer un parcours complet plutôt que la seule partie aide à domicile.",
  },
  {
    question: "Combien de temps faut-il pour déployer Cockpit ?",
    answer:
      "Deux heures à peine. Vous nous transmettez une fiche de cadrage (agence, équipes, bénéficiaires suivis, outils utilisés), nous nous branchons sur votre boîte mail, vos messageries et votre téléphonie, puis nous déposons les QR codes. Vos équipes peuvent scanner immédiatement. Il n'y a ni migration de données, ni période de double saisie.",
  },
  {
    question: "En quoi Cockpit aide-t-il pour l'évaluation HAS ?",
    answer:
      "Chaque élément capté est rattaché, au moment où il se produit, au chapitre du référentiel HAS qu'il documente : un compte rendu signalant des vertiges alimente l'accompagnement à la santé, un appel d'un proche l'expression et la participation de l'entourage, un plan d'action ouvert puis clos la démarche qualité. Le jour de l'évaluation, les preuves sont déjà classées — vous ne les reconstituez pas, vous les consultez.",
  },
  {
    question: "Cockpit génère-t-il nos évaluations et nos plans d'accompagnement ?",
    answer:
      "Les évaluations conformes aux recommandations de la HAS et les plans d'accompagnement personnalisés (PAP) sont pré-rédigés à partir des échanges déjà captés, sans double saisie. Votre équipe relit et valide : rien n'est publié sans l'accord d'un responsable. Il en va de même pour les réclamations, qui sont détectées dans les appels et les mails puis qualifiées selon une grille de gravité.",
  },
  {
    question: "Que voient exactement les familles ?",
    answer:
      "Après chaque intervention, les proches reçoivent les nouvelles en temps réel et peuvent écouter un résumé audio des dernières visites. Ils réagissent directement dans le fil, qui reste tracé. Ils accèdent aussi à des ressources de leur territoire : lieux de vie, solutions et événements. Vous gardez la main sur ce qui leur est partagé.",
  },
  {
    question: "Cockpit est-il conforme aux exigences de sécurité des données de santé ?",
    answer:
      "Oui. Cockpit est hébergé sur une infrastructure certifiée HDS (Hébergeur de Données de Santé), conforme au RGPD, avec des données hébergées exclusivement en France. L'accès est limité par bénéficiaire et la consultation est tracée. Cockpit est également en cours de référencement Ségur du Numérique en Santé.",
  },
  {
    question: "Quel est le modèle tarifaire de Cockpit ?",
    answer:
      "Cockpit fonctionne sur abonnement mensuel, sans engagement longue durée. Le tarif dépend du périmètre déployé et du nombre d'utilisateurs actifs. Contactez-nous pour un devis adapté à votre structure.",
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
