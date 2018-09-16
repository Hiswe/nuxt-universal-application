module.exports = {
  css: [`@/assets/css/global.scss`],
  build: {
    vendor: [`vue-i18n`],
  },
  plugins: [`@/plugins/i18n.js`, `@/plugins/global-components.js`],
}
