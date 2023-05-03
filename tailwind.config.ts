import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#C5D5E5',
          200: '#9FB6CE',
          300: '#7897B6',
          400: '#4E779D',
          500: '#295882',
          600: '#1F436E',
          700: '#14305A',
          800: '#091D46',
          900: '#020C32',
        },
        secondary: {
          100: '#FFF1D1',
          200: '#FFE3A3',
          300: '#FFD475',
          400: '#FFC547',
          500: '#F3BA39',
          600: '#CB9D2E',
          700: '#A27F23',
          800: '#79511A',
          900: '#4D3310',
        },
        neutral: {
          100: '#F9F9F9',
          200: '#F0F0F0',
          300: '#E1E1E1',
          400: '#C8C8C8',
          500: '#A9A9A9',
          600: '#767676',
          700: '#4D4D4D',
          800: '#2A2A2A',
          900: '#161616',
        },
        background: 'var(--color-neutral-100)',
        backgroundAlt: 'var(--color-primary-50)',
        text: 'var(--color-neutral-700)',
        textSecondary: 'var(--color-neutral-500)',
        textInverse: 'var(--color-neutral-100)',
        textLink: 'var(--color-primary-500)',
        textLinkHover: 'var(--color-primary-600)',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('tailwindcss-fluid-type')],
} satisfies Config;
