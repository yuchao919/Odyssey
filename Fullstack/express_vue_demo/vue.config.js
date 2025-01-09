const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 38081
  },
  configureWebpack: {
    devtool: 'source-map'
  }
});
