const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: `${path.resolve(__dirname, 'src')}/main.js`,
  build: path.resolve(__dirname, 'dist'),
  htmlTemplate: `${path.resolve(__dirname, 'public')}/index.html`,
};

const extractScss = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
});

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      // Load Javascript
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },

      // Lint Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },

      // Load and Extract Scss
      {
        test: /\.scss$/,
        use: extractScss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
                localIdentName: '[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
                minimize: true,
                modules: true,
                sourceMap: true,
              },
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
              },
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
              },
            },
          ],
        }),
      },

      // Load fonts
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
          },
        },
      },

      // Load Images
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.htmlTemplate,
      inject: true,
    }),
    extractScss,
    // Minify Javascript
    new BabiliPlugin(),

    new CleanWebpackPlugin([PATHS.build]),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
