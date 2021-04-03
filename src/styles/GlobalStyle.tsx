// react
import React from 'react'

// --- order matters here ---
import { GlobalStyleVars } from './GlobalStyleVars'
import { GlobalStyleNormalize } from './GlobalStyleNormalize'
import { GlobalStyleBase } from './GlobalStyleBase'

export const GlobalStyle = () => (
  <>
    <GlobalStyleVars />
    <GlobalStyleNormalize />
    <GlobalStyleBase />
  </>
)
