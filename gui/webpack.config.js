var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.js$/,
        loaders: [ 'jsx', 'babel' ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      "window.React": "react",
      ReactDOM: 'react-dom',
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ]
};
