// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CS JEAN-JACQUES ROUSSEAU — Batimanou, Cinkassé (Cinkassé 1, Région des Savanes)
//  Données vérifiées : nom, statut (privé agréé par le MEPST), téléphones, quartier,
//  cycles et classes, CEPE et BEPC, pièces d'inscription, modalités de paiement.
//  Données FICTIVES : slogan, e-mail, horaires, tarifs, textes de présentation, fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'cs-jj-rousseau-cinkasse',
  logo: '/jj-rousseau-logo.png',
  settings: {
    name: 'Complexe Scolaire Jean-Jacques Rousseau',
    shortName: 'CS JJ Rousseau',
    slogan: 'ÉVEILLER, ÉPANOUIR, FAIRE RÉUSSIR',
    address: 'Quartier Batimanou, commune de Cinkassé 1 — Cinkassé, Togo',
    email: 'contact@cs-jjrousseau.tg',
    phone: '+228 90 86 32 40',
    phone2: '+228 98 33 41 39',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 60000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement privé agréé par l’État togolais, à Batimanou (Cinkassé) : de la maternelle au collège, une pédagogie qui éveille la curiosité, épanouit l’enfant et vise l’excellence.',
  hero: {
    eyebrow: 'CURIOSITÉ - ÉPANOUISSEMENT - EXCELLENCE',
    titleLines: ['Complexe Scolaire'],
    highlight: 'Jean-Jacques Rousseau',
    intro:
      'Bienvenue au Complexe Scolaire Jean-Jacques Rousseau, à Cinkassé. Inspirés par le grand penseur de l’éducation, nous plaçons l’enfant au centre : éveiller sa curiosité, l’aider à s’épanouir et le conduire, avec discipline, jusqu’à l’excellence, de la maternelle au BEPC.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du Complexe Scolaire Jean-Jacques Rousseau',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Partir de l’enfant', 'pour le faire grandir.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Nous avons choisi le nom de Jean-Jacques Rousseau parce qu’il a été l’un des premiers à dire qu’il faut connaître l’enfant pour bien l’éduquer. C’est notre méthode : observer chaque élève, éveiller sa curiosité et l’accompagner à son rythme.',
      'Mais l’épanouissement ne va pas sans exigence. Dans notre complexe, la discipline et le travail régulier sont la base de la réussite, de la petite section jusqu’au BEPC. Bienvenue à Batimanou.',
    ],
    signature: 'Le Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire Jean-Jacques Rousseau est implanté dans le quartier Batimanou, à Cinkassé, ville frontalière de l’extrême nord du Togo, dans la région des Savanes (préfecture de Cinkassé, commune de Cinkassé 1).',
      'Il porte le nom de Jean-Jacques Rousseau (1712-1778), philosophe et penseur majeur de l’éducation, auteur d’« Émile ou De l’éducation » (1762), qui invitait à respecter la nature de l’enfant et à apprendre par l’expérience et la curiosité.',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, le complexe couvre le parcours scolaire général, de la maternelle au collège, et prépare ses élèves au CEPE puis au BEPC.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '13', label: 'Niveaux, de la petite section à la 3e' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'heart',
      title: 'Épanouissement de l’enfant',
      text: 'Chaque enfant est respecté dans son rythme et ses talents.',
    },
    {
      icon: 'idea',
      title: 'Éveil de la curiosité',
      text: 'Observer, expérimenter, questionner : apprendre en comprenant.',
    },
    {
      icon: 'shield',
      title: 'Discipline',
      text: 'Ponctualité, respect et travail régulier, en classe comme à la maison.',
    },
    {
      icon: 'graduation',
      title: 'Excellence académique',
      text: 'Une préparation rigoureuse au CEPE et au BEPC.',
    },
  ],
  faq: [
    {
      q: 'Pourquoi le nom « Jean-Jacques Rousseau » ?',
      a: 'Jean-Jacques Rousseau est un philosophe du XVIIIe siècle, auteur d’« Émile ou De l’éducation ». Il a défendu une éducation qui part de l’enfant et éveille sa curiosité : c’est l’esprit de notre pédagogie.',
    },
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Cinkassé, dans le quartier Batimanou (commune de Cinkassé 1). Appelez-nous ou écrivez-nous sur WhatsApp au +228 90 86 32 40, ou contactez le secrétariat au +228 98 33 41 39.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique.',
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 sont préparés et présentés au CEPE, et les élèves de 3e bénéficient d’une préparation rigoureuse au BEPC.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription sont réglés chaque année à l’inscription. La scolarité se paie ensuite par tranches, selon le calendrier communiqué par l’établissement.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle (cycle préscolaire) est la première étape du parcours scolaire. Elle est consacrée à l’éveil, à la socialisation et à l’initiation de base, en laissant une large place au jeu et à la découverte.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et motricité',
        'Développement du langage',
        'Initiation à la lecture et au calcul',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Le cycle est sanctionné par le CEPE (Certificat d’Études du Premier Cycle), obligatoire pour le passage en classe de 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Apprendre par l’expérience',
          text: 'Observer, manipuler et comprendre par soi-même.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et assure une préparation rigoureuse à l’examen officiel du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Un suivi renforcé et des examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer l’entrée au lycée.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) acte de naissance',
      'Les bulletins des trimestres précédents (sauf entrée en petite section)',
      'Un certificat de transfert (pour un élève venant d’un autre établissement)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Deux (2) photos d’identité récentes',
      'Le reçu de paiement des frais d’inscription annuels',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
