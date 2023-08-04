<!-- 首页展示组件 -->
<template>
  <div id="home-container">
    <!-- 头部导航栏组件 -->
    <headerTop headerAddress="home"> <!--headerAddress="home"是父组件传递给子组件数据判断显示-->
        <span class="headLogo" @click="reload" slot="logo">嗨吃外卖</span>
    </headerTop>
    <footerBottom></footerBottom>
  </div>
</template>

<script>
//导入头部导航栏组件
import headerTop from '../../components/Header/header.vue'; 
import footerBottom from '../../components/Footer/footer.vue';
export default {
  name:"home",
  components: {
    headerTop,
    footerBottom
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
      font-weight: bolder;
      left: 5px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

</style>