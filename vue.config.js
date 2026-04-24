const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',

  // Desactiva source maps (mejora velocidad de compilación)
  productionSourceMap: false,

  chainWebpack: (config) => {
    // Excluye node_modules del transpiling innecesario
    config.module.rule('js').exclude.add(/node_modules/);

    // Cache de Babel para compilaciones más rápidas
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options) => ({
        ...options,
        cacheDirectory: true,
      }));
  },
});
