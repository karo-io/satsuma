const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devServer: {
        port: 9123,
        contentBase: './examples/assets',
        writeToDisk: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/example/example.html",
            filename: "index.html",
        }),
    ],
});
