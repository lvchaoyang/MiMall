/**
 * 小米商城 vuex-actions
 */

export default {
  saveUserName (context, username) {
    context.commit('saveUserName', username);
  },
  saveCartCount (context, count) {
    context.commit('saveCartCount', count);
  }
}