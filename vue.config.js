module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/prepends.scss";'
      }
    }
  },
  productionSourceMap: true // mapファイルの生成有無
}
