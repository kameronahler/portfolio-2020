import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageHome from '../Pages/PageHome'
import PageExperience from '../Pages/PageExperience'
import PageWork from '../Pages/PageWork'
import PageAbout from '../Pages/PageAbout'
import PageContact from '../Pages/PageContact'

export default function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={PageHome} />
        <Route path='/experience' exact component={PageExperience} />
        <Route path='/work' exact component={PageWork} />
        <Route path='/about' exact component={PageAbout} />
        <Route path='/contact' exact component={PageContact} />
      </Switch>
    </Router>
  )
}
