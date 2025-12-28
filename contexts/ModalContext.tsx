'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type LeadType = 'coaching' | 'lead-magnet' | 'email'

interface ModalContextType {
  isModalOpen: boolean
  leadType: LeadType
  openModal: (type: LeadType) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [leadType, setLeadType] = useState<LeadType>('email')

  const openModal = (type: LeadType) => {
    setLeadType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, leadType, openModal, closeModal }}>
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

