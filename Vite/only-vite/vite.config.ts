import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import addCode from './vite-plugins/vite-plugin-addcode'
import hadleBen from './vite-plugins/vite-plugin-handleben'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [addCode(), hadleBen('ben')]
})
