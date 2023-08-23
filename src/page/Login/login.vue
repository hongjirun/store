<!-- 账号验证码登录||退登界面 -->
<template>
  <div id="login-container">
    <header-top title="login" addressGoback="login"></header-top>
    <!-- logo图片 -->
    <div class="logo">
      <span>嗨吃外卖</span>
    </div>

    <!-- 还未登录进行验证登录页面即loginSuccess=false -->
    <div class="logining" v-if="!$store.state.loginSuccess">
      <!-- 登录界面 -->
      <form class="login-frame">
        <!-- 手机号输入 -->
        <div class="userInput">
          <!--输入框用正则表达式来限制手机号码的输入格式-->
          <input type="text" placeholder="请输入手机号"  v-model="teleNumber" @click="inputClick">
          <!-- 手机号码输入后验证,格式正确则切换按钮 -->
          <button @click="checkTeleNumber" v-if="!isTrue" :class="{ 'buttonColor': teleNumberTrue }">获取验证码</button>
          <button v-else>重新发送{{ count }}s</button>

        </div>
        <!-- 验证码输入 --> 
        <input type="text" placeholder="请输入验证码" class="pwdInput" v-model="pwdInput" @input="isPwdInpquanTrue" @click="inputClick">  
        <!-- 如果号码输入错误，跳出来进行显示 -->
        <div class="telTip">
          <!-- 根据不同的输入内容进行提示 -->
          <span v-show="isTelEmpty && !isTelFalse && !isVerifyFalse">手机号为空,请先输入完整的11位手机号码</span>
          <span v-show="isTelFalse && !isTelEmpty && !isVerifyFalse">请输入正确的手机号格式</span>
          <span v-show="!isTelFalse && !isTelEmpty && isVerifyFalse">验证码不正确</span>
        </div>
        <!-- 登录按钮 -->
        <div class="loginButtonHidden">
          <button class="loginButton" @click="compareResult" :class="{ 'confirmBtuColor': teleNumberTrue && isPwdInpQuanTrue }" :disabled="!(teleNumberTrue && isPwdInpQuanTrue)" >登录</button>
        </div>
          
      </form>
    </div>
    
    <!-- 登录成功后点击登录页面的显示内容 -->
    <div class="loginSuccess" v-if="$store.state.loginSuccess">
      <div class="userNumber">
        <i class="iconfont icon-wode"></i>
        <span>账号：</span>
        <span>{{ $store.state.teleNumber }}</span>
      </div>
      <!-- 退出登录按钮 -->
      <div class="logOut">
        <button class="logOutButton" @click="logOut">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/Header/header.vue';
export default {
  data() { 
    return {
      teleNumber: "", //登录页面输入框输入的电话号码
      isTrue: false,//登录页面电话号码输入正确或错误返回,开启验证码倒计时
      count: 10,//获取验证码倒计时
      timer: null,//定时器
      isTelEmpty: false,//判断手机号输入是否为空
      isTelFalse: false,//判断手机号输入是否正确
      pwdInput: "",//验证码输入框输入的内容
      isPwdInpQuanTrue: false,//判断验证码输入的内容长度是否正确
      verify: "123456",//模拟验证码
      isVerifyFalse:false,//判断输入验证码是否正确
    }
  },
  components: {
    headerTop,
    
  },
  methods: {
    //点击发送验证码触发的检查输入号码的判定的方法
    checkTeleNumber() {
      if (this.teleNumber === '') {
        this.isTelEmpty = true;
        
      }
      else if (this.teleNumber !== '') { 
        var pattern = "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$";
        var regex = new RegExp(pattern);
        if (regex.test(this.teleNumber)) {
          this.isTrue = true;
          this.startCountDown();
          
        }
        else if(!regex.test(this.teleNumber)) { 
          this.isTrue = false;
          this.isTelFalse = true;
          this.teleNumber = "";
        }
      }
    },
    //this.isTrue为true时触发
    startCountDown() {
      if (this.isTrue) {
        this.timer = setInterval(() => {
          this.count -= 1;
          if (this.count < 0) { 
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
    },
    //点击手机号输入框时触发这个方法取消下面的提示
    inputClick() { 
      this.isTelEmpty = false;
      this.isTelFalse = false;
      this.isVerifyFalse = false;
    },
    //验证码校验
    compareResult() { 
      if (this.pwdInput !== this.verify) {
        this.isVerifyFalse = true;
        console.log(this.$store.state.loginSuccess);
      }
      else if (this.pwdInput === this.verify) { 
        this.isVerifyFalse = false;
        this.$store.commit("changeLoginIconfont", { loginSuccess: true });
        this.$store.commit("changeTeleNumber", { teleNumber: this.teleNumber });
        this.$router.push("/home");
      }
    },
    //判断验证码长度是否正确
    isPwdInpquanTrue() { 
      if (this.pwdInput.length === 6) {
        this.isPwdInpQuanTrue = true;
        
      }
      else { 
        this.isPwdInpQuanTrue = false;
      }
    },
    //点击退出登录改变$store.state.loginSuccess=true,变为false
    logOut() {
      this.$store.commit("changeLoginIconfont", { loginSuccess: false });
    }
    
  },
  computed: {
    //输入正确返回true
    teleNumberTrue() { 
      var pattern = "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$";
      var regex = new RegExp(pattern);
      if (regex.test(this.teleNumber)) {
        return true;

      }
      else { 
        return false;
      }
    }
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
    //还没登录成功界面
    .logining {
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
          //验证码点击按钮在手机号输入正确时改变颜色
          .buttonColor {
            color: green;
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
        //如果号码输入错误，跳出来进行显示
        .telTip {
          span {
            @include sc(12px,red);
            margin-left: 10px;
          }
        }


        //登录按钮  
        .loginButtonHidden {
          .loginButton {
            width: 95%;
            height: 50px;
            background-color: rgb(178, 224, 178);
            border: 0;
            border-radius: 5px;
            margin: 20px 10px 10px 10px;
            
          }
          .confirmBtuColor {
            background-color: green;
          
          }
        }
        
      }
    }
    //登录成功后点击登录页面的显示内容
    .loginSuccess {
      position: fixed;
      top: 244px;
      left: 0;
      @include wh(100%,200px);
      .userNumber {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        .iconfont {
          margin-right: 5px;
          color: green;
        }
        span:nth-child(3) {
          font-weight: bolder;
        }
      }
      .logOut {
        .logOutButton {
          width: 95%;
          height: 50px;
          background-color: green;
          border: 0;
          border-radius: 5px;
          margin: 20px 10px 10px 10px;

        }
      }
    }
  }
</style>