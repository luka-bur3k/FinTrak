// webpack.main.config.js
import * as path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: JSON.stringify(process.env.FINTRAK_MODE),
  target: 'electron-main',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: 'ts-loader'
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
