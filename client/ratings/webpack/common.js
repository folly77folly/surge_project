const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'public', 'js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [ /node_modules/ ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx' ]
    }
}
