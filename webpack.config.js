var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, "example/main.jsx")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "example"),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  module: {
    rules: [
      { test: /(\.jsx|\.js)$/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader","css-loader"] }
    ]
  }
};
