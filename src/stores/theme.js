import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const isDark = ref(false)

    // Initialize state
    const initTheme = () => {
        try {
            // Check localStorage first
            const storedTheme = localStorage.getItem('theme')

            if (storedTheme) {
                isDark.value = storedTheme === 'dark'
            } else if (window.matchMedia) {
                // Fallback to system preference
                isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
            }
        } catch (e) {
            console.error('Theme init error:', e)
        }

        // Apply immediately
        applyTheme()
    }

    // Update DOM and localStorage
    const applyTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const toggleTheme = () => {
        isDark.value = !isDark.value
        applyTheme()
    }

    // Listen for system changes if no manual override (optional, but good UX)
    // For simplicity, we just initialize once. If we wanted full sync with system
    // when no localStorage is set, we'd add a listener here. 
    // Given the requirements, this simple init is sufficient.

    return {
        isDark,
        initTheme,
        toggleTheme
    }
})
