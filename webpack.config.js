/**
 * Created by Михаил on 14.01.2017.
 */
var path = require('path');
var webpack = require('webpack');
var ResolvePathWebpackPlugin = require('resolve-path-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    watch: true,
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        devFlagPlugin,
        new ResolvePathWebpackPlugin({
            root: __dirname,
            ignore: ['**/*.test']
        })
    ],
    preLoaders: [ //добавили ESlint в preloaders
        {
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
                path.resolve(__dirname, "./")
            ]
        }
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                //query: {
                //    presets: ['es2015', 'stage-0', 'react']
                //},
                include: [
                    path.resolve(__dirname, "./")
                ],
                test: /\.jsx?$/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'

            }
        ]
    }
}