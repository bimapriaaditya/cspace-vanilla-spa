const path = require('path');

module.exports = {
  mode: "development",
  watch: true,
  entry: path.resolve(__dirname, './src/App.jsx'),
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
