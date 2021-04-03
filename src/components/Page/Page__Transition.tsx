// react
import React from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledPage__Transition = styled.div`
  &.enter-active,
  &.exit-active {
    transition-duration: var(--duration-page-transition-ms);
    transition-property: opacity, transform;
  }

  &.enter {
    opacity: 0.01;
    transform: translateX(2rem);
  }

  &.enter-active {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--duration-page-transition-ms);
  }

  &.exit-active {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translateX(2rem);
    transition-timing-function: ease-in;
  }
`

export const Page__Transition = ({ children }) => {
  return <StyledPage__Transition>{children}</StyledPage__Transition>
}
