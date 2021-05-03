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
  }
`

export const ContentCard = ({ children }: { children?: React.ReactNode }) => {
  return <StyledCard className='card'>{children}</StyledCard>
}
