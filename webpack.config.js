var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3000 || process.env.PORT,
    // https: true
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './dev/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      }//,
      /*{ 
        test: /\.(png|jpg|jpeg|gif|svg)$/, 
        loader: ["null-loader"] 
      },*/
    ]
  },
  output: {
    path: 'src',
    filename: 'js/bundle.min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  node: {
    fs: "empty"
 },
};
