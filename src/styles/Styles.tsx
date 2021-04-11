// react
import React from 'react'

// --- order matters here ---
import { CSSVariables } from './CSSVariables'
import { Normalize } from './Normalize'
import { Base } from './Base'
import { Helpers } from './Helpers'

export const Styles = () => (
  <>
    <CSSVariables />
    <Normalize />
    <Base />
    <Helpers />
  </>
)
