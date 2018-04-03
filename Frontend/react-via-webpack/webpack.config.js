const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
    vendor: ['react', 'react-dom']
  },
  output: {
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      // {
      //   test: /\.(png|jpg|jpeg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: 'assets/img/[name].[ext]?[hash:8]',
      //       outputPath: './assets/img'
      //     }
      //   }
      // },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name:'images/[hash:8].[name].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new HtmlWebpackPlugin({
      title: 'React via Webpack',
      template: 'public/index.html'
      // hash: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new ExtractTextPlugin('styles.css'),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  // devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hotOnly: true,
    inline: true,
    port: 9000
  }
};
