var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 3000,
    hot: true
    // https: true
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './dev/js/index.js',
    'react-hot-loader/patch',
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }
      ]},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'js/bundle.min.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
    fs: "empty"
 },
};
