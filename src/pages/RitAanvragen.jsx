import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MapPinned,
  Phone,
  LocateFixed,
  MapPin,
  Headset,
  Info,
  HeartHandshake,
  Clock,
  Banknote,
  ChevronRight,
} from 'lucide-react'
import testimonial from '../assets/rit-testimonial.png'

/* Larger, high-contrast inputs for accessibility — generous tap targets and
   readable text size suit the (often older) AutoMaatje audience. */
const inputBase =
  'w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-navy placeholder:text-ink/50 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30'

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-bold text-navy">
        {label}
      </label>
      {children}
    </div>
  )
}

const opmerkingen = [
  { icon: HeartHandshake, text: 'AutoMaatje is een gemeenschapsdienst gedreven door vrijwilligers.' },
  { icon: Clock, text: 'Vraag uw rit minimaal 2 dagen van tevoren aan om beschikbaarheid te garanderen.' },
  { icon: Banknote, text: 'Kosten worden berekend per kilometer (€0,35 per km plus parkeerkosten).' },
]

export default function RitAanvragen() {
  const navigate = useNavigate()
  const [verzonden, setVerzonden] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to backend
    setVerzonden(true)
  }

  return (
    <>
      {/* Header */}
      <div className="bg-cloud">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-sky sm:text-5xl">Rit Aanvragen</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink">
            Vul het onderstaande formulier in om uw rit aan te vragen bij onze vrijwillige
            chauffeurs. Wij nemen zo snel mogelijk contact met u op om de rit te bevestigen.
          </p>
        </div>
      </div>

      {/* Body: form + sidebar */}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Form card */}
        <div className="lg:col-span-2">
          <div className="rounded-2.5xl border border-line bg-white p-6 shadow-card sm:p-8">
            <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-navy">
              <MapPinned className="h-6 w-6 text-sky" aria-hidden="true" />
              Persoonlijke Gegevens &amp; Bestemming
            </h2>

            {verzonden ? (
              <div className="mt-8 rounded-2xl border border-sky/30 bg-sky-soft p-8 text-center">
                <p className="text-lg font-extrabold text-navy">Bedankt voor uw aanvraag!</p>
                <p className="mx-auto mt-2 max-w-md text-ink">
                  Wij nemen zo snel mogelijk telefonisch contact met u op om de rit te bevestigen.
                </p>
                <Link
                  to="/automaatjes"
                  className="mt-6 inline-flex rounded-xl bg-sky px-6 py-3 font-bold text-white transition hover:bg-sky/90"
                >
                  Terug naar AutoMaatjes
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Voornaam" htmlFor="voornaam">
                    <input id="voornaam" name="voornaam" type="text" placeholder="Bijv. Jan" required className={inputBase} />
                  </Field>
                  <Field label="Achternaam" htmlFor="achternaam">
                    <input id="achternaam" name="achternaam" type="text" placeholder="Bijv. de Vries" required className={inputBase} />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Telefoonnummer" htmlFor="telefoon">
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/50" aria-hidden="true" />
                        <input id="telefoon" name="telefoon" type="tel" placeholder="06 12345678" required className={`${inputBase} pl-12`} />
                      </div>
                    </Field>
                  </div>

                  <Field label="Ophaallocatie" htmlFor="ophaallocatie">
                    <div className="relative">
                      <LocateFixed className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/50" aria-hidden="true" />
                      <input id="ophaallocatie" name="ophaallocatie" type="text" placeholder="Straatnaam en huisnummer" required className={`${inputBase} pl-12`} />
                    </div>
                  </Field>
                  <Field label="Bestemming" htmlFor="bestemming">
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/50" aria-hidden="true" />
                      <input id="bestemming" name="bestemming" type="text" placeholder="Naam bestemming of adres" required className={`${inputBase} pl-12`} />
                    </div>
                  </Field>

                  <Field label="Datum van de rit" htmlFor="datum">
                    <input id="datum" name="datum" type="date" required className={inputBase} />
                  </Field>
                  <Field label="Ophaaltijd" htmlFor="ophaaltijd">
                    <input id="ophaaltijd" name="ophaaltijd" type="time" required className={inputBase} />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Bijzonderheden" htmlFor="bijzonderheden">
                      <textarea
                        id="bijzonderheden"
                        name="bijzonderheden"
                        rows={3}
                        placeholder="Bijv. hulp bij instappen, rollator mee, of extra tussenstop..."
                        className={`${inputBase} resize-none`}
                      />
                    </Field>
                  </div>
                </div>

                <div className="mt-8 flex flex-col-reverse items-center gap-4 border-t border-line pt-6 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => navigate('/automaatjes')}
                    className="font-bold uppercase tracking-wide text-sky transition hover:text-sky/80"
                  >
                    Annuleren
                  </button>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-cta transition hover:bg-sky/90 sm:w-auto"
                  >
                    Rit aanvraag versturen
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Hulp Nodig */}
          <div className="rounded-2.5xl bg-sky p-6 text-white shadow-cta">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
              <Headset className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-extrabold">Hulp Nodig?</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Heeft u moeite met het online aanvragen van een rit? Bel de buurtbalie tijdens
              kantooruren voor persoonlijke ondersteuning.
            </p>
            <a
              href="tel:0499123456"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-bold text-sky transition hover:bg-cloud"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              0499 – 123 456
            </a>
          </div>

          {/* Belangrijke opmerking */}
          <div className="rounded-2.5xl border border-line bg-white p-6 shadow-card">
            <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-navy">
              <Info className="h-5 w-5 text-sky" aria-hidden="true" />
              Belangrijke opmerking
            </h2>
            <ul className="mt-5 space-y-4">
              {opmerkingen.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-ink">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <div className="relative overflow-hidden rounded-2.5xl shadow-card">
            <img src={testimonial} alt="Een glimlachende oudere man als passagier in de auto" className="h-52 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />
            <p className="absolute inset-x-0 bottom-0 p-5 text-base font-semibold italic text-white">
              &ldquo;Altijd een fijn praatje onderweg naar de afspraak.&rdquo;
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
