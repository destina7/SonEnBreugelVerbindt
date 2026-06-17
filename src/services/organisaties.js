import { Plus, Dumbbell, GraduationCap } from 'lucide-react'

export const CATEGORIES = ['Alle', 'Zorg & Welzijn', 'Sport & Beweging', 'Onderwijs & Jeugd']

export const organisations = [
  {
    id: 1,
    naam: 'Huisartsenpraktijk Son',
    categorie: 'Zorg & Welzijn',
    beschrijving:
      'Algemene medische zorg voor inwoners van Son. Wij bieden persoonlijke en deskundige huisartsenzorg in een moderne praktijk.',
    adres: 'Kerkstraat 12, Son',
    contact: { type: 'phone', value: '0499 - 123 456' },
    website: '#',
  },
  {
    id: 2,
    naam: 'Voetbalvereniging SBC',
    categorie: 'Sport & Beweging',
    beschrijving:
      'Gezellige voetbalclub voor jong en oud. Met diverse jeugd- en seniorenteams, en een actieve vrijwilligersgroep.',
    adres: 'Sportpark De Rooi, Son',
    contact: { type: 'email', value: 'info@vvsbc.nl' },
    website: '#',
  },
  {
    id: 3,
    naam: 'Basisschool De Zilveren Maan',
    categorie: 'Onderwijs & Jeugd',
    beschrijving:
      'Samen leren en groeien in een veilige omgeving. Wij bieden uitdagend onderwijs met oog voor ieder talent.',
    adres: 'Maanstraat 4, Breugel',
    contact: { type: 'phone', value: '0499 - 654 321' },
    website: '#',
  },
  {
    id: 4,
    naam: 'Fysiotherapie Verbindt',
    categorie: 'Zorg & Welzijn',
    beschrijving:
      'Professionele fysiotherapie voor herstel en preventie. Wij begeleiden u op weg naar een pijnvrij en actief leven.',
    adres: 'Dorpsstraat 8, Son',
    contact: { type: 'phone', value: '0499 - 234 567' },
    website: '#',
  },
  {
    id: 5,
    naam: 'Tennisclub Son en Breugel',
    categorie: 'Sport & Beweging',
    beschrijving:
      'Tennis voor alle leeftijden en niveaus. Met lessen, competitie en een gezellige clubsfeer voor heel het gezin.',
    adres: 'Tennispark Noord, Son',
    contact: { type: 'email', value: 'info@tcsonbreugel.nl' },
    website: '#',
  },
  {
    id: 6,
    naam: 'Kinderdagverblijf Zonnestraal',
    categorie: 'Onderwijs & Jeugd',
    beschrijving:
      'Warm en veilig dagverblijf voor kinderen van 0 tot 4 jaar. Spelen, ontdekken en groeien in een stimulerende omgeving.',
    adres: 'Zonnebloemstraat 3, Son',
    contact: { type: 'phone', value: '0499 - 345 678' },
    website: '#',
  },
  {
    id: 7,
    naam: 'Apotheek De Esdoorn',
    categorie: 'Zorg & Welzijn',
    beschrijving:
      'Uw vertrouwde apotheek voor medicijnen en gezondheidsadvies. Persoonlijke service voor heel Son en Breugel.',
    adres: 'Esdoornlaan 5, Son',
    contact: { type: 'phone', value: '0499 - 456 789' },
    website: '#',
  },
  {
    id: 8,
    naam: 'Scouting Breugel',
    categorie: 'Onderwijs & Jeugd',
    beschrijving:
      'Avontuur, samenwerken en buiten zijn. Scouting biedt kinderen en jongeren een plek om zichzelf te ontwikkelen.',
    adres: 'Bosweg 12, Breugel',
    contact: { type: 'email', value: 'info@scoutingbreugel.nl' },
    website: '#',
  },
  {
    id: 9,
    naam: 'Zwemclub Aquarius',
    categorie: 'Sport & Beweging',
    beschrijving:
      'Zwemmen voor recreatie en competitie. Van zwemlessen voor peuters tot wedstrijdtraining voor gevorderden.',
    adres: 'Zwembadlaan 1, Son',
    contact: { type: 'email', value: 'info@aquariusson.nl' },
    website: '#',
  },
]

export const categoryMeta = {
  'Zorg & Welzijn': {
    icon: Plus,
    iconClass: 'bg-sky-light text-sky',
    badgeClass: 'bg-sky-soft text-sky',
    label: 'Zorg',
  },
  'Sport & Beweging': {
    icon: Dumbbell,
    iconClass: 'bg-sun-soft text-[#9A7B12]',
    badgeClass: 'bg-sun-soft text-[#9A7B12]',
    label: 'Sport',
  },
  'Onderwijs & Jeugd': {
    icon: GraduationCap,
    iconClass: 'bg-sun-soft text-[#9A7B12]',
    badgeClass: 'bg-sun-soft text-[#9A7B12]',
    label: 'Onderwijs',
  },
}
