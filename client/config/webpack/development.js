const common = require('./common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
    mode: 'development',
    // devServer: {}
});
