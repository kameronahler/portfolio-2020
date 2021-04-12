// react
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

// packages
import styled from 'styled-components'

// styled
const StyledOverlay = styled.div`
  background-color: var(--color-overlay);
  height: 100vh;
  left: 0;
  opacity: 0.9;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 900;
`

export const Overlay = ({
  dropdownExpanded,
  setDropdownExpanded,
}: IHomeMenuOverlay) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setDropdownExpanded(!dropdownExpanded)
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
