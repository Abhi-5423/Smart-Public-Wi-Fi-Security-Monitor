/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        panel: '#0b1224',
        ink: '#d7f8ff',
        cyanx: '#22d3ee',
        bluex: '#38bdf8',
        danger: '#fb7185',
        warn: '#facc15',
        ok: '#34d399'
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 211, 238, 0.22)',
        danger: '0 0 28px rgba(251, 113, 133, 0.2)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
