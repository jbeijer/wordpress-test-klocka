import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: '/src/main.js',
      name: 'WorldTimePlugin',
      formats: ['iife'],
      fileName: () => 'world-time.js'
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'world-time.css'
      },
      external: ['vue']
    }
  }
})
