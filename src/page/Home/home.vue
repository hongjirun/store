<!-- 首页展示组件 -->
<template>
  <div id="home-container">
    <!-- 头部导航栏组件 -->
    <headerTop>
        <span class="headLogo" @click="reload" slot="logo">嗨吃外卖</span>
        
    </headerTop>
  </div>
</template>

<script>
//导入头部导航栏组件
import headerTop from '../../components/Header/header.vue';
export default {
  name:"home",
  components: {
    headerTop
  },
  methods: {
    reload() {
      window.location.reload();
     }
  }
};
</script>

<style scoped lang="scss">
  @import "../../style//mixin.scss";
  #home-container {
    .headLogo {
      @include sc(16px,#fff);
      @include tbc;
      font-weight: 400px;
      left: 5px;
      
    }
  }

</style>