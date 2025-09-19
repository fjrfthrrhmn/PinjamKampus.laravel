import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            '~': resolve(__dirname, 'resources/js'),
            '@/ui': resolve(__dirname, 'resources/js/components/ui'),
            '@/features': resolve(__dirname, 'resources/js/components/features'),
            '@/widgets': resolve(__dirname, 'resources/js/components/widgets'),
            '@/shared': resolve(__dirname, 'resources/js/components/shared'),

            '@/constants': resolve(__dirname, 'resources/js/constants'),
            '@/config': resolve(__dirname, 'resources/js/constants/config'),
            '@/data': resolve(__dirname, 'resources/js/constants/data'),

            '@/helpers': resolve(__dirname, 'resources/js/helpers'),
            '@/lib': resolve(__dirname, 'resources/js/lib'),
            
            '@/hooks': resolve(__dirname, 'resources/js/hooks'),
            '@/services': resolve(__dirname, 'resources/js/services'),
            '@/types': resolve(__dirname, 'resources/js/types'),

            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
