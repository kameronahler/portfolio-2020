// react
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../styles/Theme'

// styled
const StyledTransitionInner = styled.div`
  &.enter,
  &.exit {
    transition-timing-function: var(--easing-default);
  }

  &.enter {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &.enter-active {
    transition-delay: var(--duration-page-transition-ms);
    transition-duration: var(--duration-page-transition-ms);
  }

  &.exit-active {
    transition-duration: var(--duration-page-transition-ms);
  }

  ${({ $type }) =>
    $type === TransitionType.FADE_IN_OUT &&
    `
      &.enter,
      &.exit {
        transition-property: opacity;
      }

      &.enter {
        opacity: 0;
      }

      &.enter-active {
        opacity: 1;
      }

      &.exit-active {
        opacity: 0;
      }
  `}

  ${({ $type, $transitionDown }) =>
    $type === TransitionType.PAGE &&
    `
      &.enter,
      &.exit {
        transition-property: opacity, transform;
      }

      &.enter {
        opacity: 0;
        transform: ${
          $transitionDown
            ? 'translate3d(0, 2rem, 0)'
            : 'translate3d(0, -2rem, 0)'
        };
      }

      &.enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      &.exit-active {
        opacity: 0;
      }
  `}

  ${({ $type }) =>
    $type === TransitionType.SCALE_IN_OUT &&
    `
    @media (min-width: ${THEME.w.screenDesktop}) {
      &.enter,
      &.exit {
        transition-property: opacity, transform;
      }

      &.enter {
        opacity: 0;
        transform: scale(.8);
      }

      &.enter-active {
        opacity: 1;
        transform: scale(1);
      }

      &.exit-active {
        opacity: 0;
        transform: scale(.9);
      }
    }
    `}

  ${({ $type, $transitionRight }) =>
    $type === TransitionType.HORIZONTAL &&
    `
      &.enter,
      &.exit {
        transition-property: opacity, transform;
      }

      &.enter {
        opacity: 0;
        transform: ${
          $transitionRight
            ? 'translate3d(2rem, 0, 0)'
            : 'translate3d(-2rem, 0, 0)'
        };
      }

      &.enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      &.exit-active {
        opacity: 0;
      }
    `}
`

export enum TransitionType {
  FADE_IN_OUT,
  HORIZONTAL,
  PAGE,
  SCALE_IN_OUT,
}

interface ITransitionComponentGroup {
  children: React.ReactElement
  currentKey: string | number
  onEntered?: () => void
  onExit?: () => void
  transitionInnerProps?: any
  type: TransitionType
}

export const TransitionComponentGroup = ({
  children,
  currentKey,
  onEntered,
  onExit,
  transitionInnerProps,
  type,
}: ITransitionComponentGroup) => (
  <TransitionGroup style={{ position: 'relative' }}>
    <CSSTransition
      key={currentKey}
      onExit={onExit}
      onEntered={onEntered}
      timeout={+THEME.duration.pageTransition * 2}
    >
      <StyledTransitionInner $type={type} {...transitionInnerProps}>
        {children}
      </StyledTransitionInner>
    </CSSTransition>
  </TransitionGroup>
)
