import { createGlobalStyle } from 'styled-components'

export const GlobalStyleHelpers = createGlobalStyle`
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
`
