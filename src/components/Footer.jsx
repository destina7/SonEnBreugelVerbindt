import { Link } from 'react-router-dom'
import { Share2 } from 'lucide-react'

const footerLinks = [
  { label: 'Over Ons', to: '/over-ons' },
  { label: 'Vrijwilligers', to: '/vrijwilligers' },
  { label: 'Veelgestelde Vragen', to: '/faq' },
  { label: 'Privacybeleid', to: '/privacy' },
  { label: 'Toegankelijkheid', to: '/toegankelijkheid' },
  { label: 'Cookies & Colofon', to: '/colofon' },
]

/* Small abstract "connect" mark, echoing the brand logo */
function FooterMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="12" r="2.4" />
      <circle cx="19" cy="12" r="2.4" />
      <circle cx="8.5" cy="19" r="2.4" />
      <circle cx="15.5" cy="19" r="2.4" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t-4 border-sun bg-sky text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <FooterMark />
              <span className="text-xl font-extrabold">Son en Breugel Verbindt</span>
            </div>
            <p className="mt-4 text-white/90">
              Het digitale dorpsplein voor alle inwoners. Verbinden, ontmoeten en helpen.
            </p>
          </div>

          <nav aria-label="Footer navigatie">
            <ul className="grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-semibold text-white/95 transition hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/25 pt-6">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} Son en Breugel Verbindt. Alle rechten voorbehouden.
          </p>
          <button
            type="button"
            aria-label="Deel deze pagina"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'Son en Breugel Verbindt', url: window.location.href })
              }
            }}
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
