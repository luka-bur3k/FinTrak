import * as path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: JSON.stringify(process.env.FINTRAK_MODE),
  target: 'web', // Web for React
  entry: './src/renderer/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
    publicPath: './',
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
      template: path.resolve(__dirname, 'public', 'index.html'),
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
