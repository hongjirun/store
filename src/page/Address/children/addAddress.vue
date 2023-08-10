<!-- 新增收货地址页面 -->
<template>
  <div id="addAddress-container">
    <header-top addressGoback="addAddress" addAddress="addAddress"></header-top>
    <div class="background">
      <div class="container">
        <div class="choiceAddress">选择收货地址</div>
        <div class="menpaihao">
          <span>门牌号</span>
          <input type="text" placeholder="详细地址,例1层101室">
        </div>
        <div class="biaoqian">
          <span>标签</span>
          <ul>
            <li>家</li>
            <li>公司</li>
            <li>学校</li>
            <li>父母家</li>
          </ul>
        </div>
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
  @import "../../../style//global.scss";
  @import "../../../style/mixin.scss";
  #addAddress-container{
    .background {
      width: 100%;
      height: calc(100% - 44px);
      position: fixed;
      top: 44px;
      left: 0;
      background-image: url("../../../images/background.jpg");
      background-size: cover;
      background-position: center center;
      .container {
        width: 95%;
        height: 95%;
        background: #fff;
        margin: 15px auto;
        border-radius: 15px;
      }
    }
  }
</style>