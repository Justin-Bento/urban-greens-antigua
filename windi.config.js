// windi.config.js
export default {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-img': "url('./src/assets/home/hero.png')",
      }),
      lineClamp: {
        sm: '3',
        lg: '10',
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    // ...
  ],
};
