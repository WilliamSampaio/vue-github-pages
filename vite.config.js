import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [vue()],
    }
  }
  if (command === 'build') {
    return {
      plugins: [vue()],
      base: 'https://bibliaonline.app.br/'
    }
  }
})
