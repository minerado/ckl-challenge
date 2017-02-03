const path = require('path')

const config = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'builds'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
        ],
    },
}

module.exports = config
