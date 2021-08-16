const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: path.resolve(__dirname, 'js/src/reservation-form/main.js'),
        output: {
            filename: `reservation-form${argv.mode === 'development' ? '-dev' : ''}.js`,
            path: path.resolve(__dirname, 'js/dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                }
            ]
        }
    };
};
