import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import { color, cssVariables, font } from './tokens';

const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        surface: {
          base: color.surface.base,
          alt: color.surface.alt,
          dark: color.surface.dark,
          raised: color.surface.raised,
        },
        accent: {
          DEFAULT: color.accent,
          pressed: color.accentPressed,
        },
        ink: {
          DEFAULT: color.ink.DEFAULT,
          muted: color.ink.muted,
          inverse: color.ink.inverse,
          'inverse-muted': color.ink.inverseMuted,
        },
        hairline: {
          DEFAULT: color.hairline,
          dark: color.hairlineDark,
        },
        positive: color.positive,
      },
      fontFamily: {
        display: font.display as unknown as string[],
        sans: font.sans as unknown as string[],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '3px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  preflight: {
    ':root': {
      ...cssVariables,
      colorScheme: 'light',
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
      '@media (prefers-reduced-motion: reduce)': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
        scrollBehavior: 'auto !important',
      },
    },
    'html, body': {
      margin: '0',
      padding: '0',
    },
    html: {
      scrollBehavior: 'smooth',
      // Compensa o header fixo ao pular para uma âncora.
      scrollPaddingTop: '5rem',
      WebkitTextSizeAdjust: '100%',
      '@media (prefers-reduced-motion: reduce)': {
        scrollBehavior: 'auto',
      },
    },
    body: {
      backgroundColor: 'var(--surface-base)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontWeight: '400',
      lineHeight: '1.6',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
    },
    'h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd': {
      margin: '0',
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: '400',
    },
    'ul, ol': {
      margin: '0',
      padding: '0',
      listStyle: 'none',
    },
    'img, picture, svg, video': {
      display: 'block',
      maxWidth: '100%',
    },
    'button, input, select, textarea': {
      font: 'inherit',
      color: 'inherit',
    },
    button: {
      backgroundColor: 'transparent',
      border: '0',
      cursor: 'pointer',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    ':focus-visible': {
      outline: '2px solid var(--accent)',
      outlineOffset: '2px',
    },
  },
  hash: false,
});

export default config;
