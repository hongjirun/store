<!-- 首页食品列表大全 -->
<template>
  <div id="foodlist-container">
    <!-- 每个食品列表 -->
    <div class="foodList">
      <!-- 左侧内容 -->
      <div class="left">
        <img src="data:image/jpeg;base64,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" alt="">
      </div>
      <!-- 右侧内容 -->
      <div class="right">
        <div class="title">
          <span>肯德基</span>
        </div>
        <div class="detail">
          <span>5.0分</span>
          <span>月售500+</span>
          <span>人均￥17</span>
        </div>
        <div class="cost">
          <span>起送￥20</span>
          <span>配送约￥0</span>
        </div>
        <div class="comment">
          <span>好吃！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  @import "../../style/global.scss";
  @import "../../style/mixin.scss";
  #foodlist-container {
    
    .foodList {
      height: 110px;
      margin: 10px;
      border-radius: 5px;
      padding: 10px;
      background-color: #fff;
      display: flex;
      align-items: center;
      .left {
        
        img {
          width: 110px;
          height: 90px;
          border-radius: 5px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
      }
    }
    
    
  }

</style>