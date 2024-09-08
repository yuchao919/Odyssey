module.exports = {
  // 新增下面这两行，甚至只要devtool就够了
  productionSourceMap: false,
  configureWebpack: config => {
    console.log(config);
    config.devtool = 'source-map';
  }
};