const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        example: './src/example/example.js',
    },
    output: {
        // filename: '[name].[chunkhash:6].src.js',
        filename: '[name].[contenthash:6].src.js',
        path: path.resolve(__dirname, 'examples/assets'),
        publicPath: "/",
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            chunks: 'all',
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                },
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: true}),
        new ExtractCssChunks({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css?v=[contenthash:6]',
            chunkFilename: '[id].css?v=[contenthash:6]',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {loader: ExtractCssChunks.loader},
                    {loader: 'css-loader', options: {url: false}},  // die logo files und svgs erst mal nicht checken
                    {loader: "postcss-loader"},
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            fix: true,
                        }
                    }
                ]
            },
        ],
    }
};
