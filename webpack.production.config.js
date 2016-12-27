var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
    entry: './src/index',

    output: {
        library: 'ReactHorn',
        libraryTarget: 'umd',
        path: __dirname + '/dist/',
        filename: 'react-horn.js'
    },

    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }],

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};