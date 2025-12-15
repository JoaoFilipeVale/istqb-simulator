import { defineStore } from 'pinia'
import { ref } from 'vue'
import i18n from '../i18n'

export const useLanguageStore = defineStore('language', () => {
    // Initialize from localStorage or default to 'pt'
    const savedLocale = localStorage.getItem('locale') || 'pt'
    const currentLocale = ref(savedLocale)

    // Apply initial locale immediately
    i18n.global.locale.value = savedLocale
    document.documentElement.setAttribute('lang', savedLocale)

    function setLocale(newLocale) {
        currentLocale.value = newLocale
        i18n.global.locale.value = newLocale
        localStorage.setItem('locale', newLocale)
        document.documentElement.setAttribute('lang', newLocale)
    }

    function toggleLanguage() {
        const newLocale = currentLocale.value === 'pt' ? 'en' : 'pt'
        setLocale(newLocale)
    }

    return {
        currentLocale,
        setLocale,
        toggleLanguage
    }
})
