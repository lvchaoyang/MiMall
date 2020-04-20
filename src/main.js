import Vue from 'vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'

const mock = false;
if (mock) {
  require('./mock/api')
}
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading: require('./assets/images/loading-svg/loading-bars.svg')
})
Vue.use(VueCookie)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
