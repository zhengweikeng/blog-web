var webpack = require("webpack")
// webpack中生成HTML的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 将样式提取到单独的css文件里，而不是将样式打包到js文件里了。
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  output: {
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[id].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("styles/bundle.[contenthash].css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 指定模板生成文件
      inject: 'body', // js插入的位置
      hash: true, // 为静态资源生成hash值
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
})