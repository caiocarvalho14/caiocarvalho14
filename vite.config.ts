import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Na build, o Vite empacota só os componentes animados (src/islands/client.tsx);
// o HTML estático é gerado depois por scripts/prerender.mjs.
export default defineConfig({
  plugins: [react()],
  // pré-empacota juntas as dependências dos componentes animados (evita duas cópias do React no dev)
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'react-dom/server', 'motion/react', 'gsap', 'gsap/ScrollTrigger', 'gsap/SplitText', '@gsap/react'],
  },
  // não vigiar a pasta das checagens do Taste Skill (perfil do Chrome) nem a build
  server: { watch: { ignored: ['**/.taste-skill/**', '**/dist/**'] } },
  build: {
    manifest: true,
    assetsDir: 'build',
    rollupOptions: { input: 'src/islands/client.tsx' },
  },
})
