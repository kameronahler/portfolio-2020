import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNav from '../AppNav/AppNav'

import PageHome from '../Pages/PageHome'
import PageExperience from '../Pages/PageExperience'
import PageWork from '../Pages/PageWork'
import PageAbout from '../Pages/PageAbout'
import PageContact from '../Pages/PageContact'

export default function PageRouter() {
  return (
    <Router>
      <AppNav />
      <main>
        <div className='page'>
          <Switch>
            <Route path='/' exact component={PageHome} />
            <Route path='/experience' component={PageExperience} />
            <Route path='/work' component={PageWork} />
            <Route path='/about' component={PageAbout} />
            <Route path='/contact' component={PageContact} />
          </Switch>
        </div>
      </main>
    </Router>
  )
}
