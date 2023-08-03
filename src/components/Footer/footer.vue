<template>
  <div id="footer-container">
    <router-link to="/home" class="footer-item" >
      <i :class="{'iconfont':true,'icon-shouye1':true ,'itemActive': $route.path.indexOf('home') !== -1 }"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/order" class="footer-item">
      <i class="iconfont icon-dingdan" :class="{ 'itemActive': $route.path.indexOf('order') !== -1 }"></i>
      <span>订单</span>
    </router-link>
    <router-link to="/mine" class="footer-item">
      <i class="iconfont icon-wode" :class="{ 'itemActive': $route.path.indexOf('mine') !== -1 }"></i>
      <span>我的</span>
    </router-link>
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
        font-weight: bolder;
        color: green;
      }
      span {
        color: black;
      }
      
      
    }
    
  }

</style>