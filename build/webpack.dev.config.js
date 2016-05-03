var webpack = require("webpack")
// webpack中生成HTML的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 将样式提取到单独的css文件里，而不是将样式打包到js文件里了。
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  output: {
    sourceMapFilename: "[file].map" // sourceMap文件名
  },
  debug: true,
  devtool: "#source-map",
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 指定模板生成文件
      inject: 'body', // js插入的位置
      hash: true, // 为静态资源生成hash值
    }),
    new webpack.HotModuleReplacementPlugin() //热加载
  ],
  devServer: {
    contentBase: "../dist",
    host: "localhost",
    port: 8081,
    inline: true, // 可以监控js变化
    hot: true,
    open: true,
    colors: true
  }
})