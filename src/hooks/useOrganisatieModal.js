import { useState } from 'react'

export function useOrganisatieModal() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOrg, setSelectedOrg] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  return {
    modalOpen,
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
    selectedOrg,
    setSelectedOrg,
    showSuccess,
    handleSuccess: () => { setModalOpen(false); setShowSuccess(true) },
    closeSuccess: () => setShowSuccess(false),
  }
}
