// ============================================================
// CONTENT.TS — Tout le contenu du site en un seul endroit
// Aligné sur la présentation Cockpit — hub de coordination et de preuve
// ============================================================

export const siteConfig = {
  name: "Cockpit",
  brand: "SAHANEST",
  fullName: "Cockpit",
  tagline: "Le hub de coordination et de preuve de l'aide à domicile",
  description:
    "Cockpit se branche sur vos e-mails, votre téléphonie et vos logiciels métier, puis capte ce qui se dit au domicile. Chaque échange est tracé, rattaché au référentiel HAS et prêt le jour de l'évaluation. Certifié HDS, conforme RGPD, souverain.",
  url: "https://cockpit-care.com",
  ogImage: "/og-image.png",
  twitter: "@sahanest",
};

// ─── NAVIGATION (méga-menu) ──────────────────────────────────
export const nav = {
  cta: "Demander une démo",
  menus: [
    {
      label: "Les modules",
      columns: [
        {
          title: "Capter l'information",
          links: [
            { label: "Connexion", href: "#connexion", desc: "E-mails, appels et SMS récupérés" },
            { label: "CR vocal", href: "#cr-vocal", desc: "Un QR code au domicile, la voix fait le reste" },
            { label: "Famille", href: "#famille", desc: "Les proches suivent chaque visite" },
            { label: "Analyse & synthèse", href: "#analyse", desc: "L'essentiel par e-mail chaque semaine" },
          ],
        },
        {
          title: "Exploiter l'information",
          links: [
            { label: "Fiche bénéficiaire", href: "#capacites", desc: "Tout l'historique en un seul endroit" },
            { label: "Réclamations qualifiées", href: "#capacites", desc: "Détectées et classées automatiquement" },
            { label: "Évaluations & PAP", href: "#modules", desc: "Pré-rédigés, sans double saisie" },
            { label: "Plans d'action", href: "#capacites", desc: "Du signal à la clôture" },
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
            { label: "Réconciliation HAS", href: "#has", desc: "Chaque échange rattaché au référentiel" },
            { label: "Sécurité & conformité", href: "#confiance", desc: "HDS · RGPD · souverain" },
            { label: "Intégrations", href: "#integrations", desc: "Gmail, Outlook, Aircall, Ximi…" },
          ],
        },
        {
          title: "Découvrir",
          links: [
            { label: "Comment ça marche", href: "#solution", desc: "Le parcours de l'information" },
            { label: "Déploiement", href: "#accompagnement", desc: "Opérationnel en deux heures" },
            { label: "Les modules", href: "#modules", desc: "Tout ce que couvre Cockpit" },
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
            { label: "Notre histoire", href: "/notre-histoire", desc: "Qui sommes-nous, notre mission" },
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
  eyebrow: "HUB DE COORDINATION ET DE PREUVE · AIDE À DOMICILE",
  headline: "Chaque échange tracé.",
  highlight: "Chaque preuve prête.",
  subheadline:
    "Cockpit se branche sur vos e-mails, votre téléphonie et vos logiciels métier — puis capte ce qui se dit au domicile. Tout converge dans la fiche du bénéficiaire et alimente votre suivi HAS, sans ressaisie et sans changer d'outil.",
  cta: {
    primary: "Demander une démo",
    secondary: "Voir comment ça marche",
  },
  badges: [
    { label: "Certifié HDS", sub: "Hébergeur de Données de Santé" },
    { label: "Conforme RGPD", sub: "Données protégées & tracées" },
    { label: "Solution souveraine", sub: "Données stockées en France" },
  ],
  // emplacement vidéo / visuel principal — à remplir plus tard
  media: {
    label: "Vidéo de présentation Cockpit",
    hint: "Emplacement vidéo — à intégrer",
  },
};

// ─── LOGOS / TRACTION ────────────────────────────────────────
export const trustedBy = {
  headline: "Ils utilisent déjà Cockpit",
  subheadline:
    "Des services d'aide à domicile qui tracent chaque échange et préparent leurs preuves au fil de l'eau.",
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
    "Les appels, les mails, les SMS, les retours de terrain : l'information qui compte vraiment circule en dehors de vos outils. Elle se perd — et avec elle la preuve de ce que vous faites réellement.",
  pains: [
    {
      icon: "phone",
      title: "L'information arrive par dix canaux",
      description:
        "Un appel de la fille, un SMS de l'infirmier, un mail du conseil départemental, une remarque d'auxiliaire. Chacun atterrit ailleurs, aucun ne rejoint le dossier du bénéficiaire.",
    },
    {
      icon: "notebook",
      title: "Ce qui se passe au domicile n'est jamais écrit",
      description:
        "L'auxiliaire voit tout : l'état général, le refus de médicament, la fatigue inhabituelle. Entre deux interventions, elle n'a ni le temps ni l'outil pour le consigner.",
    },
    {
      icon: "shield",
      title: "L'évaluation se prépare dans l'urgence",
      description:
        "Le jour venu, il faut reconstituer des mois d'accompagnement à partir de souvenirs et de boîtes mail. Les preuves existent — elles ne sont nulle part.",
    },
  ],
  consequencesLabel: "Ce que ça coûte au quotidien",
  consequences: [
    {
      title: "La même information redemandée plusieurs fois",
      desc: "Faute de trace accessible, chacun rappelle, revérifie et répète ce qui a déjà été dit.",
    },
    {
      title: "Des signaux faibles qui n'arrivent jamais",
      desc: "Ce qui aurait mérité une attention reste dans un échange isolé, sans jamais remonter au responsable de secteur.",
    },
    {
      title: "Une qualité réelle, mais indémontrable",
      desc: "Vous accompagnez bien. Vous ne pouvez simplement pas le prouver, faute de traçabilité continue.",
    },
  ],
};

// ─── SOLUTION / HUB ──────────────────────────────────────────
export const solution = {
  eyebrow: "LA SOLUTION",
  headline: "Centralisez toutes les interactions",
  highlights: ["sans ressaisie", "sans changer d'outil"],
  headlineEnd: "autour du bénéficiaire.",
  subheadline:
    "Cockpit récupère vos flux existants, y ajoute le compte rendu vocal du domicile, et alimente automatiquement votre suivi HAS. Vos équipes ne changent rien à leurs habitudes.",
  hub: {
    title: "Cockpit",
    subtitle: "La fiche du bénéficiaire, alimentée par tout ce qui se dit autour de lui.",
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
      description:
        "L'intervenant scanne le QR code posé chez le bénéficiaire et raconte sa visite à voix haute. Le compte rendu s'écrit et se classe tout seul.",
    },
    {
      key: "telephonie",
      role: "Appels & SMS",
      position: "Via votre téléphonie",
      color: "#3B82F6",
      verbs: "Journal · Résumé · Rattachement",
      description:
        "Journal d'appels, résumé de chaque conversation et SMS échangés sont récupérés puis rattachés au bon bénéficiaire.",
    },
    {
      key: "messagerie",
      role: "E-mails",
      position: "Via votre messagerie",
      color: "#8B5CF6",
      verbs: "Reçus · Envoyés · Pièces jointes",
      description:
        "Les e-mails entrants et sortants, pièces jointes comprises, rejoignent le dossier sans que personne ait à les transférer.",
    },
    {
      key: "entourage",
      role: "Proches & partenaires",
      position: "Autour du bénéficiaire",
      color: "#F59E0B",
      verbs: "Signale · Réagit · Alimente",
      description:
        "Retours des familles, observations des soignants et échanges avec les partenaires convergent dans le même fil.",
    },
  ],
};

// ─── FEATURE TABS (capacités) ────────────────────────────────
export const featureTabs = {
  eyebrow: "CE QUE FAIT COCKPIT",
  headline: "De l'échange brut",
  highlight: "à la preuve classée.",
  subheadline:
    "Capter, structurer, qualifier, prouver : Cockpit couvre la chaîne complète, de la conversation du matin au dossier d'évaluation.",
  tabs: [
    {
      key: "connexion",
      icon: "grid",
      tab: "Connexion",
      color: "#3B82F6",
      eyebrow: "MODULE CONNEXION",
      title: "Vos outils restent les mêmes. Cockpit s'y branche.",
      description:
        "L'information existante est récupérée automatiquement, sans ressaisie et sans migration. Vos équipes continuent d'utiliser leur messagerie et leur téléphonie exactement comme avant.",
      bullets: [
        "E-mails reçus et envoyés, pièces jointes comprises",
        "Journal d'appels et résumé de chaque conversation",
        "SMS échangés avec les familles et les intervenants",
        "Rattachement automatique au bon bénéficiaire",
      ],
      media: { label: "Module Connexion — messagerie & téléphonie", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "vocal",
      icon: "mic",
      tab: "CR vocal",
      color: "#8DC63F",
      eyebrow: "MODULE CR VOCAL",
      title: "Vos équipes parlent. Le compte rendu s'écrit.",
      description:
        "Un QR code posé au domicile, et chaque intervenant peut déposer son compte rendu : auxiliaire de vie, infirmier, kiné, médecin. Aucune application à installer, aucun compte à créer.",
      bullets: [
        "L'intervenant scanne le QR code au domicile",
        "Il raconte sa visite à voix haute",
        "L'IA rédige le compte rendu et le range dans la fiche",
        "Moins d'une minute, plus aucun compte rendu oublié",
      ],
      media: { label: "Module CR vocal — QR code & dictée", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "fiche",
      icon: "doc",
      tab: "Fiche bénéficiaire",
      color: "#8B5CF6",
      eyebrow: "TABLEAU DE BORD BÉNÉFICIAIRE",
      title: "Tout l'historique d'un bénéficiaire, en un seul endroit.",
      description:
        "Comptes rendus vocaux, appels, SMS, e-mails et documents se rangent sur une même ligne de temps. Un carnet de liaison connecté, lisible par tous ceux qui interviennent.",
      bullets: [
        "Une ligne de temps par bénéficiaire, filtrable par canal",
        "Carnet de liaison partagé entre tous les intervenants",
        "Vigilances ouvertes et suivies jusqu'à leur clôture",
        "Accès limité par bénéficiaire, consultation tracée",
      ],
      media: { label: "Tableau de bord bénéficiaire", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "actions",
      icon: "check",
      tab: "Réclamations & plans d'action",
      color: "#F59E0B",
      eyebrow: "DU SIGNAL À LA CLÔTURE",
      title: "Transformez chaque signal en plan d'action.",
      description:
        "Cockpit détecte ce qui demande une attention dans les échanges, qualifie les réclamations et propose un plan d'action. Le responsable valide : rien ne part sans son accord.",
      bullets: [
        "Réclamations détectées et qualifiées automatiquement",
        "Plan d'action proposé, validé par le responsable",
        "Chaque action attribuée, datée et suivie jusqu'à sa clôture",
        "Visible par les intervenants extérieurs du dossier",
      ],
      media: { label: "Réclamations & plans d'action", hint: "Vidéo / capture à intégrer" },
    },
  ],
};

// ─── MODULES PRINCIPAUX (cartes empilées) ────────────────────
export const apps = {
  eyebrow: "QUATRE MODULES",
  headline: "Vos équipes parlent.",
  highlight: "Cockpit s'occupe du reste.",
  subheadline:
    "Chaque module capte une partie de ce qui se joue autour du bénéficiaire. Ensemble, ils reconstituent le dossier complet.",
  items: [
    {
      id: "connexion",
      key: "connexion",
      color: "#3B82F6",
      eyebrow: "MODULE CONNEXION",
      sidebarTitle: "Connexion",
      sidebarDesc: "Vos outils restent les mêmes.",
      title: "L'information existante, récupérée sans ressaisie.",
      description:
        "Cockpit se connecte par API à votre messagerie et à votre centrale téléphonique. Les échanges rejoignent le dossier du bénéficiaire sans que personne ait à les transférer ou à les recopier.",
      steps: [
        { n: "01", title: "Messagerie connectée", desc: "Outlook, Gmail et autres : e-mails reçus, envoyés et pièces jointes." },
        { n: "02", title: "Téléphonie connectée", desc: "Aircall, Ringover et autres : journal d'appels, résumés et SMS." },
        { n: "03", title: "Rattachement automatique", desc: "Chaque échange est associé au bon bénéficiaire, sans intervention." },
        { n: "04", title: "Aucune migration forcée", desc: "Vos logiciels métier restent en place. Cockpit vient en complément." },
      ],
      stats: [
        { value: "API", label: "connexion à vos outils" },
        { value: "0", label: "double saisie" },
        { value: "0", label: "changement d'habitude" },
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
      title: "Le maillon que personne d'autre ne capte.",
      description:
        "Ce qui se passe au domicile est la matière première de votre accompagnement — et la seule qui n'est jamais écrite. Un QR code posé à l'entrée suffit à la récupérer.",
      steps: [
        { n: "01", title: "Un QR code au domicile", desc: "Posé chez le bénéficiaire, accessible à tous les intervenants." },
        { n: "02", title: "Ouvert à tous les métiers", desc: "Auxiliaire de vie, infirmier, kiné, médecin : chacun peut déposer son CR." },
        { n: "03", title: "Il raconte sa visite", desc: "À voix haute, dans ses mots, sans formulaire à remplir." },
        { n: "04", title: "L'IA rédige et range", desc: "Le compte rendu est structuré puis classé dans la fiche du bénéficiaire." },
      ],
      stats: [
        { value: "< 1 min", label: "par compte rendu" },
        { value: "QR code", label: "aucune app à installer" },
        { value: "Tous", label: "les intervenants, pas que l'aide à domicile" },
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
      title: "Valorisez votre action auprès des familles.",
      description:
        "Après chaque intervention, la famille reçoit les nouvelles en temps réel. Elle écoute un résumé audio des dernières visites et réagit directement, sans appeler le bureau.",
      steps: [
        { n: "01", title: "Des nouvelles après chaque visite", desc: "La famille est informée en temps réel de ce qui s'est passé." },
        { n: "02", title: "Un résumé audio à écouter", desc: "Les dernières visites racontées en quelques minutes, à tout moment." },
        { n: "03", title: "Une réaction directe", desc: "Les proches répondent dans le fil, l'échange reste tracé." },
        { n: "04", title: "Des ressources près de chez eux", desc: "Lieux de vie, solutions et événements de leur territoire." },
      ],
      stats: [
        { value: "Temps réel", label: "après chaque intervention" },
        { value: "Audio", label: "résumé des dernières visites" },
        { value: "1 fil", label: "tracé, jamais dix canaux" },
      ],
      media: { label: "Module Famille", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "analyse",
      key: "analyse",
      color: "#F59E0B",
      eyebrow: "ANALYSE & SYNTHÈSE AUTOMATISÉE",
      sidebarTitle: "Analyse & synthèse",
      sidebarDesc: "L'essentiel par e-mail, sans se connecter.",
      title: "Vos managers reçoivent l'essentiel par e-mail.",
      description:
        "Cockpit analyse tous les échanges de la période, repère ce qui demande une attention et l'envoie à vos responsables. Aucune connexion à l'outil n'est nécessaire pour être au courant.",
      steps: [
        { n: "01", title: "Analyse de tous les échanges", desc: "Comptes rendus, appels, SMS et e-mails de la période." },
        { n: "02", title: "Détection des points d'attention", desc: "Ce qui sort de l'ordinaire est isolé et expliqué." },
        { n: "03", title: "Bilan envoyé par e-mail", desc: "Activité de la période, points d'attention, interventions jour par jour." },
        { n: "04", title: "Lu sans se connecter", desc: "Le bilan se lit depuis la boîte mail, sur ordinateur comme sur mobile." },
      ],
      stats: [
        { value: "E-mail", label: "aucune connexion requise" },
        { value: "Hebdo", label: "ou à la fréquence choisie" },
        { value: "Ciblé", label: "seulement ce qui mérite attention" },
      ],
      media: { label: "Bilan de la semaine", hint: "Vidéo / capture à intégrer" },
    },
  ],
};

// ─── RÉCONCILIATION HAS ──────────────────────────────────────
export const compliance = {
  eyebrow: "RÉCONCILIATION HAS",
  headline: "Chaque échange est rattaché",
  highlight: "au référentiel HAS.",
  subheadline:
    "Cockpit ne se contente pas d'archiver. Chaque élément du dossier est relié au critère d'évaluation qu'il documente — au fil de l'eau, pas la veille de la visite.",
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

// ─── MODULES COMPLÉMENTAIRES ─────────────────────────────────
export const modules = {
  eyebrow: "AU-DELÀ DE LA CAPTATION",
  headline: "Ce que Cockpit fait",
  highlight: "de l'information captée.",
  subheadline:
    "Une fois les échanges centralisés, ils servent à autre chose qu'à être archivés : préparer les évaluations, outiller le terrain et sécuriser la coordination.",
  note: "Modules co-construits avec nos structures pilotes",
  items: [
    {
      icon: "doc",
      color: "#8B5CF6",
      title: "Évaluations & PAP pré-rédigés",
      desc: "Les évaluations conformes aux recommandations de la HAS et les plans d'accompagnement personnalisés sont pré-rédigés à partir des échanges déjà captés. Vous relisez et validez.",
      stat: "Sans ressaisie",
      statLabel: "générés depuis les échanges",
    },
    {
      icon: "bell",
      color: "#F59E0B",
      title: "Réclamations qualifiées",
      desc: "Une réclamation formulée dans un appel ou un mail est détectée, classée selon une grille de gravité, et assortie d'un plan d'action proposé. Le responsable valide avant publication.",
      stat: "Détectées",
      statLabel: "dans les appels et les mails",
    },
    {
      icon: "chat",
      color: "#8DC63F",
      title: "Messagerie interne sécurisée",
      desc: "Un fil par bénéficiaire, tracé et sécurisé, ouvert aux intervenants extérieurs du dossier. Les échanges sortent des groupes WhatsApp sans sortir du cadre RGPD.",
      stat: "1 fil",
      statLabel: "par bénéficiaire, tracé",
    },
    {
      icon: "play",
      color: "#3B82F6",
      title: "Préparation d'intervention",
      desc: "Avant d'entrer, l'intervenant écoute un résumé audio : ce qui a été fait lors des dernières visites, et ce qu'il reste à faire. Il sait où il met les pieds.",
      stat: "Option",
      statLabel: "briefing audio avant la visite",
    },
    {
      icon: "check",
      color: "#8DC63F",
      title: "Plan d'action sur le terrain",
      desc: "Les intervenants valident eux-mêmes les tâches du plan d'action une fois réalisées, depuis le domicile. Le suivi se met à jour sans repasser par le bureau.",
      stat: "Option",
      statLabel: "validation depuis le domicile",
    },
    {
      icon: "users",
      color: "#8B5CF6",
      title: "Fiche bénéficiaire complète",
      desc: "GIR, plan d'aide, contacts des aidants, documents et historique réunis sur une même fiche. Partageable avec les intervenants extérieurs, avec un accès limité au nécessaire.",
      stat: "1 fiche",
      statLabel: "accessible à tout le cercle",
    },
  ],
};

// ─── ACCOMPAGNEMENT / ONBOARDING ─────────────────────────────
export const onboarding = {
  eyebrow: "DÉPLOIEMENT",
  headline: "Déployé en",
  highlight: "deux heures à peine.",
  subheadline:
    "Aucun changement d'outil pour vos équipes : Cockpit se branche sur l'existant. Il n'y a ni migration de données, ni formation longue, ni période de double saisie.",
  steps: [
    {
      n: "01",
      title: "Cadrage",
      desc: "Vous nous transmettez les informations qui cadrent le déploiement : agence et équipes, bénéficiaires suivis, outils et canaux utilisés.",
    },
    {
      n: "02",
      title: "Connexion",
      desc: "Nous nous branchons sur votre boîte mail, vos messageries et votre centrale téléphonique, puis nous déposons les QR codes aux domiciles.",
    },
    {
      n: "03",
      title: "Déploiement",
      desc: "Cockpit est actif : vos équipes peuvent scanner et déposer leurs comptes rendus tout de suite. Les premiers échanges remontent dans la foulée.",
    },
    {
      n: "04",
      title: "Support en français",
      desc: "Une équipe disponible pour épauler vos collaborateurs au quotidien et faire évoluer l'outil avec vous.",
    },
  ],
};

// ─── INTÉGRATIONS & CERTIFICATIONS ───────────────────────────
export const integrations = {
  eyebrow: "INTÉGRATIONS",
  headline: "Connecté à vos outils,",
  highlight: "pas à leur place.",
  subheadline:
    "Cockpit se branche par API sur votre messagerie, votre téléphonie et vos logiciels métier. Vos plannings, votre facturation et votre télégestion restent exactement là où ils sont.",
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
  note: "Et bien d'autres — contactez-nous pour toute intégration spécifique.",
  certifications: [
    {
      name: "Certifié HDS",
      desc: "Hébergeur de Données de Santé, infrastructure certifiée par l'ANS.",
      icon: "shield",
    },
    {
      name: "Conforme RGPD",
      desc: "Données protégées, tracées et hébergées en France.",
      icon: "lock",
    },
    {
      name: "Solution souveraine",
      desc: "Données 100% stockées et traitées en France.",
      icon: "flag",
    },
  ],
};

// ─── FINAL CTA ───────────────────────────────────────────────
export const finalCta = {
  eyebrow: "PRÊT À TRACER CHAQUE ÉCHANGE ?",
  headline: "Vos preuves existent déjà. Il suffit de les rassembler.",
  subheadline:
    "Découvrez Cockpit en 30 minutes avec notre équipe. Démo personnalisée, sans engagement, sur votre cas d'usage réel.",
  formTitle: "Réserver ma démonstration",
  fields: {
    name: { label: "Votre nom", placeholder: "Marie Dupont" },
    structure: { label: "Nom de la structure", placeholder: "Aide à domicile 44" },
    email: { label: "Email professionnel", placeholder: "marie@structure.fr" },
    phone: { label: "Téléphone", placeholder: "06 12 34 56 78" },
  },
  submitLabel: "Réserver ma démonstration",
  successMessage:
    "Merci ! Notre équipe vous recontacte sous 24h pour organiser votre démonstration.",
  trustItems: [
    "Démo 30 min sur votre cas d'usage",
    "Sans engagement, sans carte bancaire",
    "Déploiement en deux heures",
    "Aucun changement d'outil pour vos équipes",
    "Support en français",
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
    "Le hub de coordination et de preuve des services d'aide à domicile. Cockpit se branche sur vos outils existants et capte ce qui se dit au domicile.",
  columns: [
    {
      title: "Modules",
      links: [
        { label: "Connexion", href: "#connexion" },
        { label: "CR vocal", href: "#cr-vocal" },
        { label: "Famille", href: "#famille" },
        { label: "Analyse & synthèse", href: "#analyse" },
      ],
    },
    {
      title: "Plateforme",
      links: [
        { label: "Réconciliation HAS", href: "#has" },
        { label: "Sécurité & conformité", href: "#confiance" },
        { label: "Intégrations", href: "#integrations" },
        { label: "Déploiement", href: "#accompagnement" },
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
