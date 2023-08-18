<template>
  <div id="login-container">
    <header-top title="login" addressGoback="login"></header-top>
    <!-- logo图片 -->
    <div class="logo">
      <span>嗨吃外卖</span>
    </div>
    <!-- 登录界面 -->
    <form class="login-frame">
      <!-- 手机号输入 -->
      <div class="userInput">
        <!--用正则表达式来限制手机号码的输入-->
        <input type="text" placeholder="请输入手机号"  v-model="teleNumber">
        <!-- 手机号码输入后验证,格式正确则切换按钮 -->
        <button @click="checkTeleNumber" v-if="!isTrue">获取验证码</button>
        <button v-else>重新发送{{ count }}s</button>

      </div>
      <!-- 验证码输入 --> 
      <input type="text" placeholder="请输入验证码" class="pwdInput">  
      <!-- 登录按钮 -->
      <div class="loginButtonHidden">
        <button class="loginButton">登录</button>
      </div>
          
    </form>
  </div>
</template>

<script>
import headerTop from '../../components/Header/header.vue';
export default {
  data() { 
    return {
      teleNumber: "", //登录页面输入框输入的电话号码
      isTrue: false,//登录页面电话号码输入正确或错误返回
      count: 10,//获取验证码倒计时
      timer: null,//定时器
    }
  },
  components: {
    headerTop,
    
  },
  methods: {
    //点击发送验证码触发的检查输入号码的判定的方法
    checkTeleNumber() {
      if (this.teleNumber === '') {
        alert("请输入电话号码");
      }
      else if (this.teleNumber !== '') { 
        var pattern = "^1\\d{10}$";
        var regex = new RegExp(pattern);
        if (regex.test(this.teleNumber)) {
          this.isTrue = true;
          this.startCountDown();
          
        }
        else if(!regex.test(this.teleNumber)) { 
          this.isTrue = false;
          alert("请输入正确的电话号码格式");
          this.teleNumber = "";
        }
      }
    },
    //this.isTrue为true时触发
    startCountDown() {
      if (this.isTrue) {
        this.timer = setInterval(() => {
          this.count -= 1;
          if (this.count === 0) { 
            this.clearCountDown();
            
          }
        }, 1000)
      }
    },
    //时间为0时,结束倒计时
    clearCountDown() {
      clearInterval(this.timer);
      this.count = 10;
      this.isTrue = false;
    }

  },
  // mounted() {
  //   this.startCountDown();
  // },
  // destroyed() {
  //   this.clearOountDown();
  // }
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
        width: 95%;
        display: flex;
        margin: 10px 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid $line;
        //手机号码输入框
        input {
          border: none;
          outline: none;
          margin-right: 100px;
        }
        //获取验证码按钮
        button {
          border: none;
          background-color: transparent;
        }
      }
      //验证码输入
      .pwdInput {
        width: 95%;
        border: 0;
        outline: none;
        padding-bottom: 10px;
        border-bottom: 1px solid $line;
        margin: 10px 10px;
      }
      
      //登录按钮
      .loginButtonHidden {
        .loginButton {
          width: 95%;
          height: 50px;
          background-color: green;
          border: 0;
          margin: 20px 10px 10px 10px;
        }
      }
      
      
     
    }
  }
</style>