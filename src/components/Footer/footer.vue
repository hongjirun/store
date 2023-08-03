<template>
  <div id="footer-container">
    <router-link to="/home" class="footer-item" >
      <i :class="{'iconfont':true,'icon-shouye1':$route.path.indexOf('home')!==-1,'icon-shouye':$route.path.indexOf('home')===-1,'itemActive': $route.path.indexOf('home') !== -1 }"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/address" class="footer-item">
      <i class="iconfont icon-dingdan"></i>
      <span>订单</span>
    </router-link>
    <div class="footer-item">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      cc:false
    }
  },
  methods: {
    changeColor() { 
      this.cc=true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin.scss";
  #footer-container {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid #e7e4e4;
    
    .footer-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #504f4f;
      .itemActive {
        color: green;
      }
      span {
        color: black;
      }
      
      
    }
    
  }

</style>