import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import addCode from '../only-vite/vite-plugins/vite-plugin-addcode'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [addCode()],
  optimizeDeps: {
    include: ['src/utils/a.ts']
  }
})
