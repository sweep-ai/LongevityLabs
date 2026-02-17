'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type LeadType = 'book-call' | 'lead-magnet' | 'email' | 'apply-coaching'

interface ModalContextType {
  isModalOpen: boolean
  leadType: LeadType
  redirectUrl?: string
  resourceTitle?: string
  openModal: (type: LeadType, redirectUrl?: string, resourceTitle?: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [leadType, setLeadType] = useState<LeadType>('email')
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined)
  const [resourceTitle, setResourceTitle] = useState<string | undefined>(undefined)

  const openModal = (type: LeadType, url?: string, title?: string) => {
    setLeadType(type)
    setRedirectUrl(url)
    setResourceTitle(title)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setRedirectUrl(undefined)
    setResourceTitle(undefined)
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, leadType, redirectUrl, resourceTitle, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}


