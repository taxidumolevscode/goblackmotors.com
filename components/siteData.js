export const siteMeta = {
  brand: "Go Black Motors",
  siteName: "Go Black Motors",
  siteUrl: "https://goblackmotors.com",
  phoneDisplay: "+33 6 80 42 30 31",
  phoneHref: "tel:+33680423031",
  whatsappHref: "https://wa.me/33680423031",
  email: "contact@goblackmotors.com",
  emailHref: "mailto:contact@goblackmotors.com",
  heroImage: "/talaria-e-bike-hero.webp",
  mascotImage: "/talaria-e-bike-hero.webp",
  seoKeywords:
    "Go Black Motors, E-Bike Électrique, Talaria, moto cross électrique, accessoires moto électrique, pièces off-road, Haute-Savoie, Bonneville, 74130, moto électrique Haute-Savoie, Talaria Haute-Savoie",
  geoRegion: "FR-74",
  geoPlacename: "Bonneville, Haute-Savoie",
  geoPosition: "46.0803;6.4076",
};

export const navigationItems = [
  { label: "Motos", href: "/solutions" },
  { label: "Points Forts", href: "/points-forts" },
  { label: "Accessoires", href: "/zones-desservies-haute-savoie" },
  { label: "Garanties", href: "/preuves" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const navigationMenu = {
  label: "Menu",
  items: [{ label: "Accueil", href: "/" }, ...navigationItems],
};

export const homeContent = {
  hero: {
    eyebrow: "E-Bike Électrique & accessoires en Haute-Savoie",
    titleTop: "GO BLACK",
    titleBottom: "MOTORS",
    mobileTitleLines: ["Go Black", "Motors", "E-Cross"],
    intro:
      "Vente de motos cross électriques, équipements, pièces et accessoires pour rouler plus fort, plus propre et avec un style radicalement noir.",
    bullets: ["Motos électriques", "Accessoires off-road", "Conseil avant achat"],
    primaryCta: "Voir la gamme",
    secondaryCta: "Demander un prix",
  },
  intro: {
    title: "Une boutique pensée pour l'E-Bike Électrique.",
    left:
      "Go Black Motors sélectionne des motos cross électriques au look agressif, faciles à prendre en main et adaptées aux loisirs, terrains privés et pratiques off-road.",
    right:
      "La boutique met aussi en avant les accessoires essentiels: protections, casques, gants, chargeurs, batteries, pneus, pièces d'entretien et équipements pilote.",
  },
  services: [
    {
      slug: "motos-electriques",
      image: "/talaria-e-bike-hero.webp",
      title: "Motos Cross Électriques",
      subtitle: "Puissance, silence et couple instantané",
      delay: 0,
      offset: false,
    },
    {
      slug: "accessoires",
      image: "/talaria-e-bike-hero.webp",
      title: "Accessoires",
      subtitle: "Équipements pilote et off-road",
      delay: 0.1,
      offset: true,
    },
    {
      slug: "pieces",
      image: "/talaria-e-bike-hero.webp",
      title: "Pièces Et Entretien",
      subtitle: "Batteries, chargeurs et consommables",
      delay: 0.2,
      offset: false,
    },
    {
      slug: "conseil",
      image: "/talaria-e-bike-hero.webp",
      title: "Conseil Avant Achat",
      subtitle: "Choix selon usage et niveau",
      delay: 0,
      offset: false,
      hideOnLarge: true,
    },
  ],
  process: [
    {
      title: "Choisir Le Modèle",
      description:
        "On regarde votre niveau, votre taille, votre terrain d'utilisation et votre budget pour cibler la bonne moto.",
    },
    {
      title: "Composer Le Pack",
      description:
        "Vous ajoutez les accessoires utiles: casque, gants, protections, chargeur, batterie ou pièces d'entretien.",
    },
    {
      title: "Commander",
      description:
        "Le prix, la disponibilité et les conditions de livraison ou retrait sont confirmés avant validation.",
    },
  ],
  solutions: [
    {
      name: "Moto Cross",
      price: "Sur demande",
      description:
        "Motos cross électriques pour loisirs, terrains privés et pratique off-road avec une réponse moteur instantanée.",
      features: ["100% électrique", "Couple immédiat", "Look noir premium"],
      featured: false,
      delay: 0,
      href: "/contact",
    },
    {
      name: "Pack Rider",
      price: "Complet",
      description:
        "Un pack pensé pour partir équipé avec les protections et accessoires essentiels dès le premier ride.",
      features: ["Casque", "Gants", "Protections", "Accessoires utiles"],
      featured: true,
      delay: 0.1,
      href: "/contact",
    },
    {
      name: "Pièces",
      price: "Selon modèle",
      description:
        "Batteries, chargeurs, pneus, plaquettes, chaînes, leviers et consommables pour entretenir la moto.",
      features: ["Batteries", "Chargeurs", "Consommables"],
      featured: false,
      delay: 0.2,
      href: "/contact",
    },
  ],
  proof: {
    quote:
      "Go Black Motors veut rendre l'E-Bike Électrique plus accessible, plus stylé et plus simple à acheter avec les bons accessoires dès le départ.",
    author: "Go Black Motors",
    meta: "E-Bike Électrique",
  },
};

export const officialHighlights = [
  {
    title: "Moto Électrique",
    text: "Couple instantané, entretien réduit, conduite silencieuse et sensations off-road sans moteur thermique.",
  },
  {
    title: "Accessoires",
    text: "Équipements pilote, protections, chargeurs, batteries et pièces pour préparer la moto et le rider.",
  },
  {
    title: "Conseil Produit",
    text: "Aide au choix selon le niveau, la taille du pilote, le terrain, l'autonomie attendue et le budget.",
  },
  {
    title: "Style Go Black",
    text: "Une identité noire, premium et agressive, pensée pour les riders qui veulent une machine qui se remarque.",
  },
];

export const officialSources = [
  {
    title: "Demander Un Prix",
    detail:
      "Envoyez le modèle souhaité, votre niveau, votre taille et les accessoires recherchés pour recevoir une réponse claire.",
    link: "/contact",
    cta: "Demander",
  },
  {
    title: "Appel Direct",
    detail:
      "La solution la plus rapide pour connaître la disponibilité d'une moto ou d'un accessoire.",
    link: siteMeta.phoneHref,
    cta: "Appeler",
  },
  {
    title: "WhatsApp",
    detail:
      "Envoyez la photo du produit souhaité ou votre demande de pack directement par message.",
    link: siteMeta.whatsappHref,
    cta: "Écrire",
  },
];

export const officialContacts = [
  {
    title: "Téléphone",
    text: "Disponibilité, conseil produit et demande de prix.",
    value: siteMeta.phoneDisplay,
    href: siteMeta.phoneHref,
  },
  {
    title: "Email",
    text: "Demande détaillée, devis ou question accessoire.",
    value: siteMeta.email,
    href: siteMeta.emailHref,
  },
  {
    title: "WhatsApp",
    text: "Envoyer rapidement un modèle, une photo ou une liste d'accessoires.",
    value: "Message WhatsApp",
    href: siteMeta.whatsappHref,
  },
];

export const resourcesPageContent = {
  eyebrow: "Ressources",
  title: "Préparer l'achat d'un E-Bike Électrique.",
  intro:
    "Quelques repères simples pour choisir le bon modèle, comprendre les accessoires utiles et poser les bonnes questions avant achat.",
};

export const deepPages = [
  {
    href: "/solutions",
    title: "Motos",
    text: "Motos cross électriques, packs et pièces selon disponibilité.",
  },
  {
    href: "/points-forts",
    title: "Points Forts",
    text: "Électrique, couple instantané, entretien réduit et look premium.",
  },
  {
    href: "/zones-desservies-haute-savoie",
    title: "Accessoires",
    text: "Équipements pilote, batteries, chargeurs, pneus et consommables.",
  },
  {
    href: "/preuves",
    title: "Garanties",
    text: "Repères de confiance, conseils et confirmation avant commande.",
  },
  {
    href: "/faq",
    title: "FAQ",
    text: "Réponses rapides avant l'achat d'une moto électrique.",
  },
  {
    href: "/contact",
    title: "Contact",
    text: "Appel, email ou WhatsApp pour demander un prix.",
  },
];

export const pointsFortsContent = {
  eyebrow: "Points Forts",
  title: "Le plaisir off-road en version électrique.",
  intro:
    "Go Black Motors mise sur des machines propres, puissantes et visuellement fortes, accompagnées des bons accessoires.",
  items: [
    {
      number: "01",
      title: "Couple Instantané",
      text: "L'électrique offre une réponse directe à l'accélération, idéale pour les sensations off-road.",
    },
    {
      number: "02",
      title: "Entretien Réduit",
      text: "Moins de contraintes qu'un moteur thermique: pas d'huile moteur, moins de bruit et une mécanique simplifiée.",
    },
    {
      number: "03",
      title: "Accessoires Utiles",
      text: "Équipements, protections, pièces et chargeurs pour construire un pack cohérent.",
    },
    {
      number: "04",
      title: "Style Noir",
      text: "Une esthétique sombre, premium et agressive pour une vraie identité Go Black Motors.",
    },
  ],
};

export const demarchesContent = {
  eyebrow: "Commande",
  title: "Les étapes pour acheter votre moto ou vos accessoires.",
  intro:
    "Un fonctionnement simple pour confirmer le bon modèle, les accessoires et le prix.",
  steps: [
    {
      title: "Décrire Le Besoin",
      text: "Niveau, taille du pilote, terrain, autonomie attendue et budget.",
    },
    {
      title: "Choisir Les Accessoires",
      text: "Protections, casque, gants, batterie, chargeur, pneus ou pièces d'entretien.",
    },
    {
      title: "Confirmer Le Prix",
      text: "Disponibilité, tarif et conditions de livraison ou retrait sont validés avant commande.",
    },
    {
      title: "Préparer Le Ride",
      text: "Vous repartez avec une moto et un pack cohérent pour rouler plus sereinement.",
    },
  ],
};

export const demarchesDocuments = [
  "Modèle ou type de moto souhaité",
  "Taille et niveau du pilote",
  "Terrain d'utilisation",
  "Accessoires ou pièces recherchés",
];

export const solutionsPageContent = {
  eyebrow: "Gamme",
  title: "Motos cross électriques Talaria en Haute-Savoie",
  intro:
    "Go Black Motors propose une sélection orientée off-road électrique, avec les équipements qui vont avec, accessoires et pièces pour motos cross électriques.",
  cards: [
    {
      title: "E-Bike Électrique",
      text: "Machines silencieuses, nerveuses et modernes pour loisirs et terrains privés.",
    },
    {
      title: "Pack Débutant",
      text: "Un ensemble cohérent pour démarrer: moto, casque, gants et protections essentielles.",
    },
    {
      title: "Accessoires Rider",
      text: "Casques, gants, lunettes, protections, sacs et équipements utiles.",
    },
    {
      title: "Batteries Et Chargeurs",
      text: "Autonomie, charge et remplacement selon le modèle de moto.",
    },
    {
      title: "Pièces D'Entretien",
      text: "Pneus, chaînes, plaquettes, leviers, poignées et consommables.",
    },
    {
      title: "Conseil Avant Achat",
      text: "Aide au choix selon l'âge, le niveau, la taille et le type d'utilisation.",
    },
  ],
};

export const preuvesContent = {
  eyebrow: "Garanties",
  title: "Acheter avec les bonnes informations avant de valider.",
  intro:
    "Le site met en avant les éléments essentiels pour éviter les erreurs de modèle ou d'accessoires.",
  stats: [
    { value: "100%", label: "Électrique" },
    { value: "Pack", label: "Moto + Accessoires" },
    { value: "Off", label: "Road" },
    { value: "Black", label: "Style Premium" },
  ],
  sources: ["Téléphone", "WhatsApp", "Email"],
  notes: [
    "La disponibilité est confirmée avant commande.",
    "Le choix de la moto dépend du niveau, de la taille et de l'utilisation.",
    "Les accessoires conseillés dépendent du pilote et du terrain.",
  ],
};

export const faqContent = [
  {
    question: "Qui sommes-nous ?",
    answer:
      "Go Black Motors est une vitrine spécialisée dans les motos cross électriques, les accessoires off-road et les équipements rider. L'objectif est de présenter une gamme claire, moderne et orientée terrain privé, avec un accompagnement simple avant l'achat.",
  },
  {
    question: "Nos marques",
    answer:
      "La sélection Go Black Motors met en avant des modèles électriques, des accessoires et des pièces choisis pour leur usage off-road, leur fiabilité et leur style. Les marques et disponibilités sont confirmées selon les arrivages, les modèles et les demandes clients.",
  },
  {
    question: "Devenir revendeur",
    answer:
      "Les professionnels qui souhaitent distribuer ou proposer les produits Go Black Motors peuvent prendre contact avec la boutique. La demande est étudiée selon la zone, le profil, l'activité et la capacité à accompagner les clients sur le choix des motos et accessoires.",
  },
  {
    question: "Espace revendeur",
    answer:
      "Un espace revendeur pourra regrouper les informations utiles aux professionnels: demandes de disponibilité, conditions de commande, suivi des produits, accessoires et pièces. Pour le moment, l'accès se prépare directement par contact.",
  },
  {
    question: "Go Black Motors vend quoi exactement ?",
    answer:
      "Go Black Motors vend des motos cross électriques, des accessoires, des équipements pilote et des pièces liées à l'usage off-road.",
  },
  {
    question: "Comment connaître le prix d'une moto ?",
    answer:
      "Le plus simple est d'envoyer une demande avec le modèle souhaité, votre niveau, votre taille et les accessoires recherchés.",
  },
  {
    question: "Quels accessoires sont utiles pour commencer ?",
    answer:
      "Casque, gants, lunettes, protections, chargeur adapté et quelques consommables selon le modèle.",
  },
  {
    question: "Un E-Bike Électrique fait-il beaucoup de bruit ?",
    answer:
      "Non, elle est beaucoup plus silencieuse qu'une moto thermique, tout en gardant une réponse moteur très directe.",
  },
  {
    question: "Peut-on demander un pack complet ?",
    answer:
      "Oui, vous pouvez demander un pack avec moto, protections, chargeur, batterie ou accessoires selon vos besoins.",
  },
  {
    question: "Comment contacter rapidement la boutique ?",
    answer:
      "Vous pouvez appeler, envoyer un email ou passer par WhatsApp avec votre demande et les produits recherchés.",
  },
];

export const faqMenuOptions = [
  { label: "Qui sommes-nous ?", href: "#qui-sommes-nous" },
  { label: "Nos marques", href: "#nos-marques" },
  { label: "Devenir revendeur", href: "#devenir-revendeur" },
  { label: "Espace revendeur", href: "#espace-revendeur" },
];

export const productCatalog = [
  {
    slug: "talaria-cross-black-look",
    category: "E-Bike",
    name: "TALARIA-CROSS BLACK LOOK",
    year: "2026",
    tagline: "Look full black, couple instantané et conduite silencieuse.",
    price: "6 990 €",
    image: siteMeta.heroImage,
    specs: ["Électrique", "Off-road", "Pack possible"],
    featured: true,
  },
  {
    slug: "talaria-cross-black-junior",
    category: "E-Bike",
    name: "TALARIA-CROSS BLACK JUNIOR",
    year: "2026",
    tagline: "Format accessible pour progresser sur terrain privé.",
    price: "7 190 €",
    image: siteMeta.heroImage,
    specs: ["Junior", "Facile", "Progressif"],
    featured: false,
  },
  {
    slug: "talaria-cross-black-pro",
    category: "E-Bike",
    name: "TALARIA-CROSS BLACK PRO",
    year: "2026",
    tagline: "Une configuration plus nerveuse pour riders exigeants.",
    price: "8 490 €",
    image: siteMeta.heroImage,
    specs: ["Puissant", "Sport", "Premium"],
    featured: false,
  },
  {
    slug: "talaria-cross-black-start",
    category: "Pack",
    name: "TALARIA-CROSS BLACK START",
    year: "Accessoires",
    tagline: "Casque, gants et protections pour commencer équipé.",
    price: "8 990 €",
    image: siteMeta.heroImage,
    specs: ["Casque", "Gants", "Protections"],
    featured: false,
  },
];
