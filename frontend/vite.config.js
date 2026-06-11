import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  server: {
    port: 5176,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
