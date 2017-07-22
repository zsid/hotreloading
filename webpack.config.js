const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
  htmlTemplate: `${path.resolve(__dirname, 'public')}/index.html`
};

module.exports = {
  entry: [
    `${PATHS.app}/main.js`
  ],

  devtool: 'inline-source-map',
  
  output: {
    path: PATHS.build,
    filename: '[name].js',
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
      title: 'Webpack Demo, yey',
      template: PATHS.htmlTemplate,
      inject: true,
    }),
    new CleanWebpackPlugin([PATHS.build]),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,

    // respond to 404s with index.html    
    historyApiFallback: true,
  }
}