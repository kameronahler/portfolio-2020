export const THEME = {
  color: {
    bg: '#f8f8f8',
    bgDark: '#f0f0f0',
    bgCard: '#ffffff',
    overlay: '#ffffff',
    primary: '#4c36d3',
    primaryLight: '#9988ff',
    accent: '#3DD8F0',
    text: '#252427',
    textLight: '#706D76',
    textInverse: 'rgba(255, 255, 255, .95)',
  },
  duration: {
    ['250']: '250',
    ['250ms']: '250ms',
    pageTransition: '500',
    pageTransitionMs: '500ms',
  },
  easing: {
    default: 'cubic-bezier(.47,.12,.27,.83)',
  },
  font: {
    sans: `'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
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
  },
  gap: {
    default: '1rem',
  },
  grid: {
    default: 'repeat(12, minmax(0, 1fr))',
  },
  lineHeight: {
    default: '1.625',
    heading: '1.2',
  },
  p: {
    card: '2rem',
  },
  rounded: {
    card: '0.125rem',
  },
  shadow: {
    card:
      '0 12px 32px -12px rgba(0, 0, 0, 0.1), 0 6px 32px -12px rgba(78, 55, 212, 0.2);',
  },
  w: {
    screenSm: '36rem', // 576
    screenMd: '64rem', // 1024
    screenDesktop: '64rem',
    screenLg: '75rem', // 1200
    screenXl: '90rem', // 1440
  },
}
