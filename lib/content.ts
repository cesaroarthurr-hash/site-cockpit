// ============================================================
// CONTENT.TS — Tout le contenu du site en un seul endroit
// Règle d'écriture : une idée par bloc, 3 puces max,
// phrases de 12 à 20 mots. Pas de paragraphe au-delà de 2 phrases.
// ============================================================

export const siteConfig = {
  name: "Cockpit",
  brand: "SAHANEST",
  fullName: "Cockpit",
  tagline: "Le hub de coordination et de preuve de l'aide à domicile",
  description:
    "Cockpit capte vos appels, vos e-mails et ce qui se dit au domicile. Tout arrive dans la fiche du bénéficiaire et alimente votre suivi HAS. Sans ressaisie, sans changer d'outil. Certifié HDS, conforme RGPD.",
  url: "https://cockpit-care.com",
  ogImage: "/og-image.png",
  twitter: "@sahanest",
};

// ─── NAVIGATION (méga-menu) ──────────────────────────────────
export const nav = {
  cta: "Demander une démo",
  menus: [
    {
      label: "Le produit",
      columns: [
        {
          title: "Capter",
          links: [
            { label: "Connexion", href: "#connexion", desc: "Vos appels et vos e-mails" },
            { label: "CR vocal", href: "#cr-vocal", desc: "Un QR code au domicile" },
            { label: "Famille", href: "#famille", desc: "Les proches suivent chaque visite" },
            { label: "Analyse", href: "#analyse", desc: "L'essentiel par e-mail" },
          ],
        },
        {
          title: "Exploiter",
          links: [
            { label: "Fiche bénéficiaire", href: "#capacites", desc: "Tout l'historique en un lieu" },
            { label: "Réclamations", href: "#capacites", desc: "Captées et qualifiées" },
            { label: "Évaluations & PAP", href: "#capacites", desc: "Sans la paperasse" },
            { label: "Réconciliation HAS", href: "#has", desc: "La preuve au fil de l'eau" },
          ],
        },
      ],
    },
    {
      label: "La plateforme",
      columns: [
        {
          title: "Confiance",
          links: [
            { label: "Sécurité & conformité", href: "#confiance", desc: "HDS · RGPD · souverain" },
            { label: "Intégrations", href: "#integrations", desc: "Outlook, Aircall, Ximi…" },
            { label: "Déploiement", href: "#accompagnement", desc: "Actif en deux heures" },
          ],
        },
        {
          title: "Comprendre",
          links: [
            { label: "Comment ça marche", href: "#solution", desc: "Le parcours de l'information" },
            { label: "Avec ou sans Cockpit", href: "#comparatif", desc: "Ce qui change concrètement" },
            { label: "Options terrain", href: "#modules", desc: "Aller plus loin" },
          ],
        },
      ],
    },
    {
      label: "Ressources",
      columns: [
        {
          title: "Aller plus loin",
          links: [
            { label: "Notre histoire", href: "/notre-histoire", desc: "Qui sommes-nous" },
            { label: "FAQ", href: "/faq", desc: "Vos questions, nos réponses" },
            { label: "Contact", href: "/contact", desc: "Parler à l'équipe" },
            { label: "Mentions légales", href: "/mentions-legales", desc: "" },
            { label: "Confidentialité", href: "/confidentialite", desc: "" },
          ],
        },
      ],
    },
  ],
};

// ─── HERO ────────────────────────────────────────────────────
export const hero = {
  eyebrow: "COORDINATION ET PREUVE · AIDE À DOMICILE",
  headline: "Chaque échange tracé.",
  highlight: "Chaque preuve prête.",
  subheadline:
    "Cockpit capte vos appels, vos e-mails et ce qui se dit au domicile. Tout arrive dans la fiche du bénéficiaire. Sans ressaisie, sans changer d'outil.",
  cta: {
    primary: "Demander une démo",
    secondary: "Voir comment ça marche",
  },
  badges: [
    { label: "Certifié HDS", sub: "Données de santé" },
    { label: "Actif en 2 heures", sub: "Aucune migration" },
    { label: "Souverain", sub: "Hébergé en France" },
  ],
  media: {
    label: "Vidéo de présentation Cockpit",
    hint: "Emplacement vidéo — à intégrer",
  },
};

// ─── LOGOS / TRACTION ────────────────────────────────────────
export const trustedBy = {
  headline: "Ils utilisent déjà Cockpit",
  subheadline: "Des services d'aide à domicile qui tracent chaque échange.",
  logos: [
    { name: "Junior Senior", src: "/logos/junior-senior.png" },
    { name: "Senior Compagnie", src: "/logos/images.png" },
    { name: "Vitalliance", src: "/logos/1741727961626.jpeg" },
    { name: "ProSeniors", src: "/logos/Logo-Entreprise-ProSeniors-fond-clair.png" },
  ],
};

// ─── CONSTAT / PROBLÈME ──────────────────────────────────────
export const problem = {
  eyebrow: "LE CONSTAT",
  headline: "Votre logiciel métier gère les plannings.",
  headlineHighlight: "Il ne voit pas le reste.",
  subheadline:
    "Les appels, les mails, les retours du terrain : l'information qui compte circule hors de vos outils. Elle disparaît.",
  pains: [
    {
      icon: "phone",
      title: "Dix canaux, aucun dossier",
      description:
        "Un appel, un SMS, un mail, une remarque d'auxiliaire. Chacun atterrit ailleurs. Aucun ne rejoint la fiche.",
    },
    {
      icon: "notebook",
      title: "Le domicile reste muet",
      description:
        "L'auxiliaire voit tout. Entre deux interventions, elle n'a ni le temps ni l'outil pour l'écrire.",
    },
    {
      icon: "shield",
      title: "L'évaluation arrive trop vite",
      description:
        "Il faut reconstituer des mois d'accompagnement de mémoire. Les preuves existent. Nulle part.",
    },
  ],
};

// ─── SOLUTION / HUB ──────────────────────────────────────────
export const solution = {
  eyebrow: "LA SOLUTION",
  headline: "Tout ce qui se dit autour du bénéficiaire,",
  highlights: ["capté", "rangé"],
  headlineEnd: "au même endroit.",
  subheadline:
    "Cockpit récupère vos flux existants, y ajoute le compte rendu du domicile, et alimente votre suivi HAS.",
  hub: {
    title: "Cockpit",
    subtitle: "La fiche du bénéficiaire, alimentée par tout ce qui l'entoure.",
    aiBadge: "Alimente le suivi HAS",
    aiPoints: [
      "Parcours tracé de chaque bénéficiaire",
      "Transmissions entre professionnels",
      "Plans d'action et preuves classées",
    ],
  },
  actors: [
    {
      key: "terrain",
      role: "Le domicile",
      position: "CR vocal Cockpit",
      color: "#8DC63F",
      verbs: "Scanne · Raconte · C'est rangé",
      description: "L'intervenant scanne le QR code et raconte sa visite. Le compte rendu s'écrit tout seul.",
    },
    {
      key: "telephonie",
      role: "Appels & SMS",
      position: "Votre téléphonie",
      color: "#3B82F6",
      verbs: "Journal · Résumé · Rattachement",
      description: "Journal d'appels, résumé de chaque conversation et SMS rejoignent le bon bénéficiaire.",
    },
    {
      key: "messagerie",
      role: "E-mails",
      position: "Votre messagerie",
      color: "#8B5CF6",
      verbs: "Reçus · Envoyés · Pièces jointes",
      description: "Les e-mails et leurs pièces jointes rejoignent le dossier. Personne n'a rien à transférer.",
    },
    {
      key: "entourage",
      role: "Proches & partenaires",
      position: "Autour du bénéficiaire",
      color: "#F59E0B",
      verbs: "Signale · Réagit · Alimente",
      description: "Retours des familles et observations des soignants arrivent dans le même fil.",
    },
  ],
};

// ─── CAPTATION (cartes empilées) ─────────────────────────────
export const apps = {
  eyebrow: "D'OÙ VIENT L'INFORMATION",
  headline: "Quatre sources.",
  highlight: "Une seule fiche.",
  subheadline:
    "Cockpit capte ce qui circule déjà dans vos outils, et ce qui n'était écrit nulle part.",
  items: [
    {
      id: "connexion",
      key: "connexion",
      color: "#3B82F6",
      eyebrow: "MODULE CONNEXION",
      sidebarTitle: "Connexion",
      sidebarDesc: "Vos outils restent les mêmes.",
      title: "Vos outils restent les mêmes. Cockpit s'y branche.",
      description:
        "Connexion par API à votre messagerie et à votre téléphonie. L'information existante est récupérée, sans ressaisie.",
      steps: [
        { n: "01", title: "Messagerie connectée", desc: "Outlook, Gmail : e-mails reçus, envoyés et pièces jointes." },
        { n: "02", title: "Téléphonie connectée", desc: "Aircall, Ringover : journal d'appels, résumés et SMS." },
        { n: "03", title: "Rattachement automatique", desc: "Chaque échange rejoint le bon bénéficiaire." },
      ],
      stats: [
        { value: "API", label: "branchée sur vos outils" },
        { value: "0", label: "double saisie" },
        { value: "0", label: "migration forcée" },
      ],
      media: { label: "Module Connexion", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "cr-vocal",
      key: "vocal",
      color: "#8DC63F",
      eyebrow: "MODULE CR VOCAL",
      sidebarTitle: "CR vocal",
      sidebarDesc: "Un QR code, et la voix fait le reste.",
      title: "Vos équipes parlent. Le compte rendu s'écrit.",
      description:
        "Un QR code posé au domicile. Chaque intervenant scanne, raconte sa visite, et c'est terminé.",
      steps: [
        { n: "01", title: "Il scanne le QR code", desc: "Posé au domicile. Aucune application à installer." },
        { n: "02", title: "Il raconte sa visite", desc: "À voix haute, dans ses mots. Aucun formulaire." },
        { n: "03", title: "L'IA rédige et range", desc: "Le compte rendu arrive dans la fiche du bénéficiaire." },
      ],
      stats: [
        { value: "< 1 min", label: "par compte rendu" },
        { value: "Zéro app", label: "à installer" },
        { value: "Tous métiers", label: "auxiliaire, IDEL, kiné, médecin" },
      ],
      media: { label: "Module CR vocal", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "famille",
      key: "famille",
      color: "#8B5CF6",
      eyebrow: "MODULE FAMILLE",
      sidebarTitle: "Famille",
      sidebarDesc: "Les proches suivent chaque visite.",
      title: "Les proches suivent chaque visite.",
      description:
        "Après chaque intervention, la famille reçoit les nouvelles. Elle écoute un résumé audio et réagit directement.",
      steps: [
        { n: "01", title: "Des nouvelles en temps réel", desc: "Après chaque intervention, sans appeler le bureau." },
        { n: "02", title: "Un résumé audio", desc: "Les dernières visites racontées en quelques minutes." },
        { n: "03", title: "Une réponse dans le fil", desc: "Les proches réagissent. L'échange reste tracé." },
      ],
      stats: [
        { value: "Temps réel", label: "après chaque visite" },
        { value: "Audio", label: "résumé à écouter" },
        { value: "1 fil", label: "tracé, jamais dix canaux" },
      ],
      media: { label: "Module Famille", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "analyse",
      key: "analyse",
      color: "#F59E0B",
      eyebrow: "ANALYSE & SYNTHÈSE",
      sidebarTitle: "Analyse",
      sidebarDesc: "L'essentiel par e-mail.",
      title: "Vos managers reçoivent l'essentiel par e-mail.",
      description:
        "Cockpit analyse les échanges de la semaine et isole ce qui demande une attention. Aucune connexion nécessaire.",
      steps: [
        { n: "01", title: "Il analyse tout", desc: "Comptes rendus, appels, SMS et e-mails de la période." },
        { n: "02", title: "Il isole l'important", desc: "Seulement ce qui sort de l'ordinaire." },
        { n: "03", title: "Il l'envoie par e-mail", desc: "Lu depuis la boîte mail, sans se connecter." },
      ],
      stats: [
        { value: "E-mail", label: "aucune connexion" },
        { value: "Hebdo", label: "ou à votre rythme" },
        { value: "Ciblé", label: "l'essentiel, rien d'autre" },
      ],
      media: { label: "Bilan de la semaine", hint: "Vidéo / capture à intégrer" },
    },
  ],
};

// ─── EXPLOITATION (onglets) ──────────────────────────────────
export const featureTabs = {
  eyebrow: "CE QUE VOUS EN FAITES",
  headline: "L'information captée",
  highlight: "travaille pour vous.",
  subheadline:
    "Une fois rassemblés, les échanges alimentent votre dossier, vos réclamations et vos évaluations.",
  tabs: [
    {
      key: "fiche",
      icon: "doc",
      tab: "Fiche bénéficiaire",
      color: "#3B82F6",
      eyebrow: "FICHE BÉNÉFICIAIRE",
      title: "Tout l'historique d'un bénéficiaire, en un seul endroit.",
      description:
        "Comptes rendus, appels, SMS, e-mails et documents sur une même ligne de temps. Accessible à toute l'équipe.",
      bullets: [
        "Une ligne de temps par bénéficiaire",
        "GIR, plan d'aide, contacts des aidants",
        "Accès limité, consultation tracée",
      ],
      media: { label: "Fiche bénéficiaire", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "reclamations",
      icon: "bell",
      tab: "Réclamations",
      color: "#F59E0B",
      eyebrow: "RÉCLAMATIONS",
      title: "Transformez chaque réclamation en plan d'action.",
      description:
        "Un appel entrant. Un mail reçu. L'IA détecte la réclamation, la qualifie et propose un plan d'action.",
      bullets: [
        "Détectée dans les appels et les mails",
        "Qualifiée selon une grille de gravité",
        "Publiée après validation du responsable",
      ],
      media: { label: "Réclamations", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "evaluations",
      icon: "check",
      tab: "Évaluations & PAP",
      color: "#8B5CF6",
      eyebrow: "ÉVALUATIONS & PAP",
      title: "Les évaluations conformes à la HAS, sans la paperasse.",
      description:
        "Vos PAP et vos évaluations sont pré-rédigés depuis les échanges déjà captés. Vous relisez, vous validez.",
      bullets: [
        "Générés depuis vos notes et vos appels",
        "Aucune double saisie",
        "Chaque document enrichit la fiche",
      ],
      media: { label: "Évaluations & PAP", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "plans",
      icon: "grid",
      tab: "Plans d'action",
      color: "#8DC63F",
      eyebrow: "PLANS D'ACTION",
      title: "Du signal à la clôture, sans rien perdre.",
      description:
        "Cockpit propose, le responsable valide. Chaque action est attribuée, datée et suivie jusqu'au bout.",
      bullets: [
        "Cockpit propose, le responsable valide",
        "Chaque action attribuée et datée",
        "Suivie jusqu'à sa clôture",
      ],
      media: { label: "Plans d'action", hint: "Vidéo / capture à intégrer" },
    },
  ],
};

// ─── RÉCONCILIATION HAS ──────────────────────────────────────
export const compliance = {
  eyebrow: "RÉCONCILIATION HAS",
  headline: "Chaque échange est rattaché",
  highlight: "au référentiel HAS.",
  subheadline:
    "Au moment où il se produit, pas la veille de l'évaluation.",
  columns: { left: "Ce qui se passe", right: "Chapitre HAS concerné" },
  rows: [
    {
      source: "CR vocal",
      tone: "dark",
      event: "Vertiges signalés au lever",
      chapter: "1",
      criterion: "Accompagnement à la santé",
    },
    {
      source: "Appel",
      tone: "light",
      event: "La fille demande un point",
      chapter: "1",
      criterion: "Expression et participation de l'entourage",
    },
    {
      source: "SMS",
      tone: "light",
      event: "L'infirmier décale son passage",
      chapter: "2",
      criterion: "Continuité et fluidité du parcours",
    },
    {
      source: "Plan",
      tone: "light",
      event: "Plan d'action ouvert puis clos",
      chapter: "3",
      criterion: "Démarche qualité et gestion des risques",
    },
  ],
  footnote: "Le jour de l'évaluation, les preuves sont déjà classées.",
};

// ─── COMPARATIF ──────────────────────────────────────────────
export const comparison = {
  eyebrow: "AVEC OU SANS COCKPIT",
  headline: "Votre logiciel métier s'arrête",
  highlight: "où commence la coordination.",
  subheadline:
    "Il gère le planning, la facturation et la télégestion. Cockpit gère tout le reste. Les deux sont complémentaires.",
  columns: { with: "Avec Cockpit", without: "Sans Cockpit" },
  rows: [
    "Ce qui se dit au domicile est écrit et consultable",
    "Chaque appel et chaque mail rejoint la fiche du bénéficiaire",
    "Les réclamations sont captées, qualifiées et suivies",
    "Les évaluations et les PAP sont pré-rédigés, sans double saisie",
    "Les preuves HAS sont classées au fil de l'eau",
  ],
};

// ─── OPTIONS TERRAIN ─────────────────────────────────────────
export const modules = {
  eyebrow: "OPTIONS",
  headline: "Allez plus loin",
  highlight: "avec vos équipes.",
  subheadline: "Trois options pour outiller le terrain.",
  note: "Options co-construites avec nos structures pilotes",
  items: [
    {
      icon: "play",
      color: "#3B82F6",
      title: "Préparation d'intervention",
      desc: "Avant d'entrer, l'intervenant écoute un résumé audio : ce qui a été fait, ce qu'il reste à faire.",
      stat: "Audio",
      statLabel: "briefing avant la visite",
    },
    {
      icon: "check",
      color: "#8DC63F",
      title: "Plan d'action sur le terrain",
      desc: "Les intervenants valident eux-mêmes les tâches réalisées. Le suivi se met à jour tout seul.",
      stat: "Terrain",
      statLabel: "validation depuis le domicile",
    },
    {
      icon: "chat",
      color: "#8B5CF6",
      title: "Messagerie sécurisée",
      desc: "Un fil par bénéficiaire, tracé et conforme RGPD. Ouvert aux intervenants extérieurs du dossier.",
      stat: "1 fil",
      statLabel: "par bénéficiaire",
    },
  ],
};

// ─── DÉPLOIEMENT ─────────────────────────────────────────────
export const onboarding = {
  eyebrow: "DÉPLOIEMENT",
  headline: "Déployé en",
  highlight: "deux heures à peine.",
  subheadline:
    "Aucun changement d'outil pour vos équipes. Ni migration, ni double saisie, ni formation longue.",
  steps: [
    {
      n: "01",
      title: "Cadrage",
      desc: "Vous nous transmettez votre agence, vos équipes, vos bénéficiaires et vos outils.",
    },
    {
      n: "02",
      title: "Connexion",
      desc: "Nous branchons votre messagerie et votre téléphonie, puis déposons les QR codes.",
    },
    {
      n: "03",
      title: "Déploiement",
      desc: "Cockpit est actif. Vos équipes scannent, les premiers comptes rendus arrivent.",
    },
  ],
};

// ─── INTÉGRATIONS & CERTIFICATIONS ───────────────────────────
export const integrations = {
  eyebrow: "INTÉGRATIONS",
  headline: "Connecté à vos outils,",
  highlight: "pas à leur place.",
  subheadline:
    "Vos plannings, votre facturation et votre télégestion restent exactement là où ils sont.",
  logos: [
    { name: "Ximi", src: "/logos/ximi.png" },
    { name: "Arche", src: "/logos/arche.png" },
    { name: "Ogust", src: "/logos/ogust-quadri-fond-blanc-100-e1648058063964.png" },
    { name: "Apologic", src: "/logos/apologic.png" },
    { name: "Salesforce", src: "/logos/salesforce.png" },
    { name: "HubSpot", src: "/logos/hubspot.png" },
  ],
  channels: [
    { title: "Messagerie", items: ["Outlook", "Gmail", "et autres"] },
    { title: "Téléphonie", items: ["Aircall", "Ringover", "et autres"] },
  ],
  note: "Contactez-nous pour toute intégration spécifique.",
  certifications: [
    {
      name: "Certifié HDS",
      desc: "Hébergeur de Données de Santé, certifié par l'ANS.",
      icon: "shield",
    },
    {
      name: "Conforme RGPD",
      desc: "Accès limité par bénéficiaire, consultation tracée.",
      icon: "lock",
    },
    {
      name: "Souverain",
      desc: "Données stockées et traitées en France.",
      icon: "flag",
    },
  ],
};

// ─── FINAL CTA ───────────────────────────────────────────────
export const finalCta = {
  eyebrow: "PRÊT À TRACER CHAQUE ÉCHANGE ?",
  headline: "Voyez Cockpit en 30 minutes.",
  subheadline:
    "Démo personnalisée sur vos cas d'usage réels. Sans engagement.",
  formTitle: "Réserver ma démonstration",
  fields: {
    name: { label: "Votre nom", placeholder: "Marie Dupont" },
    structure: { label: "Nom de la structure", placeholder: "Aide à domicile 44" },
    email: { label: "Email professionnel", placeholder: "marie@structure.fr" },
    phone: { label: "Téléphone", placeholder: "06 12 34 56 78" },
  },
  submitLabel: "Réserver ma démonstration",
  successMessage: "Merci ! Nous vous recontactons sous 24h.",
  trustItems: [
    "30 minutes sur vos cas d'usage",
    "Sans engagement",
    "Actif en deux heures",
    "Aucun changement d'outil",
  ],
  contacts: [
    { name: "Arthur Cesaro", email: "arthur@sahanest.fr", phone: "06 21 09 47 20" },
    { name: "Jean de Guerre", email: "jean@sahanest.fr", phone: "06 15 43 96 88" },
  ],
};

// ─── FOOTER ──────────────────────────────────────────────────
export const footer = {
  tagline: "Chaque échange tracé. Chaque preuve prête.",
  description:
    "Le hub de coordination et de preuve des services d'aide à domicile.",
  columns: [
    {
      title: "Capter",
      links: [
        { label: "Connexion", href: "#connexion" },
        { label: "CR vocal", href: "#cr-vocal" },
        { label: "Famille", href: "#famille" },
        { label: "Analyse", href: "#analyse" },
      ],
    },
    {
      title: "Exploiter",
      links: [
        { label: "Fiche bénéficiaire", href: "#capacites" },
        { label: "Réclamations", href: "#capacites" },
        { label: "Réconciliation HAS", href: "#has" },
        { label: "Avec ou sans Cockpit", href: "#comparatif" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Notre histoire", href: "/notre-histoire" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Confidentialité", href: "/confidentialite" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Cockpit — SAHANEST. Tous droits réservés.`,
};
