module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/prepends.scss";'
      }
    }
  },
  baseUrl: './', // これ設定しないとビルドした時に画面が真っ白になる
  productionSourceMap: true // mapファイルの生成有無
}
