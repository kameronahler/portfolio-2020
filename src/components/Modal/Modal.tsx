// react
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

// packages
import styled from 'styled-components'

// helper
import { useToggleBodyOverflow } from '../../hooks/hooks'

// components
import { StyledOverlay } from '../Overlay/StyledOverlay'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

// theme
import { THEME } from '../../styles/Theme'

// assets
import { SVGClose } from '../../assets/SVGClose'

// styled
const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  z-index: var(--z-above-overlay);

  @media (min-width: ${THEME.w.screenDesktop}) {
    right: 1.75rem;
    top: 1.75rem;
  }
`

export const Modal = ({ appendToId, ariaLabel, children, setOpen }: IModal) => {
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
      useToggleBodyOverflow(false)
    }
  }, [])

  return createPortal(
    <>
      <StyledOverlay
        ariaLabel={ariaLabel}
        modal={true}
        onClick={handleOverlayClick}
        role='button'
        tabindex='0'
      >
        {children}
        <StyledButtonWrapper>
          <ButtonIcon $colorFill={true} aria-label={ariaLabel}>
            {SVGClose}
          </ButtonIcon>
        </StyledButtonWrapper>
      </StyledOverlay>
    </>,
    document.getElementById(appendToId)
  )
}
