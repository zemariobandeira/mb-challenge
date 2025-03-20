import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: path.resolve(__dirname, '../frontend/public'),

  build: {
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../frontend/src')
    }
  }
})
