import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    return {
        plugins: [vue()],
        // Conditional configuration:
        // If the command is 'serve' (local dev), use the root path '/'.
        // If the command is 'build' (production deploy), use the repository name '/istqb-simulator/'.
        base: command === 'serve' ? '/' : '/istqb-simulator/',
    }
})