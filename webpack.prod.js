const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const merged = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].js?v=[chunkhash:6]',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        library: 'Satsuma',
        libraryTarget: 'umd'
    },
});

merged.entry = {
    Satsuma: './src/Satsuma.js',
}
module.exports = merged;
