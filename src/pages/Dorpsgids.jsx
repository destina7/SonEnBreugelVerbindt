import { Plus } from 'lucide-react'
import { CATEGORIES } from './services/organisaties.js'
import { useFilters } from './hooks/useFilters.js'
import { useOrganisatieModal } from './hooks/useOrganisatieModal.js'
import OrganisatieCard from './frontend/OrganisatieCard.jsx'
import OrganisatieModal from './frontend/OrganisatieModal.jsx'
import OrganisatieDetailModal from './frontend/OrganisatieDetailModal.jsx'
import SuccesPopup from './frontend/SuccesPopup.jsx'

export default function Dorpsgids() {
  const { activeFilters, toggleFilter, filtered } = useFilters()
  const {
    modalOpen,
    openModal,
    closeModal,
    selectedOrg,
    setSelectedOrg,
    showSuccess,
    handleSuccess,
    closeSuccess,
  } = useOrganisatieModal()

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-navy">Dorpsgids</h1>
            <p className="mt-2 text-ink">
              Vind lokale organisaties, zorgverleners, verenigingen en meer in Son en Breugel.
            </p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="flex items-center gap-2 rounded-full bg-navy px-5 py-3 font-bold text-white shadow-card transition hover:bg-navy-soft"
          >
            Organisatie toevoegen
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </div>

        {/* Body: sidebar + grid */}
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Filter sidebar */}
          <aside className="w-full shrink-0 rounded-2xl border border-line bg-white p-6 shadow-card lg:w-52">
            <h2 className="text-base font-extrabold text-navy">Filters</h2>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-ink/60">
              Categorieën
            </p>
            <ul className="mt-3 space-y-3">
              {CATEGORIES.map((cat) => {
                const checked =
                  cat === 'Alle'
                    ? activeFilters.includes('Alle')
                    : activeFilters.includes(cat)
                return (
                  <li key={cat}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-navy">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleFilter(cat)}
                        className="h-4 w-4 cursor-pointer rounded border-line accent-navy"
                      />
                      {cat}
                    </label>
                  </li>
                )
              })}
            </ul>
          </aside>

          {/* Card grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-ink">
                Geen organisaties gevonden voor deze categorie.
              </p>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((org) => (
                  <OrganisatieCard
                    key={org.id}
                    org={org}
                    onMeerInfo={() => setSelectedOrg(org)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <OrganisatieModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
      />
      <OrganisatieDetailModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />
      <SuccesPopup isOpen={showSuccess} onClose={closeSuccess} />
    </>
  )
}
