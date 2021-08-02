export const THEME = {
  color: {
    accent: '#3DD8F0',
    bg: '#f8f8f8',
    bgAccent: '#ecebf5',
    bgCard: '#ffffff',
    bgDark: '#e8e8e8',
    bgInverse: '#000000',
    black: '#252427',
    overlay: '#ffffff',
    primary: '#4c36d3',
    primaryLight: '#9988ff',
    warning: '#CE3350',
    text: '#252427',
    textInverse: 'rgba(255, 255, 255, .95)',
    textLight: '#737079',
    white: '#ffffff',
  },
  duration: {
    ['250']: '250',
    ['250ms']: '250ms',
    ['500']: '500',
    ['500ms']: '500ms',
    ['1000']: '1000',
    ['1000ms']: '1000ms',
    pageTransition: '250',
    pageTransitionMs: '250ms',
  },
  easing: {
    default: 'cubic-bezier(.47,.12,.27,.83)',
  },
  font: {
    sans: `'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol'`,
    heading: `'Chivo', 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol'`,
  },
  fontWeight: {
    default: 400,
    bold: 700,
  },
  fontSize: {
    default: '1rem',
    h1: '4rem',
    h2: '2.8125rem',
    h3: '2rem',
    h4: '1.375rem',
    h1Clamp: 'clamp(var(--font-size-h2), 15vw, var(--font-size-h1));',
    h2Clamp: 'clamp(var(--font-size-h3), 15vw, var(--font-size-h2));',
    h3Clamp: 'clamp(var(--font-size-h4), 15vw, var(--font-size-h3));',
    h4Clamp: 'clamp(var(--font-size-default), 15vw, var(--font-size-h4));',
  },
  gap: {
    default: '1rem',
    lg: '2rem',
  },
  grid: {
    default: 'repeat(12, minmax(0, 1fr))',
  },
  lineHeight: {
    default: '1.625',
    markdown: '1.75',
    heading: '1.2',
  },
  p: {
    card: '2rem',
  },
  rounded: {
    card: '0.125rem',
  },
  shadow: {
    card: '0 12px 32px -12px rgba(0, 0, 0, 0.1), 0 6px 32px -12px rgba(78, 55, 212, 0.2);',
  },
  w: {
    screenSm: '36rem', // 576
    screenMd: '64rem', // 1024
    screenDesktop: '64rem',
    screenLg: '75rem', // 1200
    screenXl: '90rem', // 1440
    navDesktop: '16rem',
  },
  z: {
    beneathNav: '900',
    nav: '1000',
    aboveNav: '2000',
    overlay: '3000',
    aboveOverlay: '4000',
  },
}
