// ============================================================
// CONTENT.TS — Tout le contenu du site en un seul endroit
// ============================================================

export const siteConfig = {
  name: "Cockpit",
  brand: "SAHANEST",
  fullName: "Cockpit",
  tagline: "Le cockpit de pilotage pensé pour l'aide à domicile",
  description:
    "Cockpit centralise le pilotage de votre activité SAP : comptes rendus, suivi bénéficiaires, bien-être des équipes, gestion du planning et reporting — en temps réel, sans papier.",
  url: "https://cockpit.sahanest.fr",
  ogImage: "/og-image.png",
  twitter: "@sahanest",
};

export const nav = {
  links: [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Interfaces", href: "#interfaces" },
    { label: "Bénéfices", href: "#benefits" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Demander une démo",
};

// ─── HERO ────────────────────────────────────────────────────
export const hero = {
  badge: "Le cahier de liaison digital de l'aide à domicile",
  headline: "Finis les cahiers papier.",
  highlight: "Place au pilotage digital.",
  subheadline:
    "Cockpit remplace votre cahier de liaison papier : vos auxiliaires transmettent chaque compte rendu en 60 secondes à l'oral, et vos managers ont enfin une visibilité complète sur l'activité de leurs équipes — en temps réel.",
  cta: {
    primary: "Demander une démo",
    secondary: "Découvrir les fonctionnalités",
  },
  stats: [
    { value: "16h", label: "économisées par auxiliaire chaque mois sur les comptes rendus" },
    { value: "50h", label: "rendues au manager chaque mois grâce à la visibilité temps réel" },
    { value: "−40%", label: "de turn-over observé dans les structures pilotes" },
  ],
};

// ─── PROBLEM / SOLUTION ──────────────────────────────────────
export const problem = {
  headline: "Diriger une structure SAD sans les bons outils,",
  headlineHighlight: "c'est naviguer à vue.",
  subheadline:
    "Les responsables de structures d'aide à domicile perdent chaque jour un temps précieux sur des tâches que le numérique peut résoudre.",
  pains: [
    {
      icon: "📋",
      title: "Comptes rendus papier ou WhatsApp",
      description:
        "Informations perdues, illisibles ou non transmises. Aucune traçabilité, aucune conformité réelle. Et des auxiliaires qui passent plus de temps à écrire qu'à soigner.",
    },
    {
      icon: "🕐",
      title: "Pilotage à l'aveugle",
      description:
        "Impossible de savoir en temps réel si une intervention s'est bien passée, si un bénéficiaire va bien, ou si une auxiliaire a besoin d'aide. Le manager subit au lieu de piloter.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Familles tenues à l'écart",
      description:
        "Les proches des bénéficiaires n'ont aucune visibilité sur les interventions. L'anxiété s'installe, les appels se multiplient, la confiance s'érode.",
    },
  ],
  solution: {
    headline: "Un cahier de liaison digital pour toute votre structure.",
    description:
      "Cockpit centralise la transmission d'information entre vos auxiliaires, vos managers et les familles. Chaque compte rendu est transmis en temps réel, chaque intervention tracée, chaque alerte remontée — sans papier, sans friction.",
  },
};

// ─── FEATURES ────────────────────────────────────────────────
export const features = [
  {
    icon: "🎙️",
    title: "Compte rendu vocal IA",
    description:
      "Une auxiliaire fait en moyenne 6 à 8 interventions par jour. Avec un compte rendu papier ou WhatsApp (5 à 10 min chacun), c'est 22h par mois perdues en administration. Avec Cockpit : 60 secondes à l'oral, l'IA fait le reste. Gain réel : 16h récupérées chaque mois.",
    tag: "IA & Voix",
    color: "from-[#8DC63F]/8 to-emerald-50",
    details: [
      "60 sec par intervention au lieu de 5 à 10 min",
      "16h/mois économisées par auxiliaire",
      "Détection automatique d'alertes (chute, malaise, changement d'état)",
    ],
  },
  {
    icon: "📊",
    title: "Tableau de bord manager",
    description:
      "Un manager consacre 2 à 3h par jour à des appels de coordination : vérification d'arrivées, gestion d'incidents, mises à jour de planning. Cockpit centralise tout en temps réel. Résultat : 30 à 50h récupérées chaque mois, libérées pour la qualité de service.",
    tag: "Pilotage",
    color: "from-blue-50 to-indigo-50",
    details: [
      "30 à 50h libérées par mois par manager",
      "Interventions, statuts et alertes en temps réel",
      "Indicateurs bien-être équipes et bénéficiaires",
    ],
  },
  {
    icon: "🗓️",
    title: "Gestion intelligente du planning",
    description:
      "Créez, modifiez et optimisez les plannings de vos auxiliaires en quelques clics. Gérez les remplacements de dernière minute sans stress et évitez les interventions non couvertes.",
    tag: "Planning",
    color: "from-amber-50 to-orange-50",
    details: [
      "Remplacement automatique suggéré en cas d'absence",
      "Optimisation des tournées pour réduire les déplacements",
      "Respect des contraintes légales et des préférences",
    ],
  },
  {
    icon: "❤️",
    title: "Suivi du bien-être des équipes",
    description:
      "Cockpit mesure la charge de travail, les signaux d'alerte et le ressenti de chaque auxiliaire. Identifiez l'épuisement avant qu'il mène à une démission.",
    tag: "Fidélisation",
    color: "from-rose-50 to-pink-50",
    details: [
      "Score de bien-être par auxiliaire",
      "Détection de surcharge ou d'isolement",
      "Outils de reconnaissance et de communication interne",
    ],
  },
  {
    icon: "👤",
    title: "Dossier bénéficiaire complet",
    description:
      "Chaque bénéficiaire dispose d'un dossier centralisé : historique des interventions, notes médicales partagées, préférences, alertes et courbe de bien-être dans le temps.",
    tag: "Bénéficiaires",
    color: "from-violet-50 to-purple-50",
    details: [
      "Historique complet des interventions",
      "Indicateurs de bien-être et d'évolution",
      "Notes partagées entre intervenants",
    ],
  },
  {
    icon: "🔔",
    title: "Notifications & alertes temps réel",
    description:
      "Ne manquez plus aucun événement critique. Absence non signalée, retard, alerte transmise par une auxiliaire : vous êtes notifié immédiatement sur tous vos appareils.",
    tag: "Alertes",
    color: "from-sky-50 to-cyan-50",
    details: [
      "Alertes push sur mobile et desktop",
      "Escalade automatique si non prise en charge",
      "Journal d'audit complet",
    ],
  },
];

// ─── INTERFACES / PROFILS UTILISATEURS ───────────────────────
export const interfaces = {
  headline: "Un outil, quatre espaces dédiés.",
  subheadline:
    "Du terrain au bureau, chaque acteur dispose des informations dont il a besoin — sans surcharge, sans doublon.",
  profiles: [
    {
      role: "Manager / Directeur",
      icon: "🏢",
      color: "#8DC63F",
      lightColor: "#8DC63F15",
      // Ajoutez ici l'URL de votre vidéo YouTube ou Vimeo (ex: "https://www.youtube.com/embed/XXXXX")
      videoUrl: "",
      headline: "Le cockpit de pilotage complet",
      description:
        "Visibility totale sur l'activité, les équipes et les bénéficiaires. Gérez le planning, traitez les alertes et prenez des décisions éclairées grâce à des indicateurs consolidés en temps réel.",
      capabilities: [
        "Tableau de bord temps réel",
        "Gestion complète du planning",
        "Rapports et indicateurs RH",
        "Suivi bien-être bénéficiaires & équipes",
        "Gestion des alertes et incidents",
        "Export pour organismes de tutelle",
      ],
    },
    {
      role: "Auxiliaire de vie",
      icon: "👩‍⚕️",
      color: "#3B82F6",
      lightColor: "#3B82F615",
      videoUrl: "",
      headline: "Simple, rapide, pensé pour le terrain",
      description:
        "L'application mobile que les auxiliaires adorent parce qu'elle leur fait gagner du temps. Planning clair, compte rendu vocal en 60 secondes, communication directe avec le manager.",
      capabilities: [
        "Planning du jour sur mobile",
        "Compte rendu vocal en 60 secondes",
        "Fiche bénéficiaire accessible hors-ligne",
        "Messagerie avec le manager",
        "Pointage des interventions",
        "Accès aux documents RH",
      ],
    },
    {
      role: "Famille du bénéficiaire",
      icon: "👨‍👩‍👧",
      color: "#F59E0B",
      lightColor: "#F59E0B15",
      videoUrl: "",
      headline: "La tranquillité d'esprit pour les proches",
      description:
        "Les familles accèdent à un espace dédié pour suivre les interventions, lire les comptes rendus et échanger avec la structure. Transparence totale, zéro appel téléphonique.",
      capabilities: [
        "Suivi des interventions en temps réel",
        "Lecture des comptes rendus d'intervention",
        "Historique et calendrier des passages",
        "Messagerie avec la structure",
        "Indicateurs de bien-être du proche",
        "Notifications importantes automatiques",
      ],
      badge: "Disponible",
    },
    {
      role: "Médecins & Infirmiers",
      icon: "🩺",
      color: "#8B5CF6",
      lightColor: "#8B5CF615",
      videoUrl: "",
      headline: "La coordination médicale, enfin fluide",
      description:
        "Partagez les informations médicales pertinentes directement dans Cockpit. La continuité des soins entre le domicile, les auxiliaires et les professionnels de santé devient enfin possible.",
      capabilities: [
        "Accès sécurisé aux dossiers bénéficiaires",
        "Messagerie sécurisée multi-intervenants",
        "Partage d'ordonnances et de notes cliniques",
        "Historique des observations terrain",
        "Alertes médicales prioritaires",
        "Conformité RGPD et secret médical",
      ],
      badge: "Bientôt disponible",
    },
  ],
};

// ─── BÉNÉFICES BUSINESS ──────────────────────────────────────
export const benefits = {
  headline: "Ce que Cockpit change concrètement.",
  subheadline:
    "Au-delà des fonctionnalités, Cockpit agit sur les indicateurs qui comptent pour votre structure.",
  items: [
    {
      icon: "📉",
      metric: "−40%",
      metricLabel: "de turn-over",
      title: "Fidélisez vos équipes",
      description:
        "En améliorant les conditions de travail, la communication et la reconnaissance des auxiliaires, Cockpit réduit significativement le taux de démission — le problème numéro 1 du secteur.",
      color: "#8DC63F",
    },
    {
      icon: "⏱️",
      metric: "50h",
      metricLabel: "rendues au manager chaque mois",
      title: "Pilotez sans perdre de temps",
      description:
        "Un manager SAP passe en moyenne 90 à 150h par mois en coordination téléphonique, saisie manuelle et reporting. Cockpit automatise ce qui peut l'être : 30 à 50h libérées chaque mois pour se concentrer sur la qualité.",
      color: "#3B82F6",
    },
    {
      icon: "🏥",
      metric: "+60%",
      metricLabel: "de satisfaction familles",
      title: "Améliorez la qualité de soin",
      description:
        "La traçabilité des interventions, la détection précoce des changements d'état et la coordination médicale permettent d'élever significativement la qualité de prise en charge.",
      color: "#F59E0B",
    },
    {
      icon: "🛡️",
      metric: "100%",
      metricLabel: "conforme RGPD",
      title: "Sécurité & conformité",
      description:
        "Hébergement certifié HDS, données stockées en France, chiffrement de bout en bout. Cockpit respecte les exigences légales les plus strictes pour la protection des données de santé.",
      color: "#8B5CF6",
    },
  ],
};

// ─── PLANNING ────────────────────────────────────────────────
export const planning = {
  headline: "La gestion du planning, sans la douleur.",
  subheadline:
    "Le planning est la colonne vertébrale d'une structure SAP. Cockpit le rend enfin maîtrisable.",
  features: [
    {
      icon: "🔄",
      title: "Remplacement intelligent",
      description:
        "En cas d'absence, Cockpit identifie automatiquement les auxiliaires disponibles ayant les compétences requises et la proximité géographique pour assurer le remplacement.",
    },
    {
      icon: "🗺️",
      title: "Optimisation des tournées",
      description:
        "Réduisez les temps de trajet inutiles en optimisant les tournées. Moins de fatigue pour les auxiliaires, moins de coûts pour la structure.",
    },
    {
      icon: "⚖️",
      title: "Équité et bien-être",
      description:
        "Cockpit veille à la répartition équilibrée de la charge de travail et des contraintes (week-ends, horaires difficiles) pour préserver le bien-être des équipes.",
    },
    {
      icon: "📱",
      title: "Planning mobile en temps réel",
      description:
        "Les auxiliaires voient leur planning mis à jour en temps réel sur leur mobile. Les modifications, annulations et remplacements sont communiqués instantanément.",
    },
  ],
};

// ─── CERTIFICATIONS ──────────────────────────────────────────
export const certifications = {
  headline: "Sécurité et conformité au niveau médical",
  subheadline:
    "Cockpit est conçu dès le départ pour répondre aux exigences les plus strictes du secteur de la santé.",
  items: [
    {
      name: "HDS",
      fullName: "Hébergeur de Données de Santé",
      status: "certified" as const,
      statusLabel: "Certifié",
      description:
        "Cockpit est hébergé sur une infrastructure certifiée HDS (Hébergeur de Données de Santé) délivrée par l'ANS. Vos données et celles de vos bénéficiaires sont stockées et traitées en conformité avec les exigences légales françaises pour les données de santé.",
      icon: "🛡️",
      color: "#8DC63F",
    },
    {
      name: "Ségur",
      fullName: "Ségur du Numérique en Santé",
      status: "soon" as const,
      statusLabel: "En cours",
      description:
        "Cockpit est en cours de référencement Ségur du Numérique en Santé, le programme national piloté par le Ministère de la Santé pour accélérer le partage de données entre les acteurs du soin. Une fois référencé, vos équipes bénéficieront des financements associés.",
      icon: "🏥",
      color: "#3B82F6",
    },
    {
      name: "Pro Santé Connect",
      fullName: "Pro Santé Connect",
      status: "soon" as const,
      statusLabel: "Bientôt",
      description:
        "L'intégration Pro Santé Connect permettra aux professionnels de santé (médecins, infirmiers) de s'authentifier sur Cockpit avec leur carte CPS ou leur compte e-CPS, garantissant une identification sécurisée et conforme aux normes de l'ANS.",
      icon: "🔐",
      color: "#8B5CF6",
    },
  ],
};

// ─── TRUSTED BY ──────────────────────────────────────────────
export const trustedBy = {
  headline: "Ils font confiance à Cockpit.",
  subheadline: "",
  logos: [
    { name: "Le Temps de Vivre", src: "/logos/le-temps-de-vivre.png" },
    { name: "Présence", src: "/logos/presence.png" },
    { name: "ADHAP Direct", src: "/logos/adhap.png" },
    { name: "Junior Senior", src: "/logos/junior-senior.png" },
    { name: "Ensemble Autrement", src: "/logos/ensemble-autrement.png" },
    { name: "Générale des Services", src: "/logos/generale-des-services.png" },
  ],
  note: "",
};

// ─── SCREENSHOTS ─────────────────────────────────────────────
export const screenshots = {
  headline: "Une interface pensée pour le terrain.",
  subheadline:
    "Simple pour les auxiliaires de vie, puissante pour les managers, rassurante pour les familles.",
  items: [
    {
      title: "Tableau de bord manager",
      description:
        "Vue complète des interventions du jour, alertes et indicateurs clés en un seul écran.",
      src: "/screenshots/dashboard.png",
      placeholder: true,
    },
    {
      title: "Fiche bénéficiaire",
      description:
        "Tout l'historique, les préférences et les indicateurs de bien-être d'un bénéficiaire.",
      src: "/screenshots/beneficiary.png",
      placeholder: true,
    },
    {
      title: "Compte rendu vocal",
      description:
        "L'auxiliaire dicte son compte rendu en 60 secondes. L'IA fait le reste.",
      src: "/screenshots/voice.png",
      placeholder: true,
    },
    {
      title: "Espace famille",
      description:
        "Les proches suivent les interventions et communiquent avec la structure.",
      src: "/screenshots/family.png",
      placeholder: true,
    },
  ],
};

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonials = {
  headline: "Ce qu'ils en disent.",
  subheadline:
    "Des responsables de structures qui ont transformé leur quotidien avec Cockpit.",
  items: [
    {
      quote: "Cockpit nous a fait gagner un temps considérable sur les comptes rendus. Nos auxiliaires l'ont adopté en quelques jours — et certaines nous ont dit qu'elles se sentaient enfin écoutées.",
      author: "Marie L.",
      role: "Directrice",
      structure: "SAAD Loire-Atlantique",
    },
    {
      quote: "Finies les fiches papier perdues dans les classeurs. Tout est centralisé, consultable en deux clics. Nos équipes soignantes gagnent un temps précieux au quotidien.",
      author: "Bernard T.",
      role: "Directeur adjoint",
      structure: "EHPAD Les Pins d'Or — Alsace",
    },
    {
      quote: "Nos familles adorent l'espace dédié. Elles voient en temps réel que leur proche a bien été pris en charge. Les appels anxieux ont quasiment disparu.",
      author: "Sophie M.",
      role: "Coordinatrice",
      structure: "Résidence Les Magnolias — PACA",
    },
    {
      quote: "La transmission d'information entre l'équipe de nuit et l'équipe de jour n'a jamais été aussi fluide. Cockpit a vraiment changé notre façon de travailler.",
      author: "Isabelle R.",
      role: "Responsable de site",
      structure: "Maison de retraite Saint-Joseph — Bretagne",
    },
    {
      quote: "En tant que lieu de vie, nous avons des besoins très spécifiques. Cockpit s'est adapté à notre fonctionnement et nos équipes ont été formées en moins d'une journée.",
      author: "François D.",
      role: "Gestionnaire",
      structure: "Lieu de vie L'Escale — Normandie",
    },
    {
      quote: "Le compte rendu vocal IA est une révolution pour nos aides-soignantes. Elles terminent leur journée sans paperasse. Le moral des équipes a clairement progressé.",
      author: "Nathalie P.",
      role: "Directrice",
      structure: "SAAD Solidarité Domicile — Occitanie",
    },
    {
      quote: "Nous avions du mal à suivre l'état de bien-être de nos résidents sur le long terme. Avec Cockpit, on a enfin un historique clair et des alertes si quelque chose change.",
      author: "Jean-Marc V.",
      role: "Médecin coordinateur",
      structure: "EHPAD La Colline Verte — Auvergne",
    },
    {
      quote: "La visibilité en temps réel sur les interventions m'a permis de réduire mes appels de vérification de plus de moitié. Je peux me concentrer sur ce qui compte vraiment.",
      author: "Amandine C.",
      role: "Responsable coordination",
      structure: "Association Aide & Présence — Pays de Loire",
    },
    {
      quote: "On travaille avec des personnes vulnérables. La traçabilité que Cockpit nous apporte, c'est aussi une sécurité juridique. Chaque intervention est documentée, horodatée.",
      author: "Karim B.",
      role: "Directeur",
      structure: "SAAD Proximité Services — Île-de-France",
    },
    {
      quote: "Nos auxiliaires de vie venaient souvent nous voir épuisées. Depuis Cockpit, elles se sentent mieux organisées, moins stressées. Le turn-over a nettement baissé.",
      author: "Céline M.",
      role: "DRH",
      structure: "Groupe Domicile & Vie — Hauts-de-France",
    },
    {
      quote: "La mise en place a été très rapide. En une semaine, toute notre équipe utilisait Cockpit. L'interface est vraiment intuitive, même pour les profils peu à l'aise avec le numérique.",
      author: "Patricia N.",
      role: "Directrice",
      structure: "Maison de retraite Le Clos Fleuri — Bourgogne",
    },
    {
      quote: "Ce que j'apprécie particulièrement, c'est la remontée automatique des alertes. Plus besoin d'attendre le compte rendu du soir pour savoir si un résident a eu une chute.",
      author: "David L.",
      role: "Infirmier coordinateur",
      structure: "SSIAD Grand Est",
    },
    {
      quote: "Cockpit a transformé la relation avec les familles. Elles ont accès aux comptes rendus, elles voient le travail de nos équipes. La confiance s'est renforcée naturellement.",
      author: "Sylvie H.",
      role: "Responsable qualité",
      structure: "Résidence Senior L'Harmonie — Nouvelle-Aquitaine",
    },
    {
      quote: "On gérait tout sur Excel et WhatsApp. Passer à Cockpit, ça a été un choc positif. On a l'impression de travailler enfin dans une vraie structure professionnelle.",
      author: "Olivier G.",
      role: "Co-fondateur",
      structure: "Lieu de vie Les Roseaux — Centre-Val de Loire",
    },
    {
      quote: "Le rapport mensuel qu'on devait faire à la main en 3h, Cockpit le génère automatiquement. On peut se concentrer sur l'accompagnement plutôt que sur l'administratif.",
      author: "Fatima A.",
      role: "Directrice",
      structure: "SAAD Avenir Domicile — Midi-Pyrénées",
    },
  ],
};

// ─── FINAL CTA ────────────────────────────────────────────────
export const finalCta = {
  headline: "Demandez une démo.",
  subheadline:
    "Découvrez Cockpit en 30 minutes avec notre équipe. Démo personnalisée, sans engagement, sur votre cas d'usage réel.",
  formTitle: "Réserver ma démo",
  fields: {
    name: { label: "Votre nom", placeholder: "Marie Dupont" },
    structure: {
      label: "Nom de la structure",
      placeholder: "Association Aide à domicile 44",
    },
    email: { label: "Email professionnel", placeholder: "marie@structure.fr" },
    phone: { label: "Téléphone", placeholder: "06 12 34 56 78" },
  },
  submitLabel: "Réserver ma démo gratuite",
  successMessage:
    "Merci ! Notre équipe vous recontacte sous 24h pour organiser votre démo.",
  trustItems: [
    "Démo 30 min sur votre cas d'usage",
    "Sans engagement, sans carte bancaire",
    "Déploiement en moins d'une semaine",
    "Formation incluse pour vos équipes",
    "Support réactif en français",
  ],
};

// ─── FOOTER ───────────────────────────────────────────────────
export const footer = {
  tagline: "La gestion de l'aide à domicile, réinventée.",
  links: [
    { label: "FAQ", href: "/faq" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Contact", href: "/contact" },
  ],
  copyright: `© ${new Date().getFullYear()} Cockpit. Tous droits réservés.`,
};
