var path = require("path")
var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: './js/src/index',

  output: {
      path: path.resolve('./js/dist/'),
      filename: "[name].js",
  },

  module: {
    loaders: [
      {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:
            {
              presets:['es2015', 'es2016', 'es2017'],
              "plugins": [
                "syntax-async-functions",
                "transform-object-rest-spread"
              ]
            }
      },
      {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ],
  }
}