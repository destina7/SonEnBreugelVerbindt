import { Link } from 'react-router-dom'
import { Car, CalendarDays, HeartHandshake } from 'lucide-react'
import HowItWorks from '../components/HowItWorks.jsx'
import heroImage from '../assets/automaatje-hero.webp'

const steps = [
  {
    title: 'Neem Contact Op',
    text: 'Bel ons minimaal 2 werkdagen van tevoren. We bespreken uw wensen en noteren uw aanvraag zorgvuldig.',
    footnote: { icon: 'phone', text: '0499 - 123 456', tone: 'navy' },
  },
  {
    title: 'Wij Zoeken een Match',
    text: 'Onze coördinatoren zoeken een beschikbare vrijwilliger in uw buurt. U wordt teruggebeld zodra we een chauffeur hebben gevonden.',
    footnote: { icon: 'hands', text: 'Persoonlijke aandacht', tone: 'gold' },
  },
  {
    title: 'De Rit Zelf',
    text: 'De chauffeur haalt u thuis op, rijdt u naar de bestemming en brengt u veilig weer thuis. U betaalt een kleine onkostenvergoeding.',
    footnote: { icon: 'money', text: '€ 0,35 per km', tone: 'navy' },
  },
]

export default function AutoMaatjes() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-navy">
            <Car className="h-4 w-4" aria-hidden="true" />
            Vervoer in de buurt
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="text-sky">Samen op weg met</span>{' '}
            <span className="text-sun">AutoMaatje</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
            AutoMaatje verbindt vrijwillige chauffeurs met plaatsgenoten die minder mobiel
            zijn. Voor een bezoek aan de kapper, het ziekenhuis of gewoon voor de
            gezelligheid. Comfortabel, betrouwbaar en altijd met een lach.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/automaatjes/rit-aanvragen"
              className="flex items-center gap-2 rounded-xl bg-sky px-6 py-3.5 font-bold text-white shadow-cta transition hover:bg-sky/90"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Rit Aanvragen
            </Link>
            <Link
              to="/vrijwilligers"
              className="flex items-center gap-2 rounded-xl border-2 border-navy px-6 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              Vrijwilliger Worden
            </Link>
          </div>
        </div>

        <img
          src={heroImage}
          alt="Een vrijwillige chauffeur helpt een oudere dame instappen bij een auto met ANWB AutoMaatje sticker"
          className="w-full rounded-3xl object-cover shadow-card lg:aspect-[4/4.2] lg:max-h-[600px]"
        />
      </section>

      {/* ============ HOE WERKT HET ============ */}
      <HowItWorks
        title="Hoe werkt het?"
        subtitle="In drie eenvoudige stappen regelt u uw vervoer. Zorgeloos en overzichtelijk."
        steps={steps}
      />
    </>
  )
}
