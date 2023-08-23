<template>
  <div id="footer-container">
    <router-link to="/home" class="footer-item">
      <i  @click="isSTrue" :class="{'iconfont':true,  'icon-shouye1':$store.state.isShouye&&!$store.state.isDingdan&& !$store.state.isMine,'icon-shouye1-copy':!$store.state.isShouye }"></i>
      <span @click="isSTrue">首页</span>
    </router-link>
    <router-link to="/order" class="footer-item"  >
      <i @click="isDTrue" :class="{ 'iconfont':true,'icon-dingdan': !$store.state.isShouye && $store.state.isDingdan && !$store.state.isMine,'icon-dingdan-copy': !$store.state.isDingdan }"></i>
      <span @click="isDTrue">订单</span>
    </router-link>
    <router-link to="/mine" class="footer-item" >
      <i @click="isMTrue" :class="{ 'iconfont':true,'icon-wode': !$store.state.isShouye && !$store.state.isDingdan && $store.state.isMine,'icon-wode-copy': !$store.state.isMine }"></i>
      <span @click="isMTrue">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      cc: false,
      
    }
  },
  methods: {
    changeColor() { 
      this.cc=true
    },
    isSTrue() { 
      this.$store.commit("changeShouye", { isShouye: true });
      this.$store.commit("changeDingdan", { isDingdan: false });
      this.$store.commit("changeMine", { isMine: false })
    },
    isDTrue() {
      this.$store.commit("changeShouye", { isShouye: false });
      this.$store.commit("changeDingdan", { isDingdan: true });
      this.$store.commit("changeMine", { isMine: false })
    },
    isMTrue() {
      this.$store.commit("changeShouye", { isShouye: false});
      this.$store.commit("changeDingdan", { isDingdan: false });
      this.$store.commit("changeMine", { isMine: true })
    },

  } 
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin.scss";
  @import "../../style/global.scss";
  #footer-container {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid $line;
    background-color: #fff;
    
    .footer-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #504f4f;
      span {
        color: black;
      }
      
      
    }
    
  }

</style>