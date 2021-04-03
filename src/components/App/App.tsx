// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// components
import { GlobalStyles } from '../../styles/GlobalStyles'
import { Sidebar } from '../Sidebar/Sidebar'
import { Page } from '../Page/Page'

export const App = () => {
  return (
    <>
      <GlobalStyles />
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
