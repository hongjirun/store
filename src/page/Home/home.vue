<!-- 首页展示组件 -->
<template>
  <div id="home-container">
    <!-- 头部导航栏组件 -->
    <headerTop headerAddress="home" class="head"> <!--headerAddress="home"是父组件传递给子组件数据判断显示-->
        <span class="headLogo" @click="reload" slot="logo">嗨吃外卖</span>
    </headerTop>
    <div class="content">
      <!-- 搜索框 -->
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入您要搜索的内容" maxlength="30">
        <button>搜索</button>
      </div>
      <homemenu></homemenu>
      <foodlist class="foodList"></foodlist>
    </div>
    <footerBottom></footerBottom>
  </div>
</template>

<script>
//导入头部导航栏组件
import headerTop from '../../components/Header/header.vue'; 
import footerBottom from '../../components/Footer/footer.vue';
import homemenu from '../../components/HomeMenu/homemenu.vue';
import foodlist from '../../components/FoodList/foodlist.vue';
export default {
  name:"home",
  components: {
    headerTop,
    footerBottom,
    homemenu,
    foodlist
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
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgb(66, 141, 28);
    .headLogo {
      @include sc(16px,#fff);
      @include tbc;
      font-weight: bolder;
      left: 5px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .content {
      width: 100%;
      height: calc(100% - 93px);
      position: fixed;
      top: 44px;
      left: 0;
      background-color: #f6f4f4;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      overflow: auto;        
      .search {
        height: 30px;
        margin: 10px 10px;
        border: 1px solid rgb(66, 141, 28);
        border-radius: 25px;
        display: flex;
       
        i {
          margin: 5px ;
          
        }
        input {
          border: 0;
          outline: none;
          flex: 4;
        }
        button {
          margin: 0;
          padding: 0;
          background-color: green;
          border: 0;
          border-radius: 25px;
          flex: 1;
        }

      }
      .foodList {
        margin-top: 20px;
      }
      
    }
  }

</style>