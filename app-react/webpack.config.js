const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  target: "web",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "appReact",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.js",
        "./LitButton": "./src/LitButton.js",
        "./Main": "./src/Main.jsx",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
