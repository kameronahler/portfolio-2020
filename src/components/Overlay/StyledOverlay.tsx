// packages
import styled, { keyframes } from 'styled-components'

// theme
import { THEME } from '../../styles/Theme'

// styled
const KeyframeOverlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledOverlay = styled.div`
  animation: ${KeyframeOverlayFadeIn} var(--easing-default)
    var(--duration-500ms) forwards;
  cursor: pointer;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: var(--z-overlay);

  ${({ modal }: { modal?: boolean }) =>
    modal
      ? `
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;

        @media (min-width: ${THEME.w.screenDesktop}) {
          padding: 6rem;
        }
      `
      : null}

  &::after {
    background-color: var(--color-overlay);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    opacity: 0.95;
    top: 0;
    width: 100%;
  }
`
