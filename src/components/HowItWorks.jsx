import { Phone, HeartHandshake, Banknote } from 'lucide-react'

const stepColors = ['bg-navy', 'bg-sun', 'bg-[#0E5E7E]']

/**
 * Reusable "Hoe werkt het?" section with three numbered step cards.
 * Used by both the AutoMaatjes and FietsMaatjes pages.
 */
export default function HowItWorks({ title, subtitle, steps }) {
  const footIcons = { phone: Phone, hands: HeartHandshake, money: Banknote }

  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink">{subtitle}</p>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const FootIcon = step.footnote ? footIcons[step.footnote.icon] : null
            return (
              <li
                key={step.title}
                className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card"
              >
                {/* soft decorative circle in the corner */}
                <span
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cloud"
                  aria-hidden="true"
                />
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white ${stepColors[i % stepColors.length]}`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">{step.text}</p>

                {step.footnote && (
                  <p
                    className={`mt-5 flex items-center gap-2 text-sm font-semibold ${
                      step.footnote.tone === 'gold' ? 'text-[#9A7B12]' : 'text-navy'
                    }`}
                  >
                    {FootIcon && <FootIcon className="h-4 w-4" aria-hidden="true" />}
                    {step.footnote.text}
                  </p>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
