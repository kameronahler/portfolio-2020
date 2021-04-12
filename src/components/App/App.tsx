// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// package
import styled from 'styled-components'

// components
import { Nav } from '../Nav/Nav'
import { Page } from '../Page/Page'

// theme
import { Styles } from '../../styles/Styles'
import { THEME } from '../../styles/Theme'

// styled
const StyledAppGrid = styled.div`
  margin: 0 auto;
  max-width: var(--w-screen-xl);
  padding: var(--p-card);

  @media (min-width: ${THEME.w.screenDesktop}) {
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 16rem 1fr;
  }
`
const StyledMain = styled.main`
  @media (min-width: ${THEME.w.screenDesktop}) {
    column-gap: 1rem;
    display: grid;
    grid-column: 2 / -1;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`

export const App = () => {
  return (
    <>
      <Styles />
      <Router>
        <StyledAppGrid id='app'>
          <Nav />
          <StyledMain>
            <Page />
          </StyledMain>
        </StyledAppGrid>
      </Router>
    </>
  )
}
