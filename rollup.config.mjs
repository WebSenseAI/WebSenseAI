import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
export default {
    // If using any exports from a symlinked project, uncomment the following:
    // preserveSymlinks: true,
    input: ['src/index.ts'],
    output: {
        file: 'buildRollup/index.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            browser: true,
        }),
        commonjs(), typescript(), json()]
};