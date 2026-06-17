import { MapPin, Phone, Mail } from 'lucide-react'
import { categoryMeta } from '../services/organisaties.js'

export default function OrganisatieCard({ org, onMeerInfo }) {
  const meta = categoryMeta[org.categorie]
  const Icon = meta.icon

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full ${meta.iconClass}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}>
          {meta.label}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">{org.naam}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink">{org.beschrijving}</p>

      <div className="mt-4 space-y-1.5">
        <p className="flex items-center gap-2 text-xs text-ink">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-sky" aria-hidden="true" />
          {org.adres}
        </p>
        <p className="flex items-center gap-2 text-xs text-ink">
          {org.contact.type === 'phone' ? (
            <Phone className="h-3.5 w-3.5 shrink-0 text-sky" aria-hidden="true" />
          ) : (
            <Mail className="h-3.5 w-3.5 shrink-0 text-sky" aria-hidden="true" />
          )}
          {org.contact.value}
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <a
          href={org.website}
          className="flex-1 rounded-xl border-2 border-navy py-2 text-center text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
        >
          Website
        </a>
        <button
          type="button"
          onClick={onMeerInfo}
          className="flex-1 rounded-xl bg-navy py-2 text-sm font-bold text-white transition hover:bg-navy-soft"
        >
          Meer Info
        </button>
      </div>
    </article>
  )
}
