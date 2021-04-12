import { createGlobalStyle } from 'styled-components'

export const Base = createGlobalStyle`
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
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
    font-size: 1em;
    height: 100%;
    line-height: var(--line-height-normal);
  }

  p {
    margin-bottom: var(--font-size-base);
    margin-top: unset;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: var(--line-height-heading);
    margin-top: unset;
  }

  h1 {
    font-size: var(--font-size-h1);
    margin-bottom: 3rem;
  }

  h2 {
    font-size: var(--font-size-h2);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: var(--font-size-h3);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: var(--font-size-h4);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: unset;
    padding-left: unset;
  }

  a {
    color: inherit;
    text-decoration: unset;
  }

  a,
  button {
    &:focus {
      outline: none;
    }
    &:focus-visible {
      outline: 1px dashed var(--color-text);
      outline-offset: 0.5rem;
    }
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    line-height: var(--line-height-heading);
    padding: unset;
  }
`
