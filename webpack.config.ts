const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.js$/, use: {
        loader: 'babel-loader',
      options: { presets: ['@babel/preset-env']}
    },
      },
      { test: /\.ts$/, loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] } },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ]
};