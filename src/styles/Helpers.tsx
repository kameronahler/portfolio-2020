import { createGlobalStyle } from 'styled-components'

export const Helpers = createGlobalStyle`
  .bold {
    font-weight: var(--font-weight-bold);
  }

  .card {
    border-radius: var(--rounded-card);
    box-shadow: var(--shadow-card);
    padding: 2rem;
  }

  .h1 {
    font-size: var(--font-size-h1);
  }

  .h2 {
    font-size: var(--font-size-h2);
  }

  .h3 {
    font-size: var(--font-size-h3);
  }

  .h4 {
    font-size: var(--font-size-h4);
  }

  .hidden {
    display: none;
  }

  .lead {
    font-size: var(--font-size-h4);
  }

  .link-gradient {
    background: var(--color-primary) -webkit-linear-gradient(
      45deg,
      var(--color-primary),
      var(--color-primary-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }


  .link-gradient-hover {
    &:hover {
      background: var(--color-primary) -webkit-linear-gradient(
        45deg,
        var(--color-primary),
        var(--color-primary-light)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .p {
    font-size: var(--font-size-base);
  }

  .relative {
    position: relative;
  }
`
