const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    modules: [
      path.resolve(__dirname, '../app'),
      path.resolve('./node_modules'),
    ],
  },

  module: {
    rules: [
      { test: /\.scss$/, use: [ "style-loader","css-loader", "sass-loader" ] },
               { test: /\.js$/,use: 'babel-loader'},  
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },

  plugins: [new webpack.HashedModuleIdsPlugin()],
};
