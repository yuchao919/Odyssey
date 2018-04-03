const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
            name: 'images/[hash:8].[name].[ext]'
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/(node_modules|bower_components)/, /\.json$/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react-app'],
            plugins: [
              // ['transform-es2015-arrow-functions', { spec: true }], ['transform-object-rest-spread']
            ]
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
