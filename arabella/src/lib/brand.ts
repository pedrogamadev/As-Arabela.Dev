export const brand = {
  name: 'Arabella.dev',
  gradient: 'linear-gradient(135deg, #0b1f61 0%, #2f7aff 100%)',
  colors: {
    primary: '#2f7aff',
    primaryDark: '#0b1f61',
    accent: '#89b4ff',
  },
  shadows: {
    xl: '0 24px 60px rgba(15, 45, 120, 0.25)',
    md: '0 12px 32px rgba(15, 45, 120, 0.2)',
    soft: '0 1px 3px rgba(13, 23, 55, 0.24)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '4rem',
  },
};

export const schedulerConfig = {
  url: import.meta.env.VITE_SCHEDULER_URL ?? 'https://calendly.com/your-link',
};
