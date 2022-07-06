import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        // ...
        globals: true,
        environment: 'jsdom',
        setupFiles: 'testSetup.ts'
    },
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
});
