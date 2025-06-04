const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require("vue-loader");

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
    port: 3003,
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
        test: /\.vue$/,
        use: "vue-loader",
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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "vueApp",
      filename: "remoteEntry.js",
      exposes: {
        "./vueMain": "./src/App.vue",
        "./vueLayout": "./components/Layout.vue",
        "./vueFoot": "./components/Foot.vue",
      },
      shared: {
        vue: {
          singleton: true,
        },
      },
    }),
  ],
};
