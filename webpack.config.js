const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: './src/index.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      use: 'ts-loader'
    }]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [`...`,new CSSMinimizerWebpackPlugin()]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [new HTMLWebpackPlugin({
    template: './src/index.html'
  })]
}
