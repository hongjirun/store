<!-- 头部导航栏组件 -->
<template>
  <div id="header-container">
    <slot name="logo"></slot> <!--logo名字-->
    <slot name="address"></slot> <!--当前地址-->
  </div>
</template>

<script>
export default {

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
    
  }

</style>