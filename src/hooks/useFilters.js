import { useState } from 'react'
import { organisations } from '../services/organisaties.js'

export function useFilters() {
  const [activeFilters, setActiveFilters] = useState(['Alle'])

  function toggleFilter(cat) {
    if (cat === 'Alle') {
      setActiveFilters(['Alle'])
      return
    }
    setActiveFilters((prev) => {
      const without = prev.filter((c) => c !== 'Alle')
      if (without.includes(cat)) {
        const next = without.filter((c) => c !== cat)
        return next.length === 0 ? ['Alle'] : next
      }
      return [...without, cat]
    })
  }

  const filtered = activeFilters.includes('Alle')
    ? organisations
    : organisations.filter((o) => activeFilters.includes(o.categorie))

  return { activeFilters, toggleFilter, filtered }
}
