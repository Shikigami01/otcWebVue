import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import './assets/style/main.scss'

Vue.config.productionTip = false

new Vue({
  // ! To Do なぜか死んでる
  // el: '#app',
  // data () {
  //   return {
  //     info: null
  //   }
  // },
  // mounted () {
  //   axios.get('./assets/workList.json').then(response => (this.info = response))
  // },
  router,
  render: h => h(App)
}).$mount('#app')
