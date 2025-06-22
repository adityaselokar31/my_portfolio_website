module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        gavoline: ['Gavoline', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        typing: 'typing 2.5s steps(30, end) 1 forwards, blink 0.8s step-end infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#facc15' }, // yellow-400
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
