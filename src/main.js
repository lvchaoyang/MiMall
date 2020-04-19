import Vue from 'vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import App from './App.vue'

const mock = false;
if (mock) {
  require('./mock/api')
}
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading: require('./assets/images/loading-svg/loading-bars.svg')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
