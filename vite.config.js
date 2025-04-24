import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: {
    'process.env': process.env,
  },

  plugins: [react(), tailwindcss()],

  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['8b7e-170-150-190-132.ngrok-free.app'],
  },

  build: {
    outDir: 'dist', // 👈 isso é essencial para o deploy funcionar
  },
})
