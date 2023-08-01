const {withAnimations} = require('animated-tailwindcss');

export default withAnimations({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './vueform.config.js', // or where `vueform.config.js` is located
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@vueform/vueform/tailwind'),
  ],
})

