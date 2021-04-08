// react
import React from 'react'

// --- order matters here ---
import { GlobalStyleVars } from './GlobalStyleVars'
import { GlobalStyleNormalize } from './GlobalStyleNormalize'
import { GlobalStyleHTML } from './GlobalStyleHTML'
import { GlobalStyleHelpers } from './GlobalStyleHelpers'

export const GlobalStyle = () => (
  <>
    <GlobalStyleVars />
    <GlobalStyleNormalize />
    <GlobalStyleHTML />
    <GlobalStyleHelpers />
  </>
)
