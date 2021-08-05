import resolve from '@rollup/plugin-node-resolve';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: 'js/src/reservation-form/main.js',
    output: {
        file: 'js/dist/reservation-form.js',
        format: 'iife'
    },
    plugins: [resolve()]
};

export default config;
