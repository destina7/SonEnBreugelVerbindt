import { Globe, MessageCircle, Facebook, ArrowRight } from 'lucide-react'
import { groepCategoryMeta } from '../services/groepen.js'

/* Action-link styling. Outline links share a neutral base; WhatsApp keeps its
   brand-green accent; "meer-info" / "meedoen" are the primary sky CTAs. */
const linkMeta = {
  website: { label: 'Website', icon: Globe, variant: 'outline' },
  facebook: { label: 'Facebook', icon: Facebook, variant: 'outline' },
  whatsapp: { label: 'WhatsApp', icon: MessageCircle, variant: 'whatsapp' },
  'meer-info': { label: 'Meer info', icon: null, variant: 'primary' },
  meedoen: { label: 'Meedoen', icon: null, variant: 'primary' },
}

const linkVariants = {
  outline:
    'border border-line bg-white text-navy hover:border-sky hover:text-sky',
  whatsapp:
    'border border-line bg-white text-[#16A34A] hover:border-[#16A34A] hover:bg-[#16A34A]/5',
  primary: 'bg-sky text-white hover:bg-sky/90',
}

function GroepLink({ type }) {
  const meta = linkMeta[type]
  if (!meta) return null
  const Icon = meta.icon

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/40 ${linkVariants[meta.variant]}`}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {meta.label}
    </a>
  )
}

export default function GroepCard({ groep }) {
  const meta = groepCategoryMeta[groep.categorie]
  const Icon = meta?.icon ?? ArrowRight

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition hover:-translate-y-0.5">
      {/* Photo when available, otherwise a brand gradient + category icon. The category badge is overlaid either way. */}
      <div
        className={`relative h-44 ${groep.afbeelding ? '' : `flex items-center justify-center bg-gradient-to-br ${meta?.gradient ?? 'from-sky to-navy'}`}`}
      >
        {groep.afbeelding ? (
          <img
            src={groep.afbeelding}
            alt={groep.naam}
            className="h-full w-full object-cover"
          />
        ) : (
          <Icon className="h-12 w-12 text-white/70" aria-hidden="true" />
        )}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${meta?.badgeClass ?? 'bg-sky text-white'}`}
        >
          {groep.categorie}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-extrabold leading-snug text-navy">{groep.naam}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink line-clamp-3">
          {groep.beschrijving}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {groep.links.map((link) => (
            <GroepLink key={link.type} type={link.type} />
          ))}
        </div>
      </div>
    </article>
  )
}
