import { createGlobalStyle } from 'styled-components'

export const GlobalStyleVars = createGlobalStyle`
  :root {
    // color
    --color-gray: #aaa;
    --color-gray-light: #ddd;
    --color-gray-dark: #666;

    // duration
    --duration-page-transition: 500;
    --duration-page-transition-ms: 500ms;

    // font-family
    --font-family-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';

    // line-height
    --line-height-normal: 1.5;
    --line-height-heading: 1.2;

    // width
    --w-sidebar: 18.75rem;
  }
`
