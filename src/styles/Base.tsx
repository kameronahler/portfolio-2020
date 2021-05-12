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
    line-height: var(--line-height-default);
  }

  p {
    margin-bottom: var(--font-size-default);
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
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1 {
    font-size: var(--font-size-h1-clamp);
    margin-bottom: 3rem;
  }

  h2 {
    font-size: var(--font-size-h2-clamp);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: var(--font-size-h3-clamp);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: var(--font-size-h4-clamp);
    margin-bottom: 1rem;
  }

  ol {
    margin: unset;
    padding-left: unset;

    li {
      margin-left: 1.125rem;
      padding-left: .25rem;
      p {
        display: inline-block;
      }

    }
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
  button,
  img,
  input,
  textarea {
    &:focus {
      outline: none;
    }
    &:focus-visible {
      outline: 1px dashed var(--color-text);
      outline-offset: 0.25rem;
    }
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    line-height: var(--line-height-heading);
    padding: unset;

    &:disabled {
      opacity: .25;
      cursor: not-allowed;
    }
  }

  label {
    font-weight: var(--font-weight-bold);
  }

  input,
  textarea {
    border: unset;
    border-radius: .25rem;
    padding: 1rem;
    width: 100%;
  }

  textarea {
    display: block;
  }
`
