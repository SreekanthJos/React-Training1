const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   'entry': {
   'main': ['@babel/polyfill', './index.js']
 },
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js',
        publicPath:'/'
     },
     devServer: {
        inline: true,
        historyApiFallback: true,
        port: 3000
     },
     resolve: {
        alias:{
         movieListFallback:path.resolve(__dirname,'app/components/movieListFallback'),
         movieFiterAndSort:path.resolve(__dirname,'app/components/movieFiterAndSort'),

        },
      extensions: ['.ts', '.tsx', '.js', '.json'],
     },
    
     mode: 'development',
     module: {
        rules: [
            
               { test: /\.scss$/, use: [ "style-loader","css-loader", "sass-loader" ] },
               { test: /\.js$/,use: 'babel-loader'},              
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