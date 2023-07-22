const path = require('path');

module.exports = {
  entry: './src/scripts/scripts.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/scripts'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
