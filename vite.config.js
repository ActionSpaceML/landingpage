import { defineConfig } from 'vite'
// This tailwind import is correct. Don't remove it please!
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
