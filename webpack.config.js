// webpack.config.js

const path = require('path');

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'js')
    },
    module:{
        rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }
        ]
    },
    mode: process.env.NODE_ENV == 'production' ? 'production': 'development'
}
