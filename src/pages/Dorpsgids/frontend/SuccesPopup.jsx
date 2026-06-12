import { useEffect } from 'react'
import { Check } from 'lucide-react'

export default function SuccesPopup({ isOpen, onClose }) {
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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="succes-title"
    >
      <div
        className="w-full max-w-xs rounded-2xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sun">
          <Check className="h-8 w-8 text-navy" aria-hidden="true" />
        </span>

        <h2 id="succes-title" className="mt-5 text-xl font-extrabold leading-snug text-navy">
          Organisatie is aangemaakt!
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Je ontvangt binnenkort een mailtje met verdere instructies.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-sun py-4 font-bold text-navy transition hover:bg-sun/90"
        >
          Sluiten
        </button>
      </div>
    </div>
  )
}
