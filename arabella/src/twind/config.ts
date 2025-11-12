import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6c63ff',
          secondary: '#1f51ff',
          surface: '#ffffff',
        },
      },
      boxShadow: {
        'glass-soft': '0 20px 45px rgba(18, 4, 88, 0.12)',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '14px',
        lg: '20px',
      },
    },
  },
  rules: [
    [
      'glass-liquid',
      {
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.26), rgba(210,224,255,0.16))',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow: '0 18px 45px rgba(10, 18, 60, 0.14)',
        backdropFilter: 'blur(10px) saturate(160%)',
        WebkitBackdropFilter: 'blur(10px) saturate(160%)',
      },
    ],
  ],
  hash: false,
});

export default config;

