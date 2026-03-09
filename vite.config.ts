import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        bio: path.resolve(__dirname, 'bio/index.html'),
        jucelilents: path.resolve(__dirname, 'jucelilents/index.html'),
      },
      output: {
        manualChunks: {
          'vendor-animation': ['gsap', 'motion'],
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-slot'],
        }
      }
    }
  }
})
