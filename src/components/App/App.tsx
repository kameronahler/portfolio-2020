// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// components
import { GlobalStyle } from '../../styles/GlobalStyle'
import { Sidebar } from '../Sidebar/Sidebar'
import { Page } from '../Page/Page'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <header>
          <Sidebar />
        </header>
        <main>
          <Page />
        </main>
      </Router>
    </>
  )
}
