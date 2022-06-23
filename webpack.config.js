const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: {
            /* currently no scripts */
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
