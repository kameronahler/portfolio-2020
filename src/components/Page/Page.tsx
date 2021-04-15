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
  &.enter,
  &.exit {
    transition-property: opacity, transform;
    transition-timing-function: var(--easing-default);
  }

  &.enter {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, -1rem, 0);
    width: 100%;
  }

  &.enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: var(--duration-page-transition-ms);
    transition-duration: var(--duration-page-transition-ms);
  }

  &.exit-active {
    opacity: 0;
    transition-duration: var(--duration-page-transition-ms);
    transform: translate3d(0, 2rem, 0);
  }
`

// constants
const PAGE_TRANSITION_DURATION = +THEME.duration.pageTransition * 2

export const Page = () => {
  const location = useLocation()

  return (
    <StyledPageWrapper>
      <TransitionGroup className='relative'>
        <CSSTransition
          key={location.key}
          onExiting={() => {
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden'
            setTimeout(
              () => window.scroll(0, 0),
              +THEME.duration.pageTransition - 50
            )
          }}
          onEntered={() => {
            document.body.style.height = null
            document.body.style.overflow = null
          }}
          timeout={PAGE_TRANSITION_DURATION}
        >
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
