const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 58081
  },
  configureWebpack: {
    devtool: 'source-map'
  }
})
