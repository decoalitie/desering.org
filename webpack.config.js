const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: {
            'reservation-form': path.resolve(__dirname, 'js/src/reservation-form/main.js'),
            'opening': path.resolve(__dirname, 'js/src/opening/main.js'),
        },
        output: {
            filename: `[name]${argv.mode === 'development' ? '-dev' : ''}.js`,
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
