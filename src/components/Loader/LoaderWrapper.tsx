// react
import React, { ReactChild } from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledLoaderWrapper = styled.div`
  display: grid;
  min-height: 50vh;
  place-items: center;
`

export const LoaderWrapper = ({ children }: { children: ReactChild }) => (
  <StyledLoaderWrapper children={children} />
)
