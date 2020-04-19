<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../assets/images/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>             
    <div class="footer-link">
      <a href="https://github.com/lvchaoyang" target="_blank">Young</a><span>|</span>
      <a href="https://juejin.im/" target="_blank">掘金</a><span>|</span>
      <a href="https://blog.csdn.net/" target="_blank">CSDN</a><span>|</span>
      <a href="https://music.163.com/" target="_blank">网易云音乐</a>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }
  }
</style>