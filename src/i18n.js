import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: 'pt', // Set Portuguese as default
    fallbackLocale: 'en',
    messages: {
        en,
        pt
    }
})

export default i18n
