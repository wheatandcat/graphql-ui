/* eslint-disable */
import webpack from "webpack"

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "graphql-ui-reports/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
}
