// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledCard = styled.div`
  &:nth-of-type(1) {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: 1 / 9;
    }
  }
  &:nth-of-type(2) {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: 9 / 13;
    }
  }
  &:nth-of-type(3) {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: 1 / 9;
    }
  }
  &:nth-of-type(4) {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: 9 / 13;
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
  children,
  src,
  title,
}: {
  alt?: string
  children?: React.ReactNode
  src?: string
  title?: string
}) => {
  return (
    <StyledCard className='card'>
      {src && <StyledIcon src={src} alt={alt} />}
      {title && <StyledH4>{title}</StyledH4>}
      {children}
    </StyledCard>
  )
}
