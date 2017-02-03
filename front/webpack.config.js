const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../back/priv/static'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                use: ExtractTextPlugin.extract({
                    loader: 'css-loader!sass-loader',
                }),
                test: /\.(css|sass)/,
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("css/bundle.css"),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        })
    ],
}
