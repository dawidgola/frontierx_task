/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'pattern-seperator':
          'linear-gradient(95.91deg, #665aef 6.04%, #fc364c 88.42%)',
        'pattern-main-gradient':
          ' linear-gradient(15.74deg,rgba(46, 45, 102, 0.6) -2.5%,rgba(58, 39, 63, 0.6) 47.55%,#181818 90.7%)',
      },
      backgroundColor: {
        'pattern-black': 'rgba(13, 13, 13, 0.5)',
      },
    },
  },
  plugins: [],
};
