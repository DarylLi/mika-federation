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
  resolve: {
    extensions: ["", ".js", ".jsx", ".css"],
  },
  devServer: {
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.css$/, // 正则匹配以.css结尾的文件
        use: ["style-loader", "css-loader"],
      },
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
      name: "appSwiper",
      filename: "remoteEntry.js",
      exposes: {
        "./Swiper": "./src/Swiper.tsx",
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
