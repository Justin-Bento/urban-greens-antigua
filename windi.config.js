// windi.config.js
export default {
  theme: {
    extend: {
      colors: {
        grey: colors.gray,
      },
      backgroundImage: (theme) => ({
        'hero-img': "url('./assets/home/hero.png')",
      }),
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
};
