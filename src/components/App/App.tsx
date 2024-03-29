// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// package
import styled from 'styled-components'

// components
import { SiteNav } from '../SiteNav/SiteNav'
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
    grid-template-columns: var(--w-nav-desktop) 1fr;
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
          <SiteNav />
          <StyledMain id='main'>
            <Page />
          </StyledMain>
          <div id='overlay-container'></div>
        </StyledAppGrid>
      </Router>
    </>
  )
}
