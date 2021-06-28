import { createGlobalStyle } from 'styled-components'

export const Helpers = createGlobalStyle`
  .bold {
    font-weight: var(--font-weight-bold);
  }

  .card {
    background-color: var(--color-bg-card);
    border-radius: var(--rounded-card);
    box-shadow: var(--shadow-card);
    padding: 2rem;
  }

  .card-flat {
    border-radius: var(--rounded-card);
    transition-duration: var(--duration-250ms);
    transition-timing-function: var(--easing-default);
    padding: 2rem;
  }

  .card-hover:hover {
    box-shadow: var(--shadow-card);
  }

  .link-uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .link-gradient {
    background-image: linear-gradient(
      45deg,
      var(--color-primary),
      var(--color-primary-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:active {
      opacity: .8;
    }
  }

  .link-gradient-hover {
    &:active {
      opacity: .8;
    }

    &:hover {
      background-image: linear-gradient(
        45deg,
        var(--color-primary),
        var(--color-primary-light)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
