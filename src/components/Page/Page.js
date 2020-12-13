// packages
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// components
import PageHome from '../Pages/PageHome'
import PageExperience from '../Pages/PageExperience'
import PageWork from '../Pages/PageWork'
import PageAbout from '../Pages/PageAbout'
import PageContact from '../Pages/PageContact'

export default function Page() {
  const location = useLocation()
  const duration = +getComputedStyle(document.documentElement).getPropertyValue(
    '--page-transition-duration'
  )

  return (
    <div className='page'>
      <TransitionGroup className='page__transition-group'>
        <CSSTransition
          classNames='page__transition-'
          key={location.key}
          timeout={duration}
        >
          <div className='page__transition'>
            <Switch location={location}>
              <Route path='/' exact>
                <PageHome />
              </Route>
              <Route path='/experience' exact>
                <PageExperience />
              </Route>
              <Route path='/work' exact>
                <PageWork />
              </Route>
              <Route path='/about' exact>
                <PageAbout />
              </Route>
              <Route path='/contact' exact>
                <PageContact />
              </Route>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
