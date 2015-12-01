var path = require("path")

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    "./src/index.jsx"
  ],
  output: {
    path: "./",
    filename: "dist/bundle.js",
  },
  devtool: "inline-source-map",
  resolve: {
    root: [
      path.join(__dirname, "src"),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.coffee$/,
        loader: "coffee",
      },
      {
        test:/\.jsx?$/,
        exclude: /^(node_modules|dist|scripts|assets)/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'react-hot',
          'babel',
        ],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
  ]
}