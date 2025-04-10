import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  
  plugins: [react(),
    tailwindcss()],

    server: {
      host: '0.0.0.0', 
      port: 3000,

      allowedHosts: ['2b96-170-150-188-2.ngrok-free.app'],
    },
    
  
})
