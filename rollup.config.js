import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: 'js/src/reservation-form/main.js',
    output: {
        file: 'js/dist/reservation-form.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' })
    ]
};

export default config;
