import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@Atoms': path.resolve(__dirname, './src/components/UI/Atoms'),
            '@Molecules': path.resolve(
                __dirname,
                './src/components/UI/Molecules'
            ),
            '@Organisms': path.resolve(
                __dirname,
                './src/components/UI/Organisms'
            ),
            '@hooks': path.resolve(__dirname, './src/lib/hooks'),
            '@helpers': path.resolve(__dirname, './src/lib/helpers'),
        },
    },
    plugins: [react()],
    server: {
        port: 3000,
    },
});
