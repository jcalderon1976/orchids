import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',          // carpeta de salida (por defecto)
    assetsDir: 'assets',     // carpeta donde Vite pondrá imágenes, CSS, JS
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})
