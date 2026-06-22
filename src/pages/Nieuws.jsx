import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  ArrowRight,
  Play,
  History,
  Network,
  Mail,
} from 'lucide-react'
import {
  featuredArticle,
  tvVideos,
  nieuwsCategories,
  nieuwsArtikelen,
} from '../services/nieuws.js'

function VideoCard({ video }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition hover:-translate-y-0.5">
      <div className="relative">
        <img src={video.afbeelding} alt={video.titel} className="h-44 w-full bg-cloud object-cover" />
        <span className="absolute bottom-3 right-3 rounded-md bg-navy/80 px-2 py-1 text-xs font-bold text-white">
          {video.duur}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-extrabold leading-snug text-navy">{video.titel}</h3>
        <p className="mt-2 text-xs text-ink/70">{video.meta}</p>
      </div>
    </article>
  )
}

function ArtikelRow({ artikel }) {
  return (
    <article className="flex gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition hover:border-sky/50 sm:gap-5">
      <img
        src={artikel.afbeelding}
        alt={artikel.titel}
        className="h-24 w-24 shrink-0 rounded-xl bg-cloud object-cover sm:h-28 sm:w-28"
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-sky-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-sky">
            {artikel.categorie}
          </span>
          <span className="text-xs text-ink/70">{artikel.meta}</span>
        </div>
        <h3 className="mt-2 text-lg font-extrabold leading-snug text-navy">{artikel.titel}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink line-clamp-2">{artikel.excerpt}</p>
      </div>
    </article>
  )
}

export default function Nieuws() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-sky">Nieuws en TV</h1>
          <p className="mt-3 max-w-xl text-ink">
            Blijf op de hoogte van alles wat er speelt in Son en Breugel. Lees het laatste lokale
            nieuws en bekijk onze videoreportages.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-bold text-navy transition hover:border-sky hover:text-sky"
          >
            <History className="h-4 w-4" aria-hidden="true" />
            Nieuws Geschiedenis
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl bg-sky px-4 py-2.5 text-sm font-bold text-white shadow-cta transition hover:bg-sky/90"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Son en Breugel TV
          </a>
        </div>
      </div>

      {/* Body: main + sidebar */}
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Main column */}
        <div className="lg:col-span-2">
          {/* Featured article */}
          <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="relative">
              <img
                src={featuredArticle.afbeelding}
                alt={featuredArticle.titel}
                className="h-64 w-full object-cover sm:h-80"
              />
              <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                {featuredArticle.badge}
              </span>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-5 text-xs text-ink/70">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {featuredArticle.datum}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {featuredArticle.leestijd}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                {featuredArticle.titel}
              </h2>
              <p className="mt-3 leading-relaxed text-ink">{featuredArticle.excerpt}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 font-bold text-sky transition hover:gap-2.5"
              >
                Lees volledig artikel
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* TV archief */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-navy">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky/10 text-sky">
                  <Play className="h-4 w-4" aria-hidden="true" />
                </span>
                Son en Breugel TV Archief
              </h2>
              <a href="#" className="text-sm font-bold text-sun transition hover:text-sun/80">
                Bekijk alles
              </a>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {tvVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>

          {/* Alle Nieuws */}
          <div className="mt-12">
            <h2 className="inline-block text-xl font-extrabold text-navy">Alle Nieuws</h2>
            <div className="mt-1 h-1 w-16 rounded-full bg-sky" aria-hidden="true" />

            <div className="mt-6 space-y-5">
              {nieuwsArtikelen.map((artikel) => (
                <ArtikelRow key={artikel.id} artikel={artikel} />
              ))}
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-xl border-2 border-navy py-4 font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              Laad meer nieuws
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categorieën */}
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-navy">
              <Network className="h-5 w-5 text-sky" aria-hidden="true" />
              Categorieën
            </h2>
            <ul className="mt-5 space-y-1">
              {nieuwsCategories.map((cat) => (
                <li key={cat.naam}>
                  <a
                    href="#"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-navy transition hover:bg-cloud"
                  >
                    {cat.naam}
                    <span className="rounded-md bg-cloud px-2 py-0.5 text-xs font-bold text-ink">
                      {cat.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="relative overflow-hidden rounded-2xl bg-sky p-6 text-white shadow-cta">
            <span
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-navy/20"
              aria-hidden="true"
            />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="relative mt-4 text-xl font-extrabold leading-snug">
              Mis geen enkel lokaal nieuws
            </h2>
            <p className="relative mt-2 text-sm leading-relaxed text-white/90">
              Schrijf je in voor de wekelijkse nieuwsbrief van Son en Breugel Verbindt.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-5 space-y-3">
              <input
                type="email"
                required
                placeholder="Jouw e-mailadres"
                aria-label="Jouw e-mailadres"
                className="w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-sm text-navy placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-navy/30"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-sun py-3 font-bold text-navy transition hover:bg-sun/90"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  )
}
