import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gas-tech-tutor/', // Deploy to subdirectory on hvac-student-resources site
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure PWA files are copied to build
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  // Handle PWA files in public directory
  publicDir: 'public'
})