// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// package
import styled from 'styled-components'

// components
import { GlobalStyle } from '../../styles/GlobalStyle'
import { Sidebar } from '../Sidebar/Sidebar'
import { Page } from '../Page/Page'

// theme
import { THEME } from '../../styles/GlobalTheme'

// styled
const StyledGrid = styled.div`
  background-color: var(--color-bg);
  margin: 0 auto;
  max-width: var(--w-screen-xl);

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`
const StyledMain = styled.main`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: 4 / -1;
  }
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <StyledGrid>
          <Sidebar />
          <StyledMain>
            <Page />
          </StyledMain>
        </StyledGrid>
      </Router>
    </>
  )
}
