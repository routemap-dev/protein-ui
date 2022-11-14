const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "protein-ui.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
};
