const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.htmlTemplate,
      inject: true,
    }),
    new CleanWebpackPlugin([PATHS.build]),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
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