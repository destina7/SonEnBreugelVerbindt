import { useEffect, useRef, useState } from 'react'
import { X, Camera, Phone, Globe, MapPin } from 'lucide-react'

function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-sky"> *</span>}
      </label>
      {children}
    </div>
  )
}

const inputBase =
  'w-full rounded-xl border border-line bg-cloud px-4 py-3 text-sm text-navy placeholder:text-ink/50 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/20'

export default function OrganisatieModal({ isOpen, onClose, onSuccess }) {
  const [logoPreview, setLogoPreview] = useState(null)
  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    website: '',
    adres: '',
    beschrijving: '',
  })
  const fileInputRef = useRef(null)
  const firstFocusRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) firstFocusRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  function handleLogoChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setLogoPreview(URL.createObjectURL(file))
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to backend
    onSuccess()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <button
            ref={firstFocusRef}
            type="button"
            onClick={onClose}
            aria-label="Sluiten"
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy transition hover:bg-cloud"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 id="modal-title" className="text-base font-extrabold text-navy">
            Nieuwe Organisatie
          </h2>
          <button
            type="button"
            className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-soft"
          >
            Opslaan
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
          {/* Logo upload */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-cloud py-8 transition hover:border-sky hover:bg-sky-soft"
          >
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Logo preview"
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sun">
                  <Camera className="h-6 w-6 text-navy" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">Logo uploaden</span>
                <span className="text-xs text-ink/60">PNG of JPG (max. 2MB)</span>
              </>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg"
            className="hidden"
            onChange={handleLogoChange}
          />

          <Field label="Naam van de organisatie" required>
            <input
              type="text"
              name="naam"
              value={form.naam}
              onChange={handleChange}
              placeholder="Bv. Voetbalvereniging Son"
              required
              className={inputBase}
            />
          </Field>

          <Field label="Telefoonnummer">
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
              <input
                type="tel"
                name="telefoon"
                value={form.telefoon}
                onChange={handleChange}
                placeholder="0499-123456"
                className={`${inputBase} pl-10`}
              />
            </div>
          </Field>

          <Field label="Website URL">
            <div className="relative">
              <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://www.voorbeeld.nl"
                className={`${inputBase} pl-10`}
              />
            </div>
          </Field>

          <Field label="Adres">
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
              <input
                type="text"
                name="adres"
                value={form.adres}
                onChange={handleChange}
                placeholder="Straatnaam 1, 5691 AA Son"
                className={`${inputBase} pl-10`}
              />
            </div>
          </Field>

          <Field label="Beschrijving">
            <textarea
              name="beschrijving"
              value={form.beschrijving}
              onChange={handleChange}
              rows={4}
              placeholder="Vertel meer over de activiteiten en doelgroep van deze organisatie..."
              className={`${inputBase} resize-none`}
            />
          </Field>

          <div className="flex flex-col gap-3 pb-2 pt-1">
            <button
              type="submit"
              className="w-full rounded-full bg-navy py-4 font-bold text-white transition hover:bg-navy-soft"
            >
              Organisatie toevoegen
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-full border-2 border-navy py-4 font-bold text-navy transition hover:bg-cloud"
            >
              Annuleren
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
