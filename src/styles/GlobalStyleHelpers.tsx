import { createGlobalStyle } from 'styled-components'

export const GlobalStyleHelpers = createGlobalStyle`
  .btn-icon {
    align-items: center;
    border-radius: 9999px;
    display: flex;
    height: 4rem;
    justify-content: center;
    line-height: 1;
    width: 4rem;

    svg {
      width: 2rem;
    }
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

  .text-lead {
    font-size: 1.25rem;
  }
`
