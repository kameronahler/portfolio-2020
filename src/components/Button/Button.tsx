//react
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledButton = styled.button`
  border: 0.0625rem var(--color-primary) solid;
  border-radius: 0.25rem;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  padding: 1rem 1.5rem;
  transition-duration: var(--duration-250ms);
  transition-property: background-color, color;
  transition-timing-function: var(--easing-default);

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <StyledButton {...props}></StyledButton>
}
