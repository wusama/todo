const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const http = require('https');
// var keepAliveAgent = new http.Agent({ keepAlive: true });
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    open: true,
    http2: true,
    https: true,
    proxy: [{
    //   context: (url) => ['/api/', '/s/', '/ws/'].some(x => url.indexOf(x) != -1),
    //   target: 'https://localhost:5001',
    //   secure: false,
    //   compress: true,
    //   ws: true,
    //   timeout: 0,
    // }, {
      context: ['/api/'],
      target: 'http://localhost:3000',
      ws: true,
      secure: false,
      compress: true,
      timeout: 0,
    }],
  },
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
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
          name: '[name].[ext]',
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
    new webpack.EvalSourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    }),
  ],
};
