// react
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

// packages
import styled from 'styled-components'

// helper
import { useToggleBodyOverflow } from '../../hooks/hooks'

// components
import { StyledOverlay } from '../Overlay/StyledOverlay'

// theme
import { THEME } from '../../styles/Theme'

// assets
import { SVGClose } from '../../assets/SVGClose'

// styled
const StyledButton = styled.button`
  color: var(--color-text);
  height: 3rem;
  position: absolute;
  right: 0.5rem;
  transition-duration: var(--duration-250ms);
  transition-property: color;
  transition-timing-function: var(--easing-default);
  top: 0.5rem;
  width: 3rem;
  z-index: var(--z-above-overlay);

  @media (min-width: ${THEME.w.screenDesktop}) {
    height: 4rem;
    right: 1rem;
    top: 1rem;
    width: 4rem;
  }

  &:hover {
    color: var(--color-primary);
  }

  svg {
    display: block;

    rect {
      fill: currentColor;
    }
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
        <StyledButton aria-label={ariaLabel}>{SVGClose}</StyledButton>
      </StyledOverlay>
    </>,
    document.getElementById(appendToId)
  )
}
