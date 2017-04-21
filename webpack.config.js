const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
    pricePage: './src/price/index.js',
    modal: './src/modal/index.js',
    portfolio: './src/portfolioPage/index.js',
    mobile: './src/mobile/index.js',
    works: './src/worksPage/index.js',
    metrika: './src/metrika/index.js'
  },
  devServer: {
    contentBase: __dirname,
    hot: true,
    inline: true,
    publicPath: './'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  devtool: "eval",
  watch: true,
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpackUglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'src/.cached_uglify/'),
      debug: true,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader?minimize=true', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader?minimize=true']
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
             query: {
               mozjpeg: {
                 progressive: true,
               },
               gifsicle: {
                 interlaced: false,
               },
               optipng: {
                 optimizationLevel: 4,
               },
               pngquant: {
                 quality: '75-90',
                 speed: 3,
               },
             },
          }
        ]
      },
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
