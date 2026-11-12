/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D1E',
          900: '#0B132B',
          850: '#111C3D',
          800: '#1C2541',
          700: '#263454',
          600: '#3A506B',
          500: '#4E688A',
        },
        cyber: {
          teal: '#14B8A6',
          cyan: '#06B6D4',
          cyanLight: '#67E8F9',
          glow: '#00F0FF',
          accent: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 19, 43, 0.08)',
        'card-hover': '0 10px 25px -3px rgba(6, 182, 212, 0.12), 0 4px 10px -2px rgba(11, 19, 43, 0.05)',
        'cyber-glow': '0 0 20px rgba(6, 182, 212, 0.25)',
      }
    },
  },
  plugins: [],
}
