// ============================================================
// CONTENT.TS — Tout le contenu du site en un seul endroit
// Adapté de la plaquette commerciale Cockpit 2026 + infos produit
// ============================================================

export const siteConfig = {
  name: "Cockpit",
  brand: "SAHANEST",
  fullName: "Cockpit",
  tagline: "La plateforme qui coordonne l'aide à domicile",
  description:
    "Cockpit remplace le carnet de liaison papier et coordonne auxiliaires, responsables de secteur, familles et intervenants libéraux autour du bénéficiaire — comptes rendus vocaux IA, pilotage temps réel, planning, bien-être. Certifié HDS, conforme RGPD, souverain.",
  url: "https://cockpit.sahanest.fr",
  ogImage: "/og-image.png",
  twitter: "@sahanest",
};

// ─── NAVIGATION (méga-menu) ──────────────────────────────────
export const nav = {
  cta: "Demander une démo",
  menus: [
    {
      label: "Les solutions",
      columns: [
        {
          title: "Par métier",
          links: [
            { label: "App Auxiliaire — CR vocal", href: "#auxiliaire", desc: "Compte rendu à la voix en 1 min" },
            { label: "App Manager — Pilotage", href: "#manager", desc: "Tableau de bord temps réel" },
            { label: "App Famille", href: "#famille", desc: "Newsfeed & messagerie" },
            { label: "App Intervenants libéraux", href: "#pros", desc: "Cercle de soin partagé" },
          ],
        },
        {
          title: "Au-delà du compte rendu",
          links: [
            { label: "Planning intelligent", href: "#modules", desc: "Remplacements & conventions" },
            { label: "Bien-être des équipes", href: "#modules", desc: "Anticiper le turn-over" },
            { label: "Projets personnalisés", href: "#modules", desc: "PAP & fiches missions" },
            { label: "Messagerie interne", href: "#modules", desc: "Tracée & sécurisée" },
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
            { label: "Intégrations & API", href: "#integrations", desc: "Ximi, Arche, Ogust…" },
            { label: "Accompagnement", href: "#accompagnement", desc: "Onboarding en < 1 semaine" },
          ],
        },
        {
          title: "Découvrir",
          links: [
            { label: "Les résultats", href: "#resultats", desc: "Chiffres mesurés sur le terrain" },
            { label: "La solution", href: "#solution", desc: "Comment ça marche" },
            { label: "Témoignages", href: "#temoignages", desc: "Ils utilisent Cockpit" },
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
  eyebrow: "PLATEFORME DE COORDINATION IA · AIDE À DOMICILE",
  headline: "L'aide à domicile mérite mieux",
  highlight: "qu'un carnet papier.",
  subheadline:
    "Cockpit coordonne auxiliaires, responsables de secteur, familles et intervenants libéraux autour du bénéficiaire. Comptes rendus à la voix, pilotage en temps réel, le tout boosté par l'IA.",
  cta: {
    primary: "Demander une démo",
    secondary: "Découvrir la solution",
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
  headline: "Ils nous font déjà confiance",
  subheadline:
    "Plus de 20 agences d'aide à domicile pilotent leur activité avec Cockpit.",
  logos: [
    { name: "Le Temps de Vivre", src: "/logos/le-temps-de-vivre.png" },
    { name: "Présence", src: "/logos/presence.png" },
    { name: "ADHAP Direct", src: "/logos/adhap.png" },
    { name: "Junior Senior", src: "/logos/junior-senior.png" },
    { name: "Ensemble Autrement", src: "/logos/ensemble-autrement.png" },
    { name: "Générale des Services", src: "/logos/generale-des-services.png" },
  ],
  stats: [
    { value: 20, suffix: "+", label: "agences équipées" },
    { value: 4000, suffix: "+", label: "bénéficiaires suivis" },
    { value: 16, suffix: "h", label: "économisées / mois / auxiliaire" },
    { value: 100, suffix: "%", label: "des comptes rendus centralisés" },
  ],
};

// ─── CONSTAT / PROBLÈME ──────────────────────────────────────
export const problem = {
  eyebrow: "LE CONSTAT",
  headline: "Coordonner les actions autour des bénéficiaires,",
  headlineHighlight: "c'est encore du bricolage.",
  subheadline:
    "Sans outil adapté, l'information se perd entre le terrain, le bureau et les familles — au détriment du soin et des équipes.",
  pains: [
    {
      icon: "notebook",
      title: "Des carnets papier perdus ou jamais lus",
      description:
        "Un passage = une feuille. L'info reste chez le bénéficiaire, invisible pour le reste de l'équipe et la famille.",
    },
    {
      icon: "chat",
      title: "Des groupes WhatsApp incontrôlables",
      description:
        "Messages mélangés, photos non sécurisées, RGPD nulle part. Personne ne sait qui a lu quoi.",
    },
    {
      icon: "family",
      title: "Des familles dans le flou",
      description:
        "Elles appellent pour avoir des nouvelles ; vous répondez quand vous pouvez. La confiance s'érode.",
    },
  ],
  stats: [
    { value: "~3h", label: "par auxiliaire / semaine perdues en retranscription manuelle" },
    { value: "38%", label: "des signalements importants n'arrivent jamais au manager" },
    { value: "×2", label: "de turn-over dans les structures sans outil terrain adapté" },
  ],
};

// ─── SOLUTION / HUB ──────────────────────────────────────────
export const solution = {
  eyebrow: "LA SOLUTION",
  headline: "Une plateforme qui coordonne,",
  highlights: ["simplifie", "améliore"],
  headlineEnd: "les actions terrain.",
  subheadline:
    "Chaque acteur dépose et consulte ce qui le concerne. Cockpit centralise, structure et restitue — en temps réel, autour du bénéficiaire.",
  hub: {
    title: "Cockpit",
    subtitle: "Le hub qui orchestre toutes les interactions autour du bénéficiaire.",
    aiBadge: "Boosté par l'IA",
    aiPoints: [
      "Synthétise les comptes rendus vocaux",
      "Trie les points d'attention",
      "Alerte au bon moment",
    ],
  },
  actors: [
    {
      key: "aux",
      role: "Auxiliaires",
      position: "Sur le terrain",
      color: "#8DC63F",
      verbs: "Dépose · Signale · S'informe",
      description:
        "Dépose ses comptes rendus à la voix, photographie les moments clés et consulte les consignes du bénéficiaire depuis son téléphone.",
    },
    {
      key: "manager",
      role: "Responsables de secteur",
      position: "Au pilotage",
      color: "#3B82F6",
      verbs: "Suit · Analyse · Décide",
      description:
        "Suit les remontées en temps réel, analyse les tendances des bénéficiaires et déploie les bonnes actions au bon moment.",
    },
    {
      key: "famille",
      role: "Familles",
      position: "Rassurées",
      color: "#8B5CF6",
      verbs: "Lit · Réagit · S'informe",
      description:
        "Accède à un newsfeed du quotidien de leur proche : actes réalisés, photos, humeur, anecdotes.",
    },
    {
      key: "pro",
      role: "Intervenants libéraux",
      position: "Connectés",
      color: "#F59E0B",
      verbs: "S'informe · Alimente · Partage",
      description:
        "Infirmiers, kinés, médecins partagent leurs observations sur la même fiche bénéficiaire — sans WhatsApp, sans papier.",
    },
  ],
};

// ─── FEATURE TABS (capacités) ────────────────────────────────
export const featureTabs = {
  eyebrow: "TOUT-EN-UN",
  headline: "Tout ce dont vos équipes",
  highlight: "ont besoin.",
  subheadline:
    "Du compte rendu vocal au pilotage, en passant par le planning et la conformité — Cockpit couvre chaque maillon de la coordination.",
  tabs: [
    {
      key: "vocal",
      icon: "mic",
      tab: "CR vocal IA",
      color: "#8DC63F",
      eyebrow: "COMPTE RENDU VOCAL IA",
      title: "Le pouvoir de la voix, au service du soin.",
      description:
        "L'auxiliaire décrit oralement son intervention. L'IA transcrit, corrige et range : actes réalisés, état général, points d'attention — en moins d'une minute.",
      bullets: [
        "Dépôt vocal en 1 clic, structuration automatique",
        "Briefing audio généré à partir des derniers CR",
        "Détection des points d'attention et alertes",
        "Fonctionne même avec une main occupée",
      ],
      media: { label: "App Auxiliaire — compte rendu vocal", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "dashboard",
      icon: "grid",
      tab: "Tableau de bord",
      color: "#3B82F6",
      eyebrow: "TABLEAU DE BORD MANAGER",
      title: "Décider au bon moment, sans rouvrir 10 dossiers.",
      description:
        "Tous les comptes rendus centralisés, une synthèse IA hebdo/mensuelle, et la possibilité de faire remonter des consignes ciblées au terrain en un clic.",
      bullets: [
        "Interventions, auxiliaires et bénéficiaires en temps réel",
        "Plans d'action et suivi dans le temps",
        "Synthèse IA : humeur, alertes, tendances",
        "Remontée vers le terrain, lecture tracée",
      ],
      media: { label: "App Manager — tableau de bord", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "planning",
      icon: "calendar",
      tab: "Planning",
      color: "#F59E0B",
      eyebrow: "PLANNING INTELLIGENT",
      title: "La gestion du planning, sans la douleur.",
      description:
        "Cockpit propose des remplacements en tenant compte des conventions collectives, des contraintes des salariés et des diplômes requis. La télégestion et les missions du jour incluses.",
      bullets: [
        "Remplacements suggérés selon convention & diplômes",
        "Planning autonome créé par les auxiliaires",
        "Télégestion & pointage des interventions",
        "Missions du jour visibles sur mobile",
      ],
      media: { label: "Module Planning", hint: "Vidéo / capture à intégrer" },
    },
    {
      key: "securite",
      icon: "shield",
      tab: "Sécurité & conformité",
      color: "#8B5CF6",
      eyebrow: "SÉCURITÉ & CONFORMITÉ",
      title: "Au niveau d'exigence de la santé.",
      description:
        "Hébergement certifié HDS, données stockées en France, conformité RGPD et option de conformité HAS. La traçabilité devient aussi une sécurité juridique.",
      bullets: [
        "Hébergeur de Données de Santé (HDS)",
        "Conforme RGPD, données souveraines en France",
        "Option conformité HAS",
        "Accès limité par bénéficiaire, lecture tracée",
      ],
      media: { label: "Sécurité & conformité", hint: "Vidéo / capture à intégrer" },
    },
  ],
};

// ─── APPS (cartes empilées — 4 espaces) ──────────────────────
export const apps = {
  eyebrow: "UN OUTIL, QUATRE ESPACES",
  headline: "Parlez.",
  highlight: "Cockpit s'occupe du reste.",
  subheadline:
    "Du terrain au bureau, chaque acteur dispose d'un espace dédié — sans surcharge, sans doublon.",
  items: [
    {
      id: "auxiliaire",
      key: "aux",
      color: "#8DC63F",
      eyebrow: "APP AUXILIAIRE",
      sidebarTitle: "Auxiliaires",
      sidebarDesc: "Remonter le terrain en une note vocale.",
      title: "Remontez les actions terrain en une simple note vocale.",
      description:
        "L'auxiliaire décrit oralement son intervention. L'IA structure le compte rendu et l'envoie au manager — en moins d'une minute, entre deux portes.",
      steps: [
        { n: "01", title: "Briefing audio en 1 clic", desc: "Avant d'intervenir, l'auxiliaire écoute un briefing issu des derniers comptes rendus." },
        { n: "02", title: "Dépôt vocal, structuration auto", desc: "Elle raconte ce qu'elle a fait. L'IA transcrit, corrige et range tout." },
        { n: "03", title: "Liste d'actions par bénéficiaire", desc: "La to-do du jour et les plans d'action, sans rien chercher." },
        { n: "04", title: "Envoi immédiat à l'encadrement", desc: "Le CR arrive en temps réel chez le responsable de secteur." },
      ],
      stats: [
        { value: "~1min", label: "par compte rendu" },
        { value: "16h", label: "économisées / mois / auxiliaire" },
        { value: "0", label: "friction, même main occupée" },
      ],
      media: { label: "App Auxiliaire", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "manager",
      key: "manager",
      color: "#3B82F6",
      eyebrow: "APP MANAGER",
      sidebarTitle: "Managers",
      sidebarDesc: "Piloter sans rouvrir 10 dossiers.",
      title: "Accompagnez encore mieux vos équipes.",
      description:
        "L'application manager centralise tous les comptes rendus, génère la synthèse globale des interventions et fait remonter les points de suivi directement aux auxiliaires.",
      steps: [
        { n: "01", title: "Tous les CR centralisés", desc: "Un tableau de bord unique : points d'attention, taux de remontée, couverture." },
        { n: "02", title: "Plan d'action et suivi", desc: "Créez des plans d'action par bénéficiaire et suivez leur réalisation." },
        { n: "03", title: "Synthèse automatisée", desc: "Une analyse IA hebdo, mensuelle ou trimestrielle du terrain." },
        { n: "04", title: "Remontée vers le terrain", desc: "Adressez des consignes ciblées en un clic, lecture tracée." },
      ],
      stats: [
        { value: "100%", label: "des CR centralisés" },
        { value: "~5min", label: "pour débriefer un mois entier" },
        { value: "0", label: "oubli, les suivis arrivent au terrain" },
      ],
      media: { label: "App Manager", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "famille",
      key: "famille",
      color: "#8B5CF6",
      eyebrow: "APP FAMILLE",
      sidebarTitle: "Familles",
      sidebarDesc: "Des nouvelles, vraiment.",
      title: "Valorisez votre action auprès des familles.",
      description:
        "Chaque intervention devient un lien : nouvelles du jour, humeur, photos partagées et messagerie directe avec l'équipe. Vos auxiliaires deviennent les ambassadeurs du service rendu.",
      steps: [
        { n: "01", title: "Des nouvelles, vraiment", desc: "Humeur du jour, moments partagés, photos : un vrai récit du quotidien." },
        { n: "02", title: "Suivi fluide, sans friction", desc: "Dernier passage, prochaine visite, planning consultable jour par jour." },
        { n: "03", title: "Une seule conversation, toute l'équipe", desc: "Une messagerie unique, tracée. Fini WhatsApp et les emails perdus." },
      ],
      stats: [
        { value: "+82%", label: "de familles satisfaites du suivi" },
        { value: "−60%", label: "d'appels entrants au bureau" },
        { value: "1 fil", label: "de conversation, jamais 10 canaux" },
      ],
      media: { label: "App Famille", hint: "Vidéo / capture à intégrer" },
    },
    {
      id: "pros",
      key: "pro",
      color: "#F59E0B",
      eyebrow: "APP INTERVENANTS LIBÉRAUX",
      sidebarTitle: "Intervenants libéraux",
      sidebarDesc: "Tout le cercle de soin, connecté.",
      title: "Coordonnez tous les pros autour du bénéficiaire.",
      description:
        "Infirmiers, kinés, médecins partagent leurs observations sur la même fiche bénéficiaire — pour une prise en charge cohérente et tracée. Greffez un intervenant extérieur en moins d'une minute.",
      steps: [
        { n: "01", title: "Invitation en un clic", desc: "Invitez l'IDEL, le médecin, le kiné par SMS ou email. Compte créé en < 1 min." },
        { n: "02", title: "Un fil partagé par bénéficiaire", desc: "CR, observations et points d'attention convergent dans un même fil." },
        { n: "03", title: "Messagerie inter-pros", desc: "Discussion directe, traçable et sécurisée. Accès limité, RGPD-compliant." },
      ],
      stats: [
        { value: "1 fil", label: "partagé pour tous les pros" },
        { value: "∞", label: "invités par bénéficiaire" },
        { value: "100%", label: "RGPD & accès limité" },
      ],
      media: { label: "App Intervenants libéraux — cercle de soin", hint: "Vidéo / capture à intégrer" },
    },
  ],
};

// ─── RÉSULTATS (bento) ───────────────────────────────────────
export const results = {
  eyebrow: "RÉSULTATS MESURÉS",
  headline: "Des résultats concrets,",
  highlight: "instantanément.",
  subheadline:
    "Au-delà des fonctionnalités, Cockpit agit sur les indicateurs qui comptent pour votre structure.",
  // type: "stat" (carte chiffre) | "photo" (emplacement photo à remplir)
  cells: [
    { type: "stat", tone: "brand", value: "16h", label: "économisées par mois et par auxiliaire", sub: "grâce au CR vocal IA" },
    { type: "photo", label: "Photo — auxiliaire & bénéficiaire", hint: "à intégrer" },
    { type: "stat", tone: "light", value: "~3h", label: "récupérées par semaine et par auxiliaire", sub: "fini la retranscription manuelle" },
    { type: "photo", label: "Photo — moment de soin", hint: "à intégrer" },
    { type: "photo", label: "Photo — usage de l'app", hint: "à intégrer" },
    { type: "stat", tone: "dark", value: "−40%", label: "de turn-over en 12 mois", sub: "équipes mieux accompagnées" },
    { type: "stat", tone: "dark", value: "+82%", label: "de familles satisfaites du suivi", sub: "−60% d'appels au bureau" },
    { type: "photo", label: "Photo — famille rassurée", hint: "à intégrer" },
  ],
};

// ─── MODULES (au-delà du CR) ─────────────────────────────────
export const modules = {
  eyebrow: "AU-DELÀ DU COMPTE RENDU",
  headline: "Cockpit ne s'arrête pas",
  highlight: "au compte rendu.",
  subheadline:
    "Une plateforme complète pour piloter le planning, les missions, la coordination et le bien-être des équipes.",
  note: "Modules co-construits avec nos pilotes · déployés progressivement en 2026",
  items: [
    {
      icon: "calendar",
      color: "#3B82F6",
      title: "Planning intelligent & autonome",
      desc: "Remplacements suggérés selon conventions collectives, contraintes salariés et diplômes. Les auxiliaires créent leur propre planning, vous validez en un clin d'œil.",
      stat: "~30 sec",
      statLabel: "pour réaffecter une intervention",
    },
    {
      icon: "phone",
      color: "#8DC63F",
      title: "Télégestion & missions du jour",
      desc: "Pointage des interventions et missions du jour visibles sur mobile : chaque auxiliaire ouvre son téléphone et sait exactement quoi faire.",
      stat: "0 sec",
      statLabel: "de prise de poste hésitante",
    },
    {
      icon: "chat",
      color: "#F59E0B",
      title: "Messagerie interne sécurisée",
      desc: "Une vraie messagerie type WhatsApp, un fil par bénéficiaire, tracée et sécurisée. Fini les groupes WhatsApp et les SMS perdus.",
      stat: "−60%",
      statLabel: "d'appels & SMS hors-cadre",
    },
    {
      icon: "heart",
      color: "#8B5CF6",
      title: "Bien-être auxiliaires & bénéficiaires",
      desc: "Score d'humeur, signaux faibles, badges de compétences côté auxiliaire et bénéficiaire. Voir qui décroche avant qu'il ne parte — et qui valoriser.",
      stat: "−40%",
      statLabel: "de turn-over en 12 mois",
    },
    {
      icon: "doc",
      color: "#3B82F6",
      title: "Projets personnalisés digitalisés",
      desc: "Plan d'accompagnement personnalisé (PAP), fiches missions, projets de vie et grille de tâches — créés et suivis directement dans Cockpit.",
      stat: "100%",
      statLabel: "numérisé, fini le papier",
    },
    {
      icon: "trophy",
      color: "#F59E0B",
      title: "Gamification & badges",
      desc: "Un système de badges côté auxiliaire et manager pour rendre l'outil attrayant et valoriser l'engagement au quotidien.",
      stat: "+ d'engagement",
      statLabel: "des équipes sur l'outil",
    },
  ],
};

// ─── ACCOMPAGNEMENT / ONBOARDING ─────────────────────────────
export const onboarding = {
  eyebrow: "ON S'OCCUPE DE TOUT",
  headline: "Un accompagnement",
  highlight: "de bout en bout.",
  subheadline:
    "De la reprise de vos données à la formation continue de vos équipes, Cockpit prend tout en charge. Vous n'avez qu'à utiliser l'outil.",
  steps: [
    {
      n: "01",
      title: "Reprise des données",
      desc: "On rentre toutes vos données clients et bénéficiaires pour vous. Vous n'avez rien à saisir.",
    },
    {
      n: "02",
      title: "Onboarding en moins d'une semaine",
      desc: "Vos équipes sont opérationnelles en quelques jours. On paramètre tout selon votre fonctionnement.",
    },
    {
      n: "03",
      title: "Formation en direct",
      desc: "Des sessions de formation auprès des auxiliaires, plusieurs fois par mois, pour les accompagner au quotidien.",
    },
    {
      n: "04",
      title: "Support réactif en français",
      desc: "Une équipe disponible pour épauler vos collaboratrices et faire évoluer l'outil avec vous.",
    },
  ],
};

// ─── INTÉGRATIONS & CERTIFICATIONS ───────────────────────────
export const integrations = {
  eyebrow: "INTÉGRATIONS",
  headline: "Cockpit s'intègre à",
  highlight: "vos outils existants.",
  subheadline:
    "Solution ouverte qui se connecte par clé API à vos logiciels métier et CRM. Reliez vos données Cockpit à votre logiciel principal, sans double saisie.",
  logos: [
    { name: "Ximi", src: "/logos/ximi.png" },
    { name: "Arche", src: "/logos/arche.png" },
    { name: "Ogust", src: "/logos/ogust-quadri-fond-blanc-100-e1648058063964.png" },
    { name: "Apologic", src: "/logos/apologic.png" },
    { name: "Salesforce", src: "/logos/salesforce.png" },
    { name: "HubSpot", src: "/logos/hubspot.png" },
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

// ─── TÉMOIGNAGES ─────────────────────────────────────────────
export const testimonials = {
  eyebrow: "ILS UTILISENT COCKPIT",
  headline: "Ce qu'ils en disent.",
  subheadline:
    "Des responsables de structures qui ont transformé leur quotidien avec Cockpit.",
  stats: [
    { value: 20, suffix: "+", label: "agences équipées" },
    { value: 1000, suffix: "+", label: "auxiliaires actives" },
    { value: 4000, suffix: "+", label: "bénéficiaires suivis" },
  ],
  items: [
    { quote: "Cockpit nous a fait gagner un temps considérable sur les comptes rendus. Nos auxiliaires l'ont adopté en quelques jours — et certaines se sentent enfin écoutées.", author: "Marie L.", role: "Directrice", structure: "SAAD Loire-Atlantique" },
    { quote: "Finies les fiches papier perdues dans les classeurs. Tout est centralisé, consultable en deux clics. Nos équipes gagnent un temps précieux au quotidien.", author: "Bernard T.", role: "Directeur adjoint", structure: "Structure SAD — Alsace" },
    { quote: "Nos familles adorent l'espace dédié. Elles voient en temps réel que leur proche a bien été pris en charge. Les appels anxieux ont quasiment disparu.", author: "Sophie M.", role: "Coordinatrice", structure: "SAAD — PACA" },
    { quote: "La transmission entre l'équipe du matin et celle du soir n'a jamais été aussi fluide. Cockpit a vraiment changé notre façon de travailler.", author: "Isabelle R.", role: "Responsable de secteur", structure: "SAAD — Bretagne" },
    { quote: "Le compte rendu vocal IA est une révolution pour nos auxiliaires. Elles terminent leur journée sans paperasse. Le moral des équipes a clairement progressé.", author: "Nathalie P.", role: "Directrice", structure: "SAAD Solidarité Domicile — Occitanie" },
    { quote: "La visibilité en temps réel m'a permis de réduire mes appels de vérification de plus de moitié. Je peux me concentrer sur ce qui compte vraiment.", author: "Amandine C.", role: "Responsable coordination", structure: "Aide & Présence — Pays de Loire" },
    { quote: "On travaille avec des personnes vulnérables. La traçabilité que Cockpit nous apporte, c'est aussi une sécurité juridique. Chaque intervention est documentée.", author: "Karim B.", role: "Directeur", structure: "SAAD Proximité Services — Île-de-France" },
    { quote: "Nos auxiliaires venaient souvent nous voir épuisées. Depuis Cockpit, elles se sentent mieux organisées, moins stressées. Le turn-over a nettement baissé.", author: "Céline M.", role: "DRH", structure: "Groupe Domicile & Vie — Hauts-de-France" },
    { quote: "La mise en place a été très rapide. En une semaine, toute l'équipe utilisait Cockpit. L'interface est intuitive, même pour les profils peu à l'aise avec le numérique.", author: "Patricia N.", role: "Directrice", structure: "SAAD — Bourgogne" },
    { quote: "Ce que j'apprécie, c'est la remontée automatique des alertes. Plus besoin d'attendre le compte rendu du soir pour savoir si un bénéficiaire a eu une chute.", author: "David L.", role: "Infirmier coordinateur", structure: "SSIAD Grand Est" },
    { quote: "Le rapport mensuel qu'on faisait à la main en 3h, Cockpit le génère automatiquement. On se concentre sur l'accompagnement plutôt que l'administratif.", author: "Fatima A.", role: "Directrice", structure: "SAAD Avenir Domicile — Midi-Pyrénées" },
    { quote: "L'intégration avec notre logiciel métier s'est faite très rapidement. L'équipe nous a vraiment accompagnés du début à la fin.", author: "Olivier G.", role: "Co-fondateur", structure: "SAAD — Centre-Val de Loire" },
  ],
};

// ─── FINAL CTA ───────────────────────────────────────────────
export const finalCta = {
  eyebrow: "LA FIN DU CARNET PAPIER",
  headline: "Votre équipe mérite un outil à la hauteur de son travail.",
  subheadline:
    "Découvrez Cockpit en 30 minutes avec notre équipe. Démo personnalisée, sans engagement, sur votre cas d'usage réel.",
  formTitle: "Réserver ma démo",
  fields: {
    name: { label: "Votre nom", placeholder: "Marie Dupont" },
    structure: { label: "Nom de la structure", placeholder: "Aide à domicile 44" },
    email: { label: "Email professionnel", placeholder: "marie@structure.fr" },
    phone: { label: "Téléphone", placeholder: "06 12 34 56 78" },
  },
  submitLabel: "Réserver ma démo gratuite",
  successMessage:
    "Merci ! Notre équipe vous recontacte sous 24h pour organiser votre démo.",
  trustItems: [
    "Démo 30 min sur votre cas d'usage",
    "Sans engagement, sans carte bancaire",
    "Onboarding en moins d'une semaine",
    "Reprise de vos données incluse",
    "Formation & support en français",
  ],
  contacts: [
    { name: "Arthur Cesaro", email: "arthur@sahanest.fr", phone: "06 21 09 47 20" },
    { name: "Jean de Guerre", email: "jean@sahanest.fr", phone: "06 15 43 96 88" },
  ],
};

// ─── FOOTER ──────────────────────────────────────────────────
export const footer = {
  tagline: "Pour faciliter l'aide à domicile.",
  description:
    "Cockpit coordonne auxiliaires, managers, familles et intervenants libéraux autour du bénéficiaire.",
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "App Auxiliaire", href: "#auxiliaire" },
        { label: "App Manager", href: "#manager" },
        { label: "App Famille", href: "#famille" },
        { label: "Intervenants libéraux", href: "#pros" },
      ],
    },
    {
      title: "Plateforme",
      links: [
        { label: "Sécurité & conformité", href: "#confiance" },
        { label: "Intégrations & API", href: "#integrations" },
        { label: "Accompagnement", href: "#accompagnement" },
        { label: "Résultats", href: "#resultats" },
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
