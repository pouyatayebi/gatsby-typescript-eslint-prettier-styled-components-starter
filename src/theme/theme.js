/* eslint-disable prefer-destructuring */
const baseTheme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  width: [
    1, // 100% below the smallest breakpoint
    1 / 2, // 50% from the next breakpoint and up
    1 / 4, // 25% from the next breakpoint and up
  ],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#555555',
    secondary: '#a5a5a5',
    white: '#fff',
    navy: '#004175',
    tomato: '#003365',
    blues: [
      '#f1f8ff',
      '#dbedff',
      '#c8e1ff',
      '#79b8ff',
      '#2188ff',
      '#0366d6',
      '#005cc5',
      '#044289',
      '#032f62',
      '#05264c',
    ],
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  space: [
    // margin and padding
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  boxShadow: {
    light: '0 4px 16px rgba(0, 1, 31, 0.2)',
  },
};

const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      fontWeight: '100',
      backgroundColor: baseTheme.colors.primary,
      color: 'white',
      border: `2px solid ${baseTheme.colors.secondary};`,
      '&:hover': {
        backgroundColor: 'white',
        color: baseTheme.colors.primary,
        fontWeight: '900',
      },
    },
    secondary: {
      backgroundColor: baseTheme.colors.secondary,
      color: 'white',
      border: `2px solid ${baseTheme.colors.primary};`,
      '&:hover': {
        backgroundColor: 'white',
        color: baseTheme.colors.secondary,
      },
    },
    link: {
      backgroundColor: 'transparent',
      fontWeight: 600,
      border: 'none',
      color: baseTheme.colors.primary,
      '&:hover': {
        color: baseTheme.colors.secondary,
      },
    },
  },
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export default theme;
