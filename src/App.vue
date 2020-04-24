<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import loginService from './service/login.service'
import cartService from './service/cart.service'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  async mounted () {
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    ...mapActions(['saveUserName', 'saveCartCount']),
    async getUser () {
      let data = await loginService.getUserInfo();
      if (data) {
        this.saveUserName(data.username);
      }
      // this.$store.dispatch('saveUserName', data.username);
    },
    async getCartCount () {
      let data = await cartService.getCartCount();
      if (data) {
        this.saveCartCount(data);
      }
      
      // this.$store.dispatch('saveCartCount', data);
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
