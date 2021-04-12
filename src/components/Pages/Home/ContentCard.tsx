// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledCard = styled.div`
  &:nth-of-type(odd) {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: 1 / 5;
    }
  }

  &:nth-of-type(even) {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: 2 / 6;
    }
  }

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: inline-block;
  }
`

const StyledIcon = styled.img`
  display: block;
  height: 3em;
  margin-bottom: 1rem;
  width: 3rem;
`

const StyledH4 = styled.h4`
  margin-bottom: unset;
`

export const ContentCard = ({
  alt,
  src,
  title,
}: {
  alt: string
  src: string
  title: string
}) => {
  return (
    <StyledCard className='card'>
      <StyledIcon src={src} alt={alt} />
      <StyledH4>{title}</StyledH4>
    </StyledCard>
  )
}
