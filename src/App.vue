<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import loginService from './service/login.service'
import cartService from './service/cart.service'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted () {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    async getUser () {
      let data = await loginService.getUserInfo();
      console.log(data)
      // to-do 将用户信息保存到vuex中
    },
    async getCartCount () {
      let data = await cartService.getCartCount();
      console.log(data)
      // to-do 将购物车商品数量保存到vuex中
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
