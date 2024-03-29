//react
import React from 'react'

// packages
import styled from 'styled-components'

// type
export enum ButtonVariants {
  SECONDARY = 'secondary',
}

interface IButton {
  $variant?: ButtonVariants
}

type TypeButtonProps = React.PropsWithChildren<IButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

// styled
const StyledButton = styled.button<TypeButtonProps>`
  border: 0.0625rem solid var(--color-primary);
  border-radius: 0.25rem;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  padding: 1rem 1.5rem;
  transition-duration: var(--duration-250ms);
  transition-property: background-color, color;
  transition-timing-function: var(--easing-default);

  ${({ $variant }) =>
    $variant === ButtonVariants.SECONDARY &&
    `
      background-color: var(--color-bg-accent);
      border-color: var(--color-bg-accent);
      color: var(--text-inverse);
      transition-property: background-color, border-color, color;
  `}

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);

    ${({ $variant }) =>
      $variant === ButtonVariants.SECONDARY &&
      `
        border-color: var(--color-primary);
        transition-property: background-color, border-color, color;
    `}
  }
`

export const Button = (props: TypeButtonProps) => <StyledButton {...props} />
