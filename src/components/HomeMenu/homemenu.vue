<!-- 首页搜索框下面的菜单选项栏小组件 -->
<template>
  <div id="homemenu-container">
    <ul>
      <li v-for="item in menu.one" :key="item.id">
        <i :class="['iconfont',item.icon]"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      menu: {
        one: [
          { id: 1, title: "美食", icon: "icon-meishi" },
          { id: 2, title: "甜点饮品", icon: "icon-Birthday-Cake" },
          { id: 3, title: "超市便利", icon: "icon-ic_market" },
          { id: 4, title: "蔬菜水果", icon: "icon-shucaishuiguo" },
          { id: 5, title: "看病买药", icon: "icon-yaopinjiaocun-01" },
          { id: 6, title: "美食", icon: "icon-meishi" },
          { id: 7, title: "甜点饮品", icon: "icon-Birthday-Cake" },
          { id: 8, title: "超市便利", icon: "icon-ic_market" },
          { id: 9, title: "蔬菜水果", icon: "icon-shucaishuiguo" },
          { id: 10, title: "看病买药", icon: "icon-yaopinjiaocun-01" },
          { id: 11, title: "美食", icon: "icon-meishi" },
          { id: 12, title: "甜点饮品", icon: "icon-Birthday-Cake" },
          { id: 13, title: "超市便利", icon: "icon-ic_market" },
          { id: 14, title: "蔬菜水果", icon: "icon-shucaishuiguo" },
          { id: 15, title: "看病买药", icon: "icon-yaopinjiaocun-01" },
          
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin.scss";
  #homemenu-container {
    width: 100%;
    height: 300px;
    position: fixed;
    top: 100px;
    left: 0;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;//超过一定宽度令其换行
      max-width: 400px;

      li {
        width: 65px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 15px 3px;
        i {
          font-size: 25px;
          margin-bottom: 5px;
        }
        span {
          font-size: 13px;
        }
      }
    }
  }

</style>