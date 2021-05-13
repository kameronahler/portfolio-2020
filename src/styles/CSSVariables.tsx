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
  html.darkmode {
    --color-accent: #3DD8F0;
    --color-bg-accent: #161329;
    --color-bg-card: #1b172d;
    --color-bg-dark: #1b172d;
    --color-bg-inverse: #ffffff;
    --color-bg: #0f0e12;
    --color-overlay: #0f0e12;
    --color-primary-light: #a293ff;
    --color-primary: #735DF7;
    --color-text-inverse: rgba(0, 0, 0, .95);
    --color-text-light: #E5E1F5;
    --color-text: #d6d3e5;
    --color-white: #ffffff;
    --color-warning: #F75C78;
    --shadow-card: 0 8px 24px -8px rgba(0,0,0,1);
    }
  }
`
