<!-- 头部导航栏组件 -->
<template>
  <div id="header-container">
    <slot name="logo"></slot> <!--logo名字-->
    <!--当前地址-->
    <router-link to="/address" v-if="address" class="address"> 
      <i class="iconfont icon-dingwei addr-avatar"></i> <!--定位图标-->
      <span class="addr-span">广州市天河区太古汇</span> <!--定位地址-->
      <i class="iconfont icon-youjiantou addr-avatar"></i> <!--右箭头-->
    </router-link> 
    <!-- 登录|注册跳转 -->
    <router-link to="/login" class="user-login">
      <!-- 登录成功显示图标 -->
      <i class="iconfont icon-yonghu login-avatar" v-if="loginSuccess"></i>
      <!-- 还未登录显示文字 -->
      <span v-else class="login-span">登录|注册</span>

    </router-link>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      loginSuccess: false,
    }
  },
  //address用于判断是否显示头部定位地址
  props:["address"]
}
</script>

<style scoped lang="scss">
  @import "../../style//mixin.scss";
  //头部导航栏的颜色
  $headerTop-color:rgb(66, 141, 28);
  #header-container {
    position: fixed;//给个定位，这样子元素才能进行正常定位
    @include headerTop-size;
    background-color: $headerTop-color;

    //头部导航栏定位地址
    .address {
      width: 170px;
      @include tbc;
      @include sc(15px,#000);
      left: 75px;
      font-weight: bold;
      @include ellipsis;//超出范围后面文字变省略号
      text-decoration: none;

      //头部导航栏图标
      .addr-avatar { 
        font-size: 13px;     
      }

    }

    .user-login {
      @include tbc;
      @include sc(16px,#000);
      right: 5px;
      font-weight: 600;
      text-decoration: none;
    }
  }

</style>