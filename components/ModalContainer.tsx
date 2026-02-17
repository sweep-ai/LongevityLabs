'use client'

import { useModal } from '@/contexts/ModalContext'
import LeadCaptureModal from './LeadCaptureModal'
import ApplyForCoachingModal from './ApplyForCoachingModal'

export default function ModalContainer() {
  const { isModalOpen, leadType, redirectUrl, resourceTitle, closeModal } = useModal()

  if (!isModalOpen) return null

  if (leadType === 'apply-coaching') {
    return <ApplyForCoachingModal onClose={closeModal} />
  }

  return <LeadCaptureModal leadType={leadType} redirectUrl={redirectUrl} resourceTitle={resourceTitle} onClose={closeModal} />
}



