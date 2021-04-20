// react
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

// packages
import styled, { keyframes } from 'styled-components'

// styled
const KeyframeOverlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 95%;
  }
`

const StyledOverlay = styled.div`
  animation: ${KeyframeOverlayFadeIn} var(--easing-default)
    var(--duration-500ms) forwards;
  background-color: var(--color-overlay);
  height: 100vh;
  left: 0;
  opacity: 0.9;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: var(--z-overlay);
`

export const Overlay = ({
  dropdownExpanded,
  setDropdownExpanded,
}: IHomeMenuOverlay) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && dropdownExpanded) {
        setDropdownExpanded(false)
      }
    })
  })

  return dropdownExpanded
    ? createPortal(
        <StyledOverlay
          aria-label='Close menu'
          onClick={() => {
            setDropdownExpanded(!dropdownExpanded)
          }}
          role='button'
        ></StyledOverlay>,
        document.getElementById('app')
      )
    : null
}
