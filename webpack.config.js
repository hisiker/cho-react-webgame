const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"], // mime
  },

  entry: {
    app: "./client",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, // .jsx or .js file
        loader: "babel-loader",
        options: {
          presets: [
            [
              //preset option.
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // browsers lists.
                },
                debug: true,
              },
            ],
            ["@babel/preset-react"],
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },

  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
