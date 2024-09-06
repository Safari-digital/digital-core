import { resolve } from 'path';
import { defineConfig } from 'vite';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true,
            insertTypesEntry: true,
        }),
        preserveDirectives(),
    ],
    build: {
        rollupOptions: {
            external: ['react', 'react-dom', '@safari-node/core'],
            output: {
                preserveModules: true,
            },
        },
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: (format, filename) => `${filename}.js`,
            formats: ['es'],
        },
    },
});
