const path = require('path');
const common = require('./common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 7100,
        hot: true,
        hotOnly: true,
        compress: true,
        writeToDisk: true,
        watchContentBase: true,
        watchOptions: { poll: true },
        contentBase: path.resolve(__dirname, '..', '..', '..', 'public')
    }
});
