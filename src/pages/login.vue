<template>
  <div class="login">
    <div class="container">
      <a href="/index"><img src="../assets/images/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://github.com/lvchaoyang" target="_blank">Young</a><span>|</span>
        <a href="https://juejin.im/" target="_blank">掘金</a><span>|</span>
        <a href="https://blog.csdn.net/" target="_blank">CSDN</a><span>|</span>
        <a href="https://music.163.com/" target="_blank">网易云音乐</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import loginService from '../service/login.service'
import { Message } from 'element-ui'
export default {
  name: "login",
  data() {
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods: {  
    /**
     * 登录
     */
    async login () {
      let json = {
        username: this.username,
        password: this.password
      }
      let data = await loginService.login(json);
      console.log(data);
      this.$cookie.set('userId', data.id, {expires: 'Session'});
      // todo 保存用户名
      this.$store.dispatch('saveUserName', data.username);
      this.$router.push({
        name: 'index',
        params: {
          from: 'login'
        }
      });
    },
    /**
     * 注册
     */
    async register () {
      let json = {
        username: '',
        password: '',
        email: ''
      }
      let data = await loginService.reqister(json);
      console.log(data);
      Message.success('注册成功')
    }
  }
}
</script>

<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('../assets/images/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>