// react
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// routes
import { routes } from '../../routes'

// hooks
import { useCustomProp } from '../../hooks/hooks'

// components
import { PageHome } from '../Pages/PageHome'

// constants
const PAGE_TRANSITION_DURATION =
  +useCustomProp('--page-transition-duration') * 2

export const Page = () => {
  const location = useLocation()

  const jsxRoutes = routes.map(({ name, component, path }) => {
    return <Route key={name} path={path} component={component} exact />
  })

  return (
    <div className='page'>
      <TransitionGroup className='page__transition-group'>
        <CSSTransition
          classNames='page__transition-'
          key={location.key}
          timeout={PAGE_TRANSITION_DURATION}
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
