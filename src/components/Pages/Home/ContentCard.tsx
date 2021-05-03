// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledCard = styled.div`
  grid-column: span 12;

  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: span 6;
    padding: 4rem;
    transition-duration: var(--duration-500ms);
    transition-property: opacity, transform;
    transition-timing-function: var(--easing-default);
  }

  .appear > & {
    @media (min-width: ${THEME.w.screenDesktop}) {
      opacity: 0.01;
      transform: scale(0.5);
    }
  }

  .appear-active > &,
  .appear-done > & {
    @media (min-width: ${THEME.w.screenDesktop}) {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ContentCard = ({ children }: { children?: React.ReactNode }) => {
  return <StyledCard className='card'>{children}</StyledCard>
}
