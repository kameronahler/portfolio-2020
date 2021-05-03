// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledCard = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: span 6;
    padding: 4rem;
  }
`

export const ContentCard = ({
  alt,
  children,
  src,
  title,
}: {
  alt?: string
  children?: React.ReactNode
  src?: string
  title?: string
}) => {
  return <StyledCard className='card'>{children}</StyledCard>
}
