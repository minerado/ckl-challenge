const path = require('path')

const config = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'builds'),
        filename: '[name].js',
    },
}

module.exports = config
