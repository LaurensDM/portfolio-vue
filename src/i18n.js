import { createI18n } from 'vue-i18n'
import langEn from './assets/locales/en.json'
import langNl from './assets/locales/nl.json'
import { en } from 'vuetify/locale'

function loadLocaleMessages () {
   const locales = [{en: langEn}, {nl: langNl}]
   const messages = {}

    locales.forEach(locale => {
      const key = Object.keys(locale)[0]
      messages[key] = locale[key]
    })
    return messages
  }

const i18n = createI18n({
    locale: 'nl',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
  })

  export default i18n