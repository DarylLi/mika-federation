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
  optimization: {
    minimize: false,
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "swc-loader",
        exclude: /node_modules/,
        options: {
          jsc: {
            transform: {
              react: {
                runtime: "automatic",
              },
            },
            target: "es2017",
            parser: {
              syntax: "typescript",
              jsx: true,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        appReact: "appReact@http://localhost:8101/remoteEntry.js",
        appSwiper: "appSwiper@http://localhost:8102/remoteEntry.js",
        vueApp: "vueApp@http://localhost:8103/remoteEntry.js",
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
