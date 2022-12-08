const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin({
    filename:"styles.css",
  })],
  module:{
    rules:[
        {
            test:/\.css$/,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
      ]
  }
};