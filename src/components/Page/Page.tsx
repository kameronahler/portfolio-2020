// react
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// routes
import { routes } from '../../routes'

// components
import { Page__Wrapper } from './Page__Wrapper'
import { Page__Transition } from './Page__Transition'

// constants
const PAGE_TRANSITION_DURATION = 1000

export const Page = () => {
  const location = useLocation()

  const jsxRoutes = routes.map(({ name, component, path }) => {
    return <Route key={name} path={path} component={component} exact />
  })

  return (
    <Page__Wrapper>
      <TransitionGroup style={{ position: 'relative' }}>
        <CSSTransition key={location.key} timeout={PAGE_TRANSITION_DURATION}>
          <Page__Transition>
            <Switch location={location}>{jsxRoutes}</Switch>
          </Page__Transition>
        </CSSTransition>
      </TransitionGroup>
    </Page__Wrapper>
  )
}
