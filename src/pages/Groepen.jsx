import { useMemo, useState } from 'react'
import { UsersRound, ChevronLeft, ChevronRight, Mail } from 'lucide-react'
import {
  groepen,
  GROEP_CATEGORIES,
  SORT_OPTIONS,
} from '../services/groepen.js'
import GroepCard from '../components/GroepCard.jsx'
import heroImage from '../assets/home-hero.jpg'

const PAGE_SIZE = 6

/* Promo card that invites residents to start their own group. It takes one grid
   cell, so the first page reserves a slot for it and shows fewer groups. */
function StartGroepCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-sky p-8 text-center text-white shadow-cta">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
        <UsersRound className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-extrabold">Je eigen groep starten?</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/90">
        Mis je een groep of heb je een geweldig initiatief voor de buurt? Wij helpen je graag
        op weg.
      </p>
      <a
        href="#"
        className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-navy transition hover:bg-cloud"
      >
        Meld een initiatief aan
      </a>
    </div>
  )
}

export default function Groepen() {
  const [activeCategory, setActiveCategory] = useState('Alles')
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const list =
      activeCategory === 'Alles'
        ? groepen
        : groepen.filter((g) => g.categorie === activeCategory)

    const sorted = [...list]
    if (sort === 'newest') sorted.sort((a, b) => b.datum.localeCompare(a.datum))
    else if (sort === 'oldest') sorted.sort((a, b) => a.datum.localeCompare(b.datum))
    else if (sort === 'name') sorted.sort((a, b) => a.naam.localeCompare(b.naam, 'nl'))
    return sorted
  }, [activeCategory, sort])

  // The promo card occupies one cell on page 1, so that page shows PAGE_SIZE - 1 groups.
  const totalPages = Math.max(1, Math.ceil((filtered.length + 1) / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  const pageGroups = useMemo(() => {
    if (currentPage === 1) return filtered.slice(0, PAGE_SIZE - 1)
    const start = (currentPage - 1) * PAGE_SIZE - 1
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, currentPage])

  function selectCategory(cat) {
    setActiveCategory(cat)
    setPage(1)
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page header */}
        <h1 className="text-4xl font-extrabold text-navy">Groepen</h1>
        <p className="mt-3 max-w-2xl text-ink">
          Ontdek de kracht van samenwerking in ons dorp. Sluit je aan bij lokale initiatieven,
          ontmoet buren met dezelfde passies of start zelf iets nieuws. Samen maken we Son en
          Breugel bruisender en hechter.
        </p>

        {/* Filters + sort */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-2.5">
            {GROEP_CATEGORIES.map((cat) => {
              const active = cat === activeCategory
              return (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => selectCategory(cat)}
                    aria-pressed={active}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/40 ${
                      active
                        ? 'bg-sky text-white'
                        : 'border border-line bg-white text-navy hover:border-sky hover:text-sky'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              )
            })}
          </ul>

          <label className="flex shrink-0 items-center gap-2 text-sm text-ink">
            Sorteer op:
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value)
                setPage(1)
              }}
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-semibold text-navy focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/20"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Card grid */}
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-ink">
            Geen groepen gevonden voor deze categorie.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageGroups.map((groep) => (
              <GroepCard key={groep.id} groep={groep} />
            ))}
            {currentPage === 1 && <StartGroepCard />}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Vorige pagina"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:border-sky hover:text-sky disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm font-semibold text-navy">
              Pagina {currentPage} van {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Volgende pagina"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:border-sky hover:text-sky disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-cloud py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Blijf op de hoogte van alle groepen
            </h2>
            <p className="mt-4 max-w-lg text-ink">
              Ontvang wekelijks een overzicht van nieuwe initiatieven en evenementen van lokale
              groepen in je mailbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  required
                  placeholder="E-mailadres"
                  aria-label="E-mailadres"
                  className="w-full rounded-xl border border-line bg-white py-3.5 pl-11 pr-4 text-sm text-navy placeholder:text-ink/50 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/20"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-sky px-7 py-3.5 font-bold text-white shadow-cta transition hover:bg-sky/90"
              >
                Inschrijven
              </button>
            </form>
          </div>

          <img
            src={heroImage}
            alt="Het bruisende dorpsplein van Son en Breugel met terrassen en spelende kinderen"
            className="h-64 w-full rounded-2xl object-cover shadow-card lg:h-72"
          />
        </div>
      </section>
    </>
  )
}
