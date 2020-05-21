<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import orderService from '../service/order.service'
import Loading from '../components/Loading'
import OrderHeader from '../components/OrderHeader'
export default {
  name: "alipay",
  components: { Loading, OrderHeader },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit();
  },
  methods: {
     async paySubmit() {
       let params = {
          orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          amount: 0.01, // 单位元
          payType: 1 // 1支付宝，2微信
        };
       let data = await orderService.payForGoods(params);
      //  console.log(data.content);
       this.content = data.content;
      //  setTimeout(() => {
      //    document.forms[0].submit()
      //  }, 100)
     }
  }
}
</script>

<style scoped lang="less">

</style>