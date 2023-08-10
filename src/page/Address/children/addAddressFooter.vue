<!-- 收货地址页脚新增收货地址 -->
<template>
  <div class="addAddressFooter-container">
    <router-link to="/address/addaddress" class="addaddress">
      <i class="iconfont icon-jiahao"></i>
      <span>新增收货地址</span>
    </router-link>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  @import "../../../style//mixin.scss";
  @import "../../../style/global.scss";
  .addAddressFooter-container {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $line;
    .addaddress {
      text-decoration: none;
      @include sc(16px,#000);
      i {
        @include sc(20px,green);
        margin-right: 5px;
      }
    }
  }

</style>