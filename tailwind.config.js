/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        'quicksand-bold': ['Quicksand-bold', 'sans-serif'],
      },
      colors: {
        vermelho_primary: '#ED145B',
        vermelho_secundary: 'rgba(237, 20, 91, .4)',
        preto_primary: '#0f0f0f',
      },
      keyframes: {
        autoRun: {
          '0%': { left: '100%' },
          '100%': { left: '-200px' },
        },
      },
      animation: {
        autoRun: 'autoRun 22s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const delays = theme('animationDelay') || {
        '12': '1s',
        '2s': '2s',
        '4.5s': '4.5s',
        '6.5s': '6.5s',
        '8s': '8s',
        '10s': '10s',
        '12s': '12s',
        '14s': '14s',
        '16s': '16s',
        '18s': '18s',
        '20s': '20s',
      };

      const delayUtilities = Object.entries(delays).map(([key, value]) => {
        return {
          [`.${e(`delay-${key}`)}`]: {
            'animation-delay': value,
          },
        };
      });

      addUtilities(delayUtilities, ['responsive', 'hover']);
    },
  ],
};
