// react
import React from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledPage__Wrapper = styled.div`
  background-color: var(--color-bg);
  height: 100vh;
  margin-left: var(--w-sidebar);
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  width: calc(100vw - var(--w-sidebar));
`

export const Page__Wrapper = ({ children }) => {
  return <StyledPage__Wrapper>{children}</StyledPage__Wrapper>
}
