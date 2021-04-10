const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, '../dist');
const entryPath = path.resolve(__dirname, '../src/index.js');

module.exports = {
    entry: entryPath,
    output: {
        path: outputPath,
        filename: 'app[hash].js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: "body",
            template: './src/index.html'
        }),
    ]
};