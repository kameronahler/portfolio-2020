// react
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

// helpers
import { useToggleBodyOverflow } from '../../hooks/hooks'

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
    useToggleBodyOverflow(true)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      useToggleBodyOverflow(true)
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
