var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true
    // https: true
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './dev/js/index.js',
    'react-hot-loader/patch',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader!css-loader!sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'js/bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
//   node: {
//     fs: "empty"
//  },
};
