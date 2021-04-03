// react
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// components
import { Page } from '../Page/Page'
import { Sidebar } from '../Sidebar/Sidebar'

export const App = () => {
  return (
    <Router>
      <header>
        <Sidebar />
      </header>
      <main>
        <Page />
      </main>
    </Router>
  )
}
