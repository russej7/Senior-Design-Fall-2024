import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/citations', 
  },
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, './src/services')
    }
  }
})
