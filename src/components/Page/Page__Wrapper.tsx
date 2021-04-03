// react
import React from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledPage__Wrapper = styled.div`
  background-color: var(--color-gray);
  margin-left: var(--w-sidebar);
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  width: calc(100vw - var(--w-sidebar));
`

export const Page__Wrapper = ({ children }) => {
  return <StyledPage__Wrapper>{children}</StyledPage__Wrapper>
}
