import { createGlobalStyle } from 'styled-components'
import { THEME } from './Theme'

const camelToDash = (string: string) =>
  string.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase()
  })

const getVars = () => {
  const tokenKeys: string[] = Object.keys(THEME)
  const varsArr: String[] = []

  tokenKeys.forEach(prefix => {
    const subset = Object.entries(THEME[prefix])
    const dashedPrefix = camelToDash(prefix)

    subset.forEach(entry => {
      varsArr.push(`--${dashedPrefix}-${camelToDash(entry[0])}: ${entry[1]};`)
    })
  })
  return varsArr
}

export const CSSVariables = createGlobalStyle`
  :root {
    ${getVars().join('')}
  }
`
