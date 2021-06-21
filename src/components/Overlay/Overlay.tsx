// react
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

// packages
import { StyledOverlay } from './StyledOverlay'

export const Overlay = ({ appendToId, ariaLabel, setOpen }: IOverlay) => {
  // handlers
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }
  const handleOverlayClick = () => setOpen(false)

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.height = null
      document.body.style.overflow = null
    }
  }, [])

  return createPortal(
    <StyledOverlay
      aria-label={ariaLabel}
      onClick={handleOverlayClick}
      role='button'
    />,
    document.getElementById(appendToId)
  )
}
