<!-- 收货地址下方地址选择和收货地址搜索框组件 -->
<template>
  <div id="addressSearch-container">
    <!-- 城市下拉列表跳转 -->
    <router-link to="/address/citychoice" class="city-list">
      <i class="iconfont icon-dingwei"></i>
      <span>广州市</span>
      <i class="iconfont icon-xiala"></i>
    </router-link>
    <!-- 收货地址搜索框 -->
    <div class="search-city">
      <i class="iconfont icon-sousuo icon"></i>
      <input type="text" placeholder="请输入收货地址" class="addSeaInput">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../../style/mixin.scss";
  @import "../../../style/global.scss";
  #addressSearch-container {
    @include wh(100%,44px);
    position: fixed;
    left: 0;
    top: 44px;
    display: flex;
    flex-direction: row;
    padding: 5px ;
    border-bottom: 1px solid $line;
   
    .city-list {
      display: flex;
      align-items: center;
      flex: 1;
      @include sc(14px,#000);
      text-decoration: none;
      
    }
    .search-city {
      display: flex;
      align-items: center;
      flex: 3.7;
      background-color: rgb(246, 246, 246);
      border-radius: 8px;
      .icon {
        margin: 0 3px 0 10px;

      }
      .addSeaInput {
        background-color: transparent;
        border: transparent;
        @include sc(13px,grey);
        outline: none;//移除获取焦点时的边框

      }
    }
  }
</style>