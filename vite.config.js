import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],

    server: {
      host: '0.0.0.0', // Permite conexões de qualquer dispositivo na rede local
      port: 3000, // Ou qualquer outra porta que você deseja
    },
  
})
