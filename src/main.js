import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('addNumberSpaces', function (value){
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
})

new Vue({
  render: h => h(App),
}).$mount('#app')
