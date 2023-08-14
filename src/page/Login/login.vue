<template>
  <div id="login-container">
    <header-top title="login" addressGoback="login"></header-top>
    <!-- logo图片 -->
    <div class="logo">
      <span>嗨吃外卖</span>
    </div>
    <!-- 登录界面 -->
    <div class="login-frame">
      <!-- 手机号输入 -->
      <div class="userInput">
        <input type="text" placeholder="请输入手机号">
        <button>获取验证码</button>
      </div>
      <!-- 验证码输入 --> 
      <input type="text" placeholder="请输入验证码" class="pwdInput">  
      <!-- 登录按钮 -->
      <button class="loginButton">登录</button>    
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/Header/header.vue';
export default {
  components: {
    headerTop,

  }
}
</script>

<style scoped lang="scss">
  @import "../../style/global.scss";
  @import "../../style/mixin.scss";
  #login-container {
    .logo {
      position: fixed;
      top: 44px;
      left: 0;
      @include wh(100%,200px);
      display: flex;
      justify-content: center;
      align-items: center;
      
      span {
        @include wh(120px,40px);
        @include sc(25px,#fff);
        background-color: green;
        font-weight: bolder;
        font-family: Arial, Helvetica, sans-serif;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

      }
      
    }
    //登录界面
    .login-frame {
      position: fixed;
      top: 244px;
      left: 0;
      @include wh(100%,200px);
      
      //手机号输入
      .userInput {
        width: 100%;
        display: flex;
        margin: 10px 5px;
        padding-bottom: 10px;
        border-bottom: 1px solid $line;
        
        input {
          border: none;
          outline: none;
          margin-right: 120px;
        }
        button {
          border: none;
          background-color: transparent;
        }
      }
      
     
    }
  }
</style>