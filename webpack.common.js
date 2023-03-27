const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

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
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: true}),
    ],
    module: {
        rules: [
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
