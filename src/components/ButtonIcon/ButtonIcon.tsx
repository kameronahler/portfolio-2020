//react
import React from 'react'

// packages
import styled from 'styled-components'

// type
export enum ButtonIconVariants {
  SECONDARY = 'secondary',
}

interface IButtonIcon {
  'aria-label': string
  $colorFill?: boolean
  $variant?: ButtonIconVariants
}

type TypeButtonIconProps = React.PropsWithChildren<IButtonIcon> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

// styled
const StyledButtonIcon = styled.button<TypeButtonIconProps>`
  border: 0.0625rem solid var(--color-primary);
  border-radius: 50%;
  color: var(--color-primary);
  display: grid;
  place-items: center;
  padding: 0.25rem;
  transition-duration: var(--duration-250ms);
  transition-property: background-color, color;
  transition-timing-function: var(--easing-default);

  svg {
    display: block;
    height: 2rem;
    width: 2rem;
  }

  ${({ $colorFill }) =>
    $colorFill
      ? `
      [fill] {
        fill: currentColor;
      }
    `
      : `
      [stroke] {
        stroke: currentColor;
      }
    `}

  ${({ $variant }) =>
    $variant === ButtonIconVariants.SECONDARY &&
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
      $variant === ButtonIconVariants.SECONDARY &&
      `
        border-color: var(--color-primary);
        transition-property: background-color, border-color, color;
    `}
  }
`

export const ButtonIcon = (props: TypeButtonIconProps) => (
  <StyledButtonIcon {...props} />
)
