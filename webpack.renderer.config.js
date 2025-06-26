const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  mode: JSON.stringify(process.env.FINTRAK_MODE),
  target: 'web',
  entry: './src/renderer/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    clean: true // clean dist before build
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: /src/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/, // for MUI or other CSS
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.FINTRAK_MODE': JSON.stringify(process.env.FINTRAK_MODE),
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    historyApiFallback: true
  }
};
