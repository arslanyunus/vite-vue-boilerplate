import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias';
import eslintVite from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

const rootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA(),
        alias(),
        eslintVite(),
        Components({
            resolvers: [
                AntDesignVueResolver(),
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(rootDir, './src'),
        },
    },
});
