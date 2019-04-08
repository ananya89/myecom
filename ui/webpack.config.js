const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        proxy: { "/api/**": { target: 'http://localhost:3000', secure: false }  }
    },
//   entry: {
//     'index': [
//       path.resolve(__dirname, 'src/index.js')
//     ]
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'public'),
//     publicPath: '/',
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//   ],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
        },
    ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
};