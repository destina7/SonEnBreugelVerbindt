import { useEffect } from 'react'
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react'

const categoryLabels = {
  'Zorg & Welzijn': 'Zorg',
  'Sport & Beweging': 'Sport',
  'Onderwijs & Jeugd': 'Onderwijs',
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-cloud text-navy">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-ink/60">{label}</p>
        <div className="mt-0.5 text-sm font-semibold text-navy">{children}</div>
      </div>
    </div>
  )
}

export default function OrganisatieDetailModal({ org, onClose }) {
  const isOpen = Boolean(org)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!org) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
    >
      <div
        className="w-full max-w-sm rounded-2xl border-2 border-navy bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <h2
            id="detail-modal-title"
            className="text-2xl font-extrabold leading-tight text-navy"
          >
            {org.naam}
          </h2>
          <span className="mt-1 shrink-0 rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase text-navy">
            {categoryLabels[org.categorie] ?? org.categorie}
          </span>
        </div>

        <div className="mt-5 space-y-4">
          <InfoRow icon={MapPin} label="Adres">
            {org.adres}
          </InfoRow>

          {org.contact.type === 'phone' && (
            <InfoRow icon={Phone} label="Telefoon">
              {org.contact.value}
            </InfoRow>
          )}

          {org.contact.type === 'email' && (
            <InfoRow icon={Mail} label="E-mail">
              <a href={`mailto:${org.contact.value}`} className="text-sky hover:underline">
                {org.contact.value}
              </a>
            </InfoRow>
          )}

          {org.website && org.website !== '#' && (
            <InfoRow icon={Globe} label="Website">
              <a
                href={org.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky hover:underline"
              >
                {org.website.replace(/^https?:\/\//, '')}
              </a>
            </InfoRow>
          )}
        </div>

        <div className="mt-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/60">
            Beschrijving
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{org.beschrijving}</p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sun py-3 font-bold text-navy transition hover:bg-sun/90"
          >
            Ga naar de website
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border-2 border-navy px-5 py-3 font-bold text-navy transition hover:bg-cloud"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  )
}
