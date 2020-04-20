import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex)

const state = {
  username: '',
  cartCount: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
