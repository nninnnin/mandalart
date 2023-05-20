const path = require("node:path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "/"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
