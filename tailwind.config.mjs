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
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      boxShadow: {
        none: 'none',
        'solid-navy': '4px 4px 0px #0B1F38',
        'solid-steel': '4px 4px 0px #5B8296',
        'solid-gold': '4px 4px 0px #C5A059',
        'solid-white': '4px 4px 0px #FFFFFF',
        'solid-sm-navy': '2px 2px 0px #0B1F38',
      },
      letterSpacing: {
        widest: '.2em',
        architect: '.25em',
      }
    },
  },
  plugins: [],
};
