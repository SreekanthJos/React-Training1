const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js'
     },
     devServer: {
        inline: true,
        port: 3000
     },

     mode: 'development',
     module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
        },
     plugins:[
        new HtmlWebpackPlugin({
           template: './index.html'
        })
     ]
};