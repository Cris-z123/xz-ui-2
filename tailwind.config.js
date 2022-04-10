module.exports = {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      animation: {
        ripples: 'border 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        border: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0);' },
          '25%': { boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2);' },
          '50%': { boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.4);' },
          '75%': { boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2);' },
          '100%': { boxShadow: '0 0 0 0px rgba(255, 255, 255, 0);' }
        }
      }
    }
  },

  plugins: []
};
