var webpack = require("webpack")
var path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var projectRoot = path.resolve(__dirname, "../src")
var entryPoint = projectRoot + '/scripts/app.js'
var outputPoint = path.resolve(__dirname, "../dist")

var env = process.env.NODE_ENV || 'development'

module.exports = {
  entry: entryPoint, // 入口文件
  output: {
    path: outputPoint,  // 输出目录
    filename: "bundle.js",  // 生成的脚本文件名称
  },
  resolve: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue"
      }, {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      }, {
        //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        test: /\.(jpg|png|gif)$/,
        include: projectRoot,
        loader: "url",
        limit: 10240,
        name: "[name].[ext]?[hash]"  // 文件超出大小限制时的文件命名
      }, {
        // 文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
      }
    ]
  },
  vue: { // 配置vue
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      less: ExtractTextPlugin.extract("css!less")
    },
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}