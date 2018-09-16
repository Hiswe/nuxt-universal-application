import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  app.i18n = new VueI18n({
    fallbackLocale: `en`,
    fallbackRoot: true,
    silentTranslationWarn: true,
    messages: {
      en: {
        home: `Home`,
        foo: `Foo`,
        bar: `Bar`,
      },
    },
  })
}
