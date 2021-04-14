// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../styles/Theme'

// styled
const StyledHeader = styled.header`
  padding-top: 2rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    padding-top: unset;
  }
`

export const PageHeader = ({
  children,
  title,
}: {
  children?: React.ReactChild
  title: string | React.ReactNode
}) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      {children}
    </StyledHeader>
  )
}
