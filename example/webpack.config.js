const webpack = require('webpack');
const port = process.env.PORT || 3000;

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {
    devtool: 'eval',
    entry: [
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        './example/main',
    ],
    output: {
        path: `${__dirname}/build/`,
        filename: 'app.js',
        publicPath: `http://localhost:${port}/build/`,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:
            {
                presets:['react']
            }
        }],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    port
};