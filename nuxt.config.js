const pkg = require(`./package.json`)

module.exports = {
  head: {
    title: pkg.name.replace(`-`, ` `),
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { 'http-equiv': `X-UA-Compatible`, content: `IE=edge` },
    ],
  },
  css: [`@/assets/css/global.scss`],
  build: {
    vendor: [`vue-i18n`],
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false,
          },
        },
      },
    },
  },
  plugins: [`@/plugins/i18n.js`, `@/plugins/global-components.js`],
  modules: [`@nuxtjs/axios`],
  axios: {
    baseURL: `127.0.0.1/api`,
    browserBaseURL: `/api`,
  },
}
