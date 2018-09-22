import pkg from './package.json'

export default {
  head: {
    title: pkg.name.replace(`-`, ` `),
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { 'http-equiv': `X-UA-Compatible`, content: `IE=edge` },
    ],
  },
  css: [`@/assets/css/global.scss`],
  plugins: [`@/plugins/i18n.js`, `@/plugins/global-components.js`],
  modules: [`@nuxtjs/axios`],
  axios: {
    baseURL: `http://127.0.0.1:3000/api`,
    browserBaseURL: `/api`,
  },
}
