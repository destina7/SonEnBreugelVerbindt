import { Link } from 'react-router-dom'
import {
  Search,
  Users,
  CalendarDays,
  Car,
  Bike,
  Map,
  MessagesSquare,
  PartyPopper,
  ArrowRight,
  Phone,
  Mail,
  Headset,
} from 'lucide-react'
import heroImage from '../assets/home-hero.jpg'

const services = [
  {
    title: 'ANWB AutoMaatje',
    text: 'Vrijwilligers vervoeren minder mobiele plaatsgenoten in hun eigen auto.',
    to: '/automaatjes',
    icon: Car,
    iconClass: 'bg-navy text-white',
    tag: 'Vervoer',
  },
  {
    title: 'FietsMaatje',
    text: 'Samen fietsen op een duofiets met trapondersteuning.',
    to: '/fietsmaatjes',
    icon: Bike,
    iconClass: 'bg-sun text-navy',
  },
  {
    title: 'Dorpsgids',
    text: 'Ontdek alle lokale organisaties, zorg en verenigingen.',
    to: '/dorpsgids',
    icon: Map,
    iconClass: 'bg-sky-light text-navy',
  },
  {
    title: 'Groepen',
    text: 'Sluit je aan bij interessegroepen en buurtinitiatieven.',
    to: '/groepen',
    icon: MessagesSquare,
    iconClass: 'bg-cloud text-navy',
  },
  {
    title: 'Activiteiten',
    text: 'Bekijk wat er allemaal te doen is in ons dorp.',
    to: '/activiteiten',
    icon: PartyPopper,
    highlighted: true,
  },
]

function ServiceCard({ service }) {
  const Icon = service.icon

  if (service.highlighted) {
    return (
      <Link
        to={service.to}
        className="group relative flex flex-col rounded-2xl bg-sky p-7 text-white shadow-cta transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <ArrowRight
            className="h-5 w-5 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-6 text-xl font-extrabold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/90">{service.text}</p>
      </Link>
    )
  }

  return (
    <Link
      to={service.to}
      className="group relative flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition hover:-translate-y-0.5 hover:border-sky/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.iconClass}`}
        >
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        {service.tag ? (
          <span className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-navy">
            {service.tag}
          </span>
        ) : (
          <ArrowRight
            className="h-5 w-5 text-navy transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="mt-6 text-xl font-extrabold text-navy">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink">{service.text}</p>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Het dorpsplein van Son en Breugel met de kerktoren"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy/45" aria-hidden="true" />

        <div className="mx-auto max-w-3xl px-4 pb-28 pt-16 text-center sm:px-6 sm:pt-20">
          <span className="inline-block rounded-full bg-sky px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Gemeente Son en Breugel
          </span>
          <h1 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
            Welkom in Son en Breugel
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Vind lokale activiteiten, ontmoet buurtgenoten en ontdek diensten die ons dorp
            verbinden. Samen maken we Son en Breugel nog mooier.
          </p>

          {/* Search bar */}
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-xl items-center rounded-full bg-white p-1.5 shadow-lg"
          >
            <Search className="ml-4 h-5 w-5 shrink-0 text-navy/60" aria-hidden="true" />
            <input
              type="search"
              placeholder="Waar bent u naar op zoek?"
              aria-label="Zoeken op de website"
              className="w-full bg-transparent px-3 py-2.5 text-navy placeholder:text-ink/60 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-sky px-7 py-2.5 font-bold text-white transition hover:bg-sky/90"
            >
              Zoeken
            </button>
          </form>

          {/* Stats */}
          <dl className="mx-auto mt-10 flex max-w-xl flex-col justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-4 rounded-2xl bg-white px-7 py-4 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun">
                <Users className="h-6 w-6 text-navy" aria-hidden="true" />
              </span>
              <div className="text-left">
                <dt className="sr-only">Actieve leden</dt>
                <dd className="text-2xl font-extrabold text-navy">1.200+</dd>
                <p className="text-sm font-semibold text-ink">Actieve leden</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white px-7 py-4 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-light">
                <CalendarDays className="h-6 w-6 text-navy" aria-hidden="true" />
              </span>
              <div className="text-left">
                <dt className="sr-only">Activiteiten deze week</dt>
                <dd className="text-2xl font-extrabold text-navy">45+</dd>
                <p className="text-sm font-semibold text-ink">Activiteiten deze week</p>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ SNELLE TOEGANG ============ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Snelle Toegang</h2>
            <p className="mt-2 text-ink">Kies een van de onderstaande diensten.</p>
          </div>
          <Link
            to="/diensten"
            className="group flex items-center gap-2 font-bold text-navy hover:text-sky"
          >
            Bekijk alle diensten
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* ============ HULP NODIG ============ */}
      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 rounded-3xl border-2 border-navy bg-sky p-8 sm:p-12 lg:flex-row lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Hulp Nodig? Wij staan voor u klaar.
              </h2>
              <p className="mt-4 text-lg text-white/95">
                Kunt u niet vinden wat u zoekt of heeft u direct persoonlijke ondersteuning
                nodig? Het CMD (Centrum Maatschappelijke Deelname) helpt u graag verder op
                werkdagen.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:0499491470"
                  className="flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 font-bold text-white transition hover:bg-navy-soft"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Bel: 0499 - 491 470
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-navy transition hover:bg-cloud"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Stuur een bericht
                </Link>
              </div>
            </div>

            <span
              className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-4 border-navy/20 bg-white"
              aria-hidden="true"
            >
              <Headset className="h-14 w-14 text-navy" />
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
