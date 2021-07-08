//react
import React from 'react'

// packages
import styled from 'styled-components'

// types
export enum CardVariants {
  FLAT,
  OUTLINE,
}

interface ICardProps {
  children: React.ReactNode
  variant?: CardVariants
}

type ICardStyledProps = {
  $variant?: CardVariants
}

// styled
const StyledCard = styled.div<ICardStyledProps>`
  background-color: var(--color-bg-card);
  border-radius: var(--rounded-card);
  box-shadow: var(--shadow-card);
  padding: 2rem;

  ${$variant =>
    $variant === CardVariants.FLAT &&
    `
    box-shadow: unset;
    `}

  ${$variant =>
    $variant === CardVariants.OUTLINE &&
    `
    background-color: transparent;
    border: 0.0625rem solid var(--color-bg-dark);
    box-shadow: unset;
    `}
`

export const Card = ({ children, variant }: ICardProps): React.ReactElement => (
  <StyledCard $variant={variant}>{children}</StyledCard>
)
