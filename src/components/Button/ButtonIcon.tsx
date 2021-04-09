// react
import React from 'react'

// package
import styled from 'styled-components'

// styled
const StyledLink = styled.a`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  height: 3rem;
  justify-content: center;
  line-height: 1;
  width: 3rem;

  svg {
    flex-shrink: 0;
    height: auto;
    width: 1.5rem;
  }
`

const StyledButton = styled(StyledLink).attrs({
  as: 'button',
})``

export const ButtonIcon = ({
  ariaLabel,
  children,
  href,
  onClick,
  targetBlank,
}: IButtonIcon) => {
  return href ? (
    <StyledLink aria-label={ariaLabel} href={href} onClick={onClick}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      aria-label={ariaLabel}
      onClick={onClick}
      target={targetBlank ? '_blank' : ''}
    >
      {children}
    </StyledButton>
  )
}
