const path = require('path');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/dist',
    port: 9900
  },
  module: {
    rules: [
      {
        test: /\.json/,
        use: ['json-loader']
      },
      { test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.css$/, use: ['stylec-loader', 'css-loader'] },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};
