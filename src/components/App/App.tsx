// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// package
import styled from 'styled-components'

// components
import { Styles } from '../../styles/Styles'
import { Nav } from '../Nav/Nav'
import { Page } from '../Page/Page'

// theme
import { THEME } from '../../styles/Theme'

// styled
const StyledGrid = styled.div`
  background-color: var(--color-bg);
  margin: 0 auto;
  max-width: var(--w-screen-xl);

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: grid;
    grid-template-columns: 16rem repeat(12, minmax(0, 1fr));
  }
`
const StyledMain = styled.main`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: 2 / -1;
  }
`

export const App = () => {
  return (
    <>
      <Styles />
      <Router>
        <StyledGrid id='app'>
          <Nav />
          <StyledMain>
            <Page />
          </StyledMain>
        </StyledGrid>
      </Router>
    </>
  )
}
