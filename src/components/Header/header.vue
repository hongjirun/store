<!-- 头部导航栏组件 -->
<template>
  <div id="header-container" :style="{backgroundColor:changeBc}">
    <!--首页logo名字-->
    <slot name="logo"></slot> 

    <!--首页当前地址-->
    <router-link to="/address" v-if="headerAddress" class="address"> 
      <i class="iconfont icon-dingwei addr-avatar"></i> <!--定位图标-->
      <span class="addr-span">广州市天河区太古汇</span> <!--定位地址-->
      <i class="iconfont icon-youjiantou addr-avatar"></i> <!--右箭头-->
    </router-link> 

    <!-- 首页收货地址返回按钮 -->
    <div @click="$router.go(-1)" v-if="addressGoback" class="goback">
      <i class="iconfont icon-zuojiantou"></i>
    </div>

    <!-- 首页收货地址title -->
    <div class="address-title" v-if="addressName">
      <span>选择收货地址</span>
    </div>

    <!-- 收货地址选择城市title -->
    <div class="address-title" v-if="addressChoCity">
      <span>选择城市</span>
    </div>

    <!-- 登录|注册跳转 -->
    <router-link to="/login" class="user-login">
      <!-- 登录成功显示图标 -->
      <i class="iconfont icon-yonghu login-avatar" v-if="loginSuccess"></i>
      <!-- 还未登录显示文字 -->
      <span v-else class="login-span">登录|注册</span>
    </router-link>

    <!-- 订单界面头部名字 -->
    <div class="order-title" v-if="orderName">
      <span>订单</span>
    </div>

    <!-- 订单页面搜索框 -->
    <router-link to="/order/search" class="order-search" v-if="search">
      <i class="iconfont icon-sousuo"></i>    
    </router-link>

    <!-- 我的界面头部名字 -->
    <div class="mine-title" v-if="mineName">
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      loginSuccess: false,
      headerTopColorUin: "rgb(66, 141, 28)",
      headerTopColorSpecial: "#fff",
    }
  },
  //address用于判断是否显示头部定位地址
  props: ["headerAddress", "search", "orderName", "mineName", "addressGoback", "addressName", "addressChoCity"],
  computed: {
    //首页跳转定位改变头部导航栏背景颜色
    changeBc() { 
      if (this.$route.path.indexOf('address') !== -1) {
        return this.headerTopColorSpecial;
      }
      else { 
        return this.headerTopColorUin;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style//mixin.scss";
  //头部导航栏的颜色
  $headerTop-color:rgb(66, 141, 28);
  #header-container {
    position: fixed;//给个定位，这样子元素才能进行正常定位
    @include wh(100%,44px);
    //background-color: $headerTop-color;

    //首页头部导航栏定位地址
    .address {
      width: 170px;
      @include tbc;
      @include sc(15px,#000);
      left: 75px;
      font-weight: bold;
      @include ellipsis;//超出范围后面文字变省略号
      text-decoration: none;

      //首页头部导航栏图标
      .addr-avatar { 
        font-size: 13px;     
      }

    }

    //头部返回按钮
    .goback {
      @include tbc;
      @include sc(20px,#000);
      font-weight: bolder;
      left: 5px;
      text-decoration: none
    }

    //首页收货地址title
    .address-title {
      @include center;
      @include sc(18px,#000);
      font-weight: bold;
      
    }

    //头部导航栏登录|注册功能
    .user-login {
      @include tbc;
      @include sc(16px,#000);
      right: 5px;
      font-weight: 600;
      text-decoration: none;
    }
    //订单搜索框
    .order-search {
      @include tbc;
      @include sc(16px,#000);
      left: 5px;
      text-decoration: none;
    }
    //订单title
    .order-title {
      @include center;
      @include sc(20px,#000);
      font-weight: bold;
      
    }

    //我的title
    .mine-title {
      @include center;
      @include sc(20px,#000);
      font-weight: bold;
      
    }

  }

</style>