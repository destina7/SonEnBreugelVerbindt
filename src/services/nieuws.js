import gemeentehuis from '../assets/nieuws-gemeentehuis.png'
import tvZomermarkt from '../assets/nieuws-tv-zomermarkt.png'
import tvVoedselbank from '../assets/nieuws-tv-voedselbank.png'
import nieuwsSport from '../assets/nieuws-sport.png'
import nieuwsOnderwijs from '../assets/nieuws-onderwijs.png'

export const featuredArticle = {
  badge: 'Gemeente',
  datum: '12 Okt 2023',
  leestijd: '5 min leestijd',
  titel: 'Nieuwe plannen voor het dorpscentrum onthuld',
  excerpt:
    'De gemeenteraad heeft gisteravond de langverwachte plannen voor de herinrichting van het Kerkplein gepresenteerd. De focus ligt op meer groen, betere toegankelijkheid voor fietsers en een nieuw ontmoetingsgebied voor bewoners.',
  afbeelding: gemeentehuis,
}

export const tvVideos = [
  {
    id: 1,
    titel: 'Terugblik: Zomermarkt 2023 was een groot succes',
    meta: 'Gisteren gepubliceerd',
    duur: '04:15',
    afbeelding: tvZomermarkt,
  },
  {
    id: 2,
    titel: 'Interview: De nieuwe Voedselbank locatie',
    meta: '3 dagen geleden',
    duur: '12:30',
    afbeelding: tvVoedselbank,
  },
]

export const nieuwsCategories = [
  { naam: 'Gemeente & Politiek', count: 42 },
  { naam: 'Zorg & Welzijn', count: 28 },
  { naam: 'Sport & Cultuur', count: 35 },
  { naam: 'Onderwijs', count: 19 },
  { naam: 'Evenementen', count: 56 },
]

export const nieuwsArtikelen = [
  {
    id: 1,
    categorie: 'Sport',
    meta: 'Vandaag, 09:30',
    titel: 'Lokale tennisclub wint regionale kampioenschappen',
    excerpt:
      'Na een spannende finale heeft TC Sonia de felbegeerde beker in de wacht gesleept. De huldiging vindt aanstaande zaterdag plaats.',
    afbeelding: nieuwsSport,
  },
  {
    id: 2,
    categorie: 'Onderwijs',
    meta: 'Gisteren',
    titel: 'Basisschool De Vlinder opent nieuwe vleugel',
    excerpt:
      'Met de komst van vier nieuwe klaslokalen kan de school eindelijk de groeiende stroom leerlingen uit de nieuwe wijk opvangen.',
    afbeelding: nieuwsOnderwijs,
  },
]
