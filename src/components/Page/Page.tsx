// react
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// packages
import styled from 'styled-components'

// routes
import { routes } from '../../routes'

// theme
import { THEME } from '../../styles/Theme'

// styled
const StyledPageWrapper = styled.div`
  grid-column: 1 / -1;
`

const StyledTransitionInner = styled.div`
  &.enter-active,
  &.exit-active {
    @media (min-width: ${THEME.w.screenDesktop}) {
      transition-duration: var(--duration-page-transition-ms);
      transition-property: opacity, transform;
      transition-animation-timing-function: var(--easing-default);
    }
  }

  &.enter {
    @media (min-width: ${THEME.w.screenDesktop}) {
      opacity: 0.01;
      transform: translateX(2rem);
    }
  }

  &.enter-active {
    @media (min-width: ${THEME.w.screenDesktop}) {
      opacity: 1;
      transform: translateX(0);
      transition-delay: var(--duration-page-transition-ms);
    }
  }

  &.exit-active {
    @media (min-width: ${THEME.w.screenDesktop}) {
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transform: translateX(2rem);
      transition-timing-function: ease-in;
    }
  }
`

// constants
const PAGE_TRANSITION_DURATION = +THEME.duration.pageTransition * 2

export const Page = () => {
  const location = useLocation()

  return (
    <StyledPageWrapper>
      <TransitionGroup className='relative'>
        <CSSTransition key={location.key} timeout={PAGE_TRANSITION_DURATION}>
          <StyledTransitionInner>
            <Switch location={location}>
              {routes.map(({ name, component, path }) => {
                return (
                  <Route key={name} path={path} component={component} exact />
                )
              })}
            </Switch>
          </StyledTransitionInner>
        </CSSTransition>
      </TransitionGroup>
    </StyledPageWrapper>
  )
}
