// react
import React from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledHeader = styled.header`
  ${({ srOnly }) =>
    srOnly &&
    `
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `}
`

export const SRHeader = ({ children }: { children: React.ReactChild }) => {
  return <StyledHeader srOnly={true}>{children}</StyledHeader>
}
