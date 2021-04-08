import { createGlobalStyle } from 'styled-components'

export const GlobalStyleBase = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
    min-height: 100%;
  }

  body {
    font-family: var(--font-sans);
    font-size: 1em;
    height: 100%;
    line-height: var(--line-height-normal);
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: var(--line-height-heading);
    margin-top: unset;
  }

  ul {
    list-style: none;
    margin: unset;
    padding-left: unset;
  }

  a {
    text-decoration: unset;

    &:hover {
      text-decoration: underline;
    }
  }
`
