/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050D18',
          900: '#0B1F38', // Brand Deep Navy
          850: '#0F2644',
          800: '#143156',
          700: '#1C4374',
          600: '#26599A',
        },
        steel: {
          900: '#1D303D',
          800: '#2C4454',
          700: '#3D5E74',
          600: '#4A728A',
          500: '#5B8296', // Brand Steel Blue
          400: '#7B9EAF',
          300: '#A1BCC9',
          200: '#CBE0EA',
          100: '#E7F1F6',
          50: '#F4F9FB',
        },
        blueprint: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          muted: '#64748B',
          dark: '#071526',
          border: '#E2E8F0',
          'border-dark': '#1B2E47',
        },
        amber: {
          construction: '#C5A059',
          highvis: '#E29547',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '14px',
        'xl': '18px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 31, 56, 0.08), 0 2px 6px -1px rgba(11, 31, 56, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(11, 31, 56, 0.12), 0 4px 12px -2px rgba(11, 31, 56, 0.08)',
        'steel-glow': '0 0 25px -5px rgba(91, 130, 150, 0.25)',
        'navy-glow': '0 0 30px -5px rgba(11, 31, 56, 0.25)',
      },
      letterSpacing: {
        widest: '.2em',
        architect: '.25em',
      }
    },
  },
  plugins: [],
};
