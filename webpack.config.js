const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: `${path.resolve(__dirname, 'src')}/main.js`,
  build: path.resolve(__dirname, 'dist'),
  htmlTemplate: `${path.resolve(__dirname, 'public')}/index.html`
};

module.exports = {
  entry: [
    // activate HMR for React    
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:3000',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    PATHS.app
  ],

  devtool: 'inline-source-map',
  
  output: {
    path: PATHS.build,
    filename: '[name].js',

    // necessary for HMR to know where to load the hot update chunks    
    publicPath: '/',
  },

  module: {
    rules: [
      // Load Javascript
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },

      // Load Scss
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              localIdentName: '[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
              minimize: true,
              modules: true,
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true,
              sourceMap: true,
            }
          }
        ]
      },

      // Load fonts
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]'
          }
        }
      },

      // Load Images
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:8].[ext]',
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.htmlTemplate,
      inject: true,
    }),
    new CleanWebpackPlugin([PATHS.build]),

    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,

    // respond to 404s with index.html    
    historyApiFallback: true,

    // enable HMR on the server    
    hot: true,
  }
}