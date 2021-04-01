// packages
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// routes
import { routes } from '../../routes'
import { PageHome } from '../Pages/PageHome'

export const Page = () => {
  const location = useLocation()
  const pageTransitionDurations =
    +getComputedStyle(document.documentElement).getPropertyValue(
      '--page-transition-duration'
    ) * 2
  const jsxRoutes = routes.map(({ name, component, path }) => {
    return <Route key={name} path={path} component={component} exact />
  })

  return (
    <div className='page'>
      <TransitionGroup className='page__transition-group'>
        <CSSTransition
          classNames='page__transition-'
          key={location.key}
          timeout={pageTransitionDurations}
        >
          <div className='page__transition'>
            <Switch location={location}>
              {jsxRoutes}
              <Route component={PageHome} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
