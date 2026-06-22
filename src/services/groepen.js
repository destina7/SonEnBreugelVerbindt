import { Home, Palette, Dumbbell, HeartHandshake, Leaf } from 'lucide-react'
import groepBuurtgroep from '../assets/groep-buurtgroep.png'
import groepWandelen from '../assets/groep-wandelen.png'
import groepBridge from '../assets/groep-bridge.png'
import groepMoestuin from '../assets/groep-moestuin.png'
import groepTennis from '../assets/groep-tennis.png'

export const GROEP_CATEGORIES = ['Alles', 'Buurt', 'Hobby', 'Sport', 'Zorg', 'Duurzaamheid']

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Nieuwste eerst' },
  { value: 'oldest', label: 'Oudste eerst' },
  { value: 'name', label: 'Naam (A-Z)' },
]

/**
 * Visual treatment per category: badge styling for the card overlay and a
 * gradient + icon for the card's image placeholder. All colours pull from the
 * Tailwind brand tokens (sky / navy / sun).
 */
export const groepCategoryMeta = {
  Buurt: {
    icon: Home,
    badgeClass: 'bg-sun text-navy',
    gradient: 'from-sun to-sun-soft',
  },
  Hobby: {
    icon: Palette,
    badgeClass: 'bg-sun text-navy',
    gradient: 'from-sun-soft to-sky-light',
  },
  Sport: {
    icon: Dumbbell,
    badgeClass: 'bg-sky text-white',
    gradient: 'from-sky to-navy',
  },
  Zorg: {
    icon: HeartHandshake,
    badgeClass: 'bg-sky text-white',
    gradient: 'from-sky-light to-sky',
  },
  Duurzaamheid: {
    icon: Leaf,
    badgeClass: 'bg-navy text-white',
    gradient: 'from-navy-soft to-navy',
  },
}

/**
 * Each groep can show up to two action links. Supported types:
 * 'website' | 'whatsapp' | 'facebook' | 'meer-info' | 'meedoen'
 */
export const groepen = [
  {
    id: 1,
    naam: 'Buurtgroep Centrum Son',
    categorie: 'Buurt',
    beschrijving:
      'Wij zetten ons in voor een gezellig en veilig centrum. Van buurtbarbecues tot het groenonderhoud in de straat, iedereen is welkom.',
    afbeelding: groepBuurtgroep,
    datum: '2026-06-12',
    links: [
      { type: 'website', url: '#' },
      { type: 'whatsapp', url: '#' },
    ],
  },
  {
    id: 2,
    naam: 'Wandelen met Ouderen',
    categorie: 'Zorg',
    beschrijving:
      'Elke woensdagochtend maken we een mooie wandeling door de Sonse bossen. Speciaal voor senioren die graag in beweging blijven.',
    afbeelding: groepWandelen,
    datum: '2026-06-10',
    links: [
      { type: 'facebook', url: '#' },
      { type: 'meer-info', url: '#' },
    ],
  },
  {
    id: 3,
    naam: 'Bridgeclub de Breugel',
    categorie: 'Hobby',
    beschrijving:
      'Een gezellige vereniging voor bridgers van alle niveaus. We spelen wekelijks in de Boerderij. Kom gerust eens kijken en speel mee.',
    afbeelding: groepBridge,
    datum: '2026-06-08',
    links: [{ type: 'website', url: '#' }],
  },
  {
    id: 4,
    naam: "Dorpsmoestuin 'De Groene Hand'",
    categorie: 'Duurzaamheid',
    beschrijving:
      'Samen biologisch tuinieren en leren over duurzaamheid. We delen de oogst en organiseren regelmatig workshops over moestuinieren.',
    afbeelding: groepMoestuin,
    datum: '2026-06-05',
    links: [
      { type: 'whatsapp', url: '#' },
      { type: 'meedoen', url: '#' },
    ],
  },
  {
    id: 5,
    naam: 'Tennisvereniging De Meppers',
    categorie: 'Sport',
    beschrijving:
      'Sportiviteit en gezelligheid gaan bij ons hand in hand. Voor jong en oud, competitie of recreatief. Onze kantine is het kloppend hart.',
    afbeelding: groepTennis,
    datum: '2026-06-02',
    links: [
      { type: 'website', url: '#' },
      { type: 'facebook', url: '#' },
    ],
  },
  {
    id: 6,
    naam: 'Breicafé Son',
    categorie: 'Hobby',
    beschrijving:
      'Iedere dinsdagmiddag breien en haken we samen onder het genot van een kopje koffie. Gezelligheid en creativiteit staan voorop.',
    datum: '2026-05-28',
    links: [
      { type: 'whatsapp', url: '#' },
      { type: 'meer-info', url: '#' },
    ],
  },
  {
    id: 7,
    naam: 'Buurtpreventie Breugel-Oost',
    categorie: 'Buurt',
    beschrijving:
      'Samen houden we onze wijk veilig en leefbaar. We lopen rondes, delen tips en werken nauw samen met wijkagenten en gemeente.',
    datum: '2026-05-25',
    links: [
      { type: 'website', url: '#' },
      { type: 'whatsapp', url: '#' },
    ],
  },
  {
    id: 8,
    naam: 'Hardloopgroep De Sonse Lopers',
    categorie: 'Sport',
    beschrijving:
      'Van beginner tot gevorderde: bij ons loopt iedereen mee. Twee keer per week trainen we samen, met begeleiding en veel plezier.',
    datum: '2026-05-21',
    links: [
      { type: 'facebook', url: '#' },
      { type: 'meer-info', url: '#' },
    ],
  },
  {
    id: 9,
    naam: 'Maatjesproject Eenzaamheid',
    categorie: 'Zorg',
    beschrijving:
      'We koppelen vrijwilligers aan dorpsgenoten die behoefte hebben aan contact. Een kop koffie, een gesprek of samen op pad.',
    datum: '2026-05-18',
    links: [
      { type: 'whatsapp', url: '#' },
      { type: 'meedoen', url: '#' },
    ],
  },
  {
    id: 10,
    naam: 'Repair Café Son en Breugel',
    categorie: 'Duurzaamheid',
    beschrijving:
      'Gooi niet weg, maar repareer! Vrijwilligers helpen u kapotte spullen weer werkend te krijgen. Goed voor uw portemonnee én het milieu.',
    datum: '2026-05-14',
    links: [
      { type: 'website', url: '#' },
      { type: 'facebook', url: '#' },
    ],
  },
  {
    id: 11,
    naam: 'Fotoclub Het Juiste Moment',
    categorie: 'Hobby',
    beschrijving:
      'Liefhebbers van fotografie ontmoeten elkaar maandelijks. We delen tips, organiseren fototochten en exposeren ons werk in het dorp.',
    datum: '2026-05-10',
    links: [{ type: 'website', url: '#' }],
  },
  {
    id: 12,
    naam: 'Yoga in het Park',
    categorie: 'Sport',
    beschrijving:
      'Ontspan en kom tot rust met onze buitenyoga. Iedere zaterdagochtend in het Vroonhovenpark, voor alle niveaus en leeftijden.',
    datum: '2026-05-06',
    links: [
      { type: 'whatsapp', url: '#' },
      { type: 'meer-info', url: '#' },
    ],
  },
  {
    id: 13,
    naam: 'Speeltuinvereniging De Vrolijke Kabouter',
    categorie: 'Buurt',
    beschrijving:
      'Wij beheren en onderhouden de buurtspeeltuin. Met vrijwilligers organiseren we feesten en zorgen we voor veilig buitenspelen.',
    datum: '2026-05-02',
    links: [
      { type: 'facebook', url: '#' },
      { type: 'meedoen', url: '#' },
    ],
  },
  {
    id: 14,
    naam: 'Mantelzorg Ontmoetingsgroep',
    categorie: 'Zorg',
    beschrijving:
      'Een veilige plek voor mantelzorgers om ervaringen te delen en even op adem te komen. Samen sta je sterker.',
    datum: '2026-04-28',
    links: [{ type: 'meer-info', url: '#' }],
  },
  {
    id: 15,
    naam: 'Energiecoöperatie Duurzaam SenB',
    categorie: 'Duurzaamheid',
    beschrijving:
      'Inwoners die samen werken aan een energieneutraal dorp. Van zonnepanelen tot voorlichting: doe mee aan de energietransitie.',
    datum: '2026-04-24',
    links: [
      { type: 'website', url: '#' },
      { type: 'whatsapp', url: '#' },
    ],
  },
  {
    id: 16,
    naam: 'Schaakclub De Loper',
    categorie: 'Hobby',
    beschrijving:
      'Wekelijks schaken in een ontspannen sfeer. Van beginners tot clubspelers, iedereen vindt bij ons een tegenstander van niveau.',
    datum: '2026-04-20',
    links: [{ type: 'website', url: '#' }],
  },
  {
    id: 17,
    naam: 'Jeu de Boules Club Son',
    categorie: 'Sport',
    beschrijving:
      'Gooien, lachen en genieten. Op onze banen is iedereen welkom voor een potje jeu de boules en een gezellige nazit.',
    datum: '2026-04-16',
    links: [
      { type: 'facebook', url: '#' },
      { type: 'meer-info', url: '#' },
    ],
  },
  {
    id: 18,
    naam: 'Buurttuin De Bloemenweide',
    categorie: 'Buurt',
    beschrijving:
      'Samen maken we de buurt groener en mooier. We onderhouden perken en plantenbakken en organiseren plantjesruildagen.',
    datum: '2026-04-12',
    links: [
      { type: 'whatsapp', url: '#' },
      { type: 'meedoen', url: '#' },
    ],
  },
  {
    id: 19,
    naam: 'Samen Koken & Eten',
    categorie: 'Zorg',
    beschrijving:
      'Eén keer per week koken en eten we samen in het dorpshuis. Gezond, betaalbaar en vooral gezellig voor wie niet graag alleen eet.',
    datum: '2026-04-08',
    links: [
      { type: 'facebook', url: '#' },
      { type: 'meer-info', url: '#' },
    ],
  },
  {
    id: 20,
    naam: 'Zwerfafval Opruimteam',
    categorie: 'Duurzaamheid',
    beschrijving:
      'Met grijpers en hesjes houden we het dorp schoon. Sluit aan bij een van onze maandelijkse opruimacties door Son en Breugel.',
    datum: '2026-04-04',
    links: [
      { type: 'whatsapp', url: '#' },
      { type: 'meedoen', url: '#' },
    ],
  },
]
