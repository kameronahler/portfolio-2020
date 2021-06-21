// react
import React from 'react'

// package
import styled from 'styled-components'
import { SVGGithub } from '../../assets/SVGGithub'
import { SVGCodepen } from '../../assets/SVGCodepen'
import { SVGDribbble } from '../../assets/SVGDribbble'

// styled
const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  svg {
    display: block;
    height: 1.5rem;
    width: 1.5rem;

    path {
      fill: var(--color-text);
      transition-duration: var(--duration-250ms);
      transition-property: fill;
      transition-timing-function: var(--easing-default);
    }
  }

  &:hover {
    path {
      fill: var(--color-primary);
    }
  }
`

export const SocialItems = () => (
  <>
    <li>
      <StyledLink
        target='_blank'
        href='https://github.com/kameronahler'
        aria-label='View GitHub'
      >
        {SVGGithub}
      </StyledLink>
    </li>
    <li>
      <StyledLink
        aria-label='View Codepen'
        href='https://codepen.io/kamtr0n'
        target='_blank'
      >
        {SVGCodepen}
      </StyledLink>
    </li>
    <li>
      <StyledLink
        aria-label='View Dribbble'
        href='https://dribbble.com/kamtr0n'
        target='_blank'
      >
        {SVGDribbble}
      </StyledLink>
    </li>
  </>
)
