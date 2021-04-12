import { createGlobalStyle } from 'styled-components'

export const Helpers = createGlobalStyle`
  .bold {
    font-weight: 700;
  }

  .h1 {
    font-size: 5.625rem;
  }

  .h2 {
    font-size: 4rem;
  }

  .h3 {
    font-size: 2.8125rem;
  }

  .h4 {
    font-size: 2rem;
  }

  .h5 {
    font-size: 1.375rem;
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

  .lead {
    font-size: 1.25rem;
  }
`
