import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import alias from '@rollup/plugin-alias'
import eslintVite from 'vite-plugin-eslint';

const rootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(), alias(), eslintVite()],
  resolve: {
    alias: {
      '@': resolve(rootDir, './src'),
    },
  },
});
