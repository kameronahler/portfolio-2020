import { createGlobalStyle } from 'styled-components'

export const Helpers = createGlobalStyle`
  .animate-fade-in {
    opacity: 0;
    transition-duration: var(--duration-500ms);
    transition-property: opacity, transform;
    transition-timing-function: var(--easing-default);

    &.mounted {
      opacity: 1;
    }
  }

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
  }

  .link-gradient-hover {
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

  .p {
    font-size: var(--font-size-default);
  }

  .relative {
    position: relative;
  }

  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
