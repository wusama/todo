const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../server/dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            plugins: [
              new CleanCSSPlugin({ advanced: true }),
            ],
          },
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g$|gif|png)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name]_[hash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,
    }),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        warnings: false,
        drop_console: true,
        output: {
          comments: /^\**!|@preserve|@li.cense|@cc_on/i,
        },
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'async', // all/async/initial
      // minSize: 20000,
      // maxSize: 0,
      automaticNameDelimiter: '_',
      // enforceSizeThreshold: 50000,
    },
  },
};
