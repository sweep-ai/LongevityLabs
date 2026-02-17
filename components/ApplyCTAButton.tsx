'use client'

import { useModal } from '@/contexts/ModalContext'

interface ApplyCTAButtonProps {
  className?: string
  children: React.ReactNode
}

export default function ApplyCTAButton({ className, children }: ApplyCTAButtonProps) {
  const { openModal } = useModal()
  return (
    <button
      type="button"
      onClick={() => openModal('apply-coaching')}
      className={className}
    >
      {children}
    </button>
  )
}
