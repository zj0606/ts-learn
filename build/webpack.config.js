const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
      filename: 'app.js'
  },
  resolve: {
    // 模块导入扩展名处理
    extensions: ['.js', '.ts', '.tsx']
  },
// 让开发速度更快点
  devtool: 'eval-cheap-module-source-map',
  module:{
      rules:[
          {
            test: /\.tsx?$/i,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
          }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          template: './public/index.html'
      })
  ]
}