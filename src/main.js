import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

const mock = true;
if (mock) {
  require('./mock/api')
}

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
