// webpack.main.config.js
const path = require('path');

require('dotenv').config();

module.exports = {
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
