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

const StyledSVGWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    margin-bottom: 2rem;
  }

  svg {
    display: block;
    height: 2rem;
    width: 2rem;

    [stroke] {
      stroke: var(--color-primary);
    }

    [fill] {
      fill: var(--color-primary);
    }
  }
`

export const ContentCard = ({
  svg,
  title,
  description,
  children,
}: IContentCard) => {
  return (
    <StyledCard className='card'>
      {svg && <StyledSVGWrapper>{svg}</StyledSVGWrapper>}
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
      {children}
    </StyledCard>
  )
}
