import { Link } from 'react-router-dom'
import { Bike, UserPlus } from 'lucide-react'
import HowItWorks from '../components/HowItWorks.jsx'
import heroImage from '../assets/fietsmaatje-hero.jpg'

const steps = [
  {
    title: 'Neem Contact Op',
    text: 'Bel ons minimaal 2 werkdagen van tevoren. We bespreken uw wensen en noteren uw aanvraag zorgvuldig.',
    footnote: { icon: 'phone', text: '0499 - 123 456', tone: 'navy' },
  },
  {
    title: 'Wij Zoeken een Match',
    text: 'Onze coördinatoren zoeken een beschikbare vrijwilliger in uw buurt. U wordt teruggebeld zodra we een begeleider hebben gevonden.',
    footnote: { icon: 'hands', text: 'Persoonlijke aandacht', tone: 'gold' },
  },
  {
    title: 'De Rit Zelf',
    text: 'De begeleider haalt u thuis op met de duofiets, fietst samen met u en brengt u veilig weer thuis. U betaalt een kleine onkostenvergoeding.',
    footnote: { icon: 'money', text: '€ 0,35 per km', tone: 'navy' },
  },
]

export default function FietsMaatjes() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-white">
            <Bike className="h-4 w-4" aria-hidden="true" />
            Samen op pad
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Samen Fietsen, Samen Genieten met FietsMaatje
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
            Kunt u niet meer zelfstandig fietsen, maar wilt u wel graag naar buiten? Met
            FietsMaatjes Son en Breugel fietst u veilig en gezellig samen met een
            vrijwilliger op onze comfortabele duofiets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/fietsmaatjes/rit-aanvragen"
              className="flex items-center gap-2 rounded-xl bg-sky px-6 py-3.5 font-bold text-white shadow-cta transition hover:bg-sky/90"
            >
              <Bike className="h-4 w-4" aria-hidden="true" />
              Rit Aanvragen
            </Link>
            <Link
              to="/vrijwilligers"
              className="flex items-center gap-2 rounded-xl border-2 border-sky px-6 py-3.5 font-bold text-sky transition hover:bg-sky hover:text-white"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              Begeleider Worden
            </Link>
          </div>
        </div>

        <img
          src={heroImage}
          alt="Een oudere dame en een vrijwilliger samen op een duofiets"
          className="w-full rounded-3xl object-cover shadow-card lg:aspect-square lg:max-h-[600px]"
        />
      </section>

      {/* ============ HOE WERKT HET ============ */}
      <HowItWorks
        title="Hoe werkt FietsMaatje?"
        subtitle="In drie eenvoudige stappen regelt u een heerlijke fietstocht door de omgeving van Son en Breugel."
        steps={steps}
      />
    </>
  )
}
