<template>
  <div id="addressChoiceCity-container">
    <headerTop addressGoback="addressChoiceCity" addressChoCity="addressChoiceCity"></headerTop>
    <!-- 选择城市页面搜索框 -->
    <div class="choiceCityInput">
      <div class="searchCity">
        <i class="iconfont icon-sousuo icon"></i>
        <input type="text" placeholder="输入城市名进行搜索" class="CitySeaInput">
      </div>
    </div>
    <!-- 当前定位城市显示 -->
    <div class="showPosition">
      <div class="showdetail">
        <i class="iconfont icon-dingwei icon"></i>
        <span >当前定位城市</span>
        <span class="cityName" @click="$router.go(-1)">广州市</span>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../../components/Header/header.vue';
export default {
  components: {
    headerTop,
  }
}
</script>

<style scoped lang="scss">
  @import "../../../style/mixin.scss";
  @import "../../../style/global.scss";
  #addressChoiceCity-container {
    //选择城市页面搜索框
    .choiceCityInput {
      @include wh(100%,40px);
      position: fixed;
      left: 0;
      top: 44px;
      padding-bottom: 2px;
      border-bottom: 1px solid $line;  
      .searchCity {
        height: 30px;
        background-color: rgb(246, 246, 246);
        border-radius: 5px;
        display: flex;
        align-items: center;
        .icon {
          margin: 0 3px 0 5px;
        }
        .CitySeaInput {
          background-color: transparent;
          border: transparent;
          @include sc(13px,grey);
          outline: none;//移除获取焦点时的边框
        }
      }
      
    }
    //当前定位城市显示
    .showPosition {
      @include wh(100%,40px);
      @include sc(16px,#000);
      position: fixed;
      top: 84px;
      left: 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $line;
      .showdetail {
        padding: 5px;
        .icon {
          margin-right: 5px;
        }
        .cityName {
          margin-left: 5px;
          font-size: 17px;
          font-weight: 510;
        }
      }
    }

  }

</style>