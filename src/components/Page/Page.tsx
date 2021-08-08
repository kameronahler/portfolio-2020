// react
import React, { useRef, useEffect } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'

// helpers
import { useToggleBodyOverflow, useScrollTop } from '../../hooks/hooks'

// components
import {
  TransitionType,
  TransitionComponentGroup,
} from '../TransitionComponentGroup/TransitionComponentGroup'

// routes
import { routes } from '../../routes'

// theme
import { THEME } from '../../styles/Theme'

// styled
const StyledPageWrapper = styled.div`
  grid-column: 1 / -1;
`

export const Page = () => {
  const location = useLocation()
  const previousLocationRef = useRef<string | null>(location.pathname)

  const getLocationOrder = (location: string) =>
    routes.findIndex(route => route.path === location)

  const transitionDown =
    getLocationOrder(location.pathname) >
    getLocationOrder(previousLocationRef.current)
      ? true
      : false

  useEffect(() => {
    previousLocationRef.current = location.pathname
  }, [location])

  return (
    <StyledPageWrapper>
      <TransitionComponentGroup
        currentKey={location.key}
        onExit={() => {
          useToggleBodyOverflow(true)

          setTimeout(() => useScrollTop(), +THEME.duration.pageTransition - 50)
        }}
        onEntered={() => useToggleBodyOverflow(false)}
        transitionInnerProps={{ $transitionDown: transitionDown }}
        type={TransitionType.PAGE}
      >
        <Switch location={location}>
          {routes.map(({ name, component, path }) => {
            return <Route key={name} path={path} component={component} exact />
          })}
          <Route key={'redirect'} path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </TransitionComponentGroup>
    </StyledPageWrapper>
  )
}
