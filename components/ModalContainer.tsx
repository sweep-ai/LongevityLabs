'use client'

import { useModal } from '@/contexts/ModalContext'
import LeadCaptureModal from './LeadCaptureModal'

export default function ModalContainer() {
  const { isModalOpen, leadType, closeModal } = useModal()

  if (!isModalOpen) return null

  return <LeadCaptureModal leadType={leadType} onClose={closeModal} />
}

