/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F6F6FB',
        'main-color': '#1625AB',
        'main-color-hover': '#1A2CC9',
      },
      minHeight: {
        mobile: 'calc(100vh - (48px + 565.417px + 59px))',
        desktop: 'calc(100vh - (48px + 237.35px + 59px))',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
};
