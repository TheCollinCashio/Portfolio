const webpack = require('webpack')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV || JSON.stringify('development')

module.exports = {
    mode: 'none',
    entry: ['@babel/polyfill', './Client/src/App.jsx'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(`${__dirname}/`, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: NODE_ENV
            }
        })
    ]
}