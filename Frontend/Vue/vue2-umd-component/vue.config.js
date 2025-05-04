module.exports = {
  configureWebpack: {
    entry: './src/entry.js',
    output: {
      library: 'MyComponent',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      filename: 'my-component.umd.js'
    }
  },
  chainWebpack: config => {
    // 禁用 splitChunks
    config.optimization.delete('splitChunks')
    // 禁用代码分割
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}