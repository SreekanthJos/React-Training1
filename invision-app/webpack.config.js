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
     resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
     },
    
     mode: 'development',
     module: {
        rules: [
            
               { test: /\.scss$/, use: [ "style-loader","css-loader", "sass-loader" ] },
               { test: /\.js$/,loader: 'babel-loader'},              
               { exclude: /node_modules/},
               {
                  test: /\.(gif|ttf|png|jpe?g|svg)$/i,
                  use: [
                    {
                      loader: 'file-loader',
                      options: { name: 'img/[name].[ext]' }
                    },
                    'image-webpack-loader'
                  ],
                },
        ]
        },
     plugins:[
        new HtmlWebpackPlugin({
           template: './index.html'
        })
     ]
};