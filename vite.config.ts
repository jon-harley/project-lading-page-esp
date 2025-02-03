import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 CAMINHOS RELATIVOS (OBRIGATÓRIO)
  build: {
    outDir: 'build', // 📂 PASTA DE SAÍDA
    assetsInlineLimit: 0, // 🚫 EVITA CONVERSÃO DE ASSETS PARA BASE64
    emptyOutDir: true, // 🧹 LIMPA A PASTA ANTES DE NOVAS BUILDS
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // ⚠️ MANTENHA SE NECESSÁRIO
  },
});