import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Search, UserRound, HeartHandshake, Menu, X } from 'lucide-react'
import logo from '../assets/logo-horizontal.jpg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Nieuws', to: '/nieuws' },
  { label: 'AutoMaatjes', to: '/automaatjes' },
  { label: 'FietsMaatjes', to: '/fietsmaatjes' },
  { label: 'Dorpsgids', to: '/dorpsgids' },
  { label: 'Groepen', to: '/groepen' },
  { label: 'Activiteiten', to: '/activiteiten' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top row: logo + profile + volunteer CTA */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 pt-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Son en Breugel Verbindt - Home">
          <img src={logo} alt="Son en Breugel Verbindt" className="h-12 w-auto" />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/profiel"
            className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-sky"
          >
            <UserRound className="h-4 w-4" aria-hidden="true" />
            Profiel
          </Link>
          <Link
            to="/vrijwilligers"
            className="flex items-center gap-2 rounded-full bg-sky px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          >
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            Vrijwilliger worden
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="rounded-lg p-2 text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Bottom row: nav links + search */}
      <nav
        className={`${open ? 'block' : 'hidden'} border-t border-line md:block md:border-0`}
        aria-label="Hoofdnavigatie"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <ul className="flex flex-col gap-1 md:flex-row md:gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-1.5 text-sm font-semibold transition md:border-b-2 md:pb-2 ${
                      isActive
                        ? 'text-navy md:border-navy'
                        : 'text-navy/80 hover:text-sky md:border-transparent'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <form role="search" className="relative md:w-72" onSubmit={(e) => e.preventDefault()}>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/60"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Zoeken..."
              aria-label="Zoeken op de website"
              className="w-full rounded-full border border-line bg-cloud py-2.5 pl-10 pr-4 text-sm text-navy placeholder:text-ink/60 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30"
            />
          </form>
        </div>
      </nav>
    </header>
  )
}
