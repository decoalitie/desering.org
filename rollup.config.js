import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
    {
        input: 'js/src/reservation-form/main.js',
        output: {
            file: 'js/dist/reservation-form.js',
            format: 'iife'
        },
        plugins: [
            resolve({ resolveOnly: [/^(?!core-js).*$/] }),
            babel({
                babelHelpers: 'bundled',
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
            })
        ]
    }
];

export default config;
