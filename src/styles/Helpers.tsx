import { createGlobalStyle } from 'styled-components'

export const Helpers = createGlobalStyle`
  .bold {
    font-weight: 700;
  }

  .p {
    font-size: var(--font-size-base);
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
    font-size: var(--font-size-h4);
  }

  .relative {
    position: relative;
  }
`
