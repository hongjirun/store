<!-- 首页搜索框下面的菜单选项栏小组件 -->
<template>
  <div id="homemenu-container">
    <!-- 第一张菜单 -->
    <ul class="oneMenu" v-show="isSelectedOne">
      <li v-for="item in menu[0]" :key="item.id" class="oneMenuLi">
        <i :class="['iconfont',item.icon]"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <!-- 第二张菜单 -->
    <ul class="twoMenu" v-show="isSelectedTwo">
      <li v-for="item in menu[1]" :key="item.id" class="twoMenuLi">
        <i :class="['iconfont', item.icon]"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <!-- 选择菜单轮播按钮 -->
    <ul class="carouselButton"> 
      <li v-for="(item,index) in menu" :key="index" class="carButLi" @click="isSelect(index)" :class="{'active': selectedIndex ===index}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      selectedIndex: 0,//记录菜单轮播按钮顺序值
      isSelectedOne: true,//判断第一张菜单是否被选择
      isSelectedTwo: false,//判断第二张菜单是否被选择

      //菜单数据
      menu: [
        [
          { id: 1, title: "美食", icon: "icon-meishi" },
          { id: 2, title: "甜点饮品", icon: "icon-Birthday-Cake" },
          { id: 3, title: "超市便利", icon: "icon-ic_market" },
          { id: 4, title: "蔬菜水果", icon: "icon-shucaishuiguo" },
          { id: 5, title: "看病买药", icon: "icon-yaopinjiaocun-01" },
          { id: 6, title: "午餐", icon: "icon-meishi" },
          { id: 7, title: "拼好饭", icon: "icon-Birthday-Cake" },
          { id: 8, title: "跑腿", icon: "icon-ic_market" },
          { id: 9, title: "津贴联盟", icon: "icon-shucaishuiguo" },
          { id: 10, title: "天天神券", icon: "icon-yaopinjiaocun-01" },
          { id: 11, title: "浪漫鲜花", icon: "icon-meishi" },
          { id: 12, title: "汉堡披萨", icon: "icon-Birthday-Cake" },
          { id: 13, title: "小吃馆", icon: "icon-ic_market" },
          { id: 14, title: "煲仔饭", icon: "icon-shucaishuiguo" },
          { id: 15, title: "龙虾烧烤", icon: "icon-yaopinjiaocun-01" },
          
        ],
        [
          { id: 1, title: "凉皮肉夹馍", icon: "icon-meishi" },
          { id: 2, title: "新商机", icon: "icon-Birthday-Cake" },
          { id: 3, title: "鸭脖卤味", icon: "icon-ic_market" },
          { id: 4, title: "饺子馆", icon: "icon-shucaishuiguo" },
          { id: 5, title: "日韩料理", icon: "icon-yaopinjiaocun-01" },
          { id: 6, title: "麻辣烫冒菜", icon: "icon-meishi" },
          { id: 7, title: "黄焖鸡米饭", icon: "icon-Birthday-Cake" },
          { id: 8, title: "家常菜", icon: "icon-ic_market" },
          { id: 9, title: "必点榜", icon: "icon-shucaishuiguo" },
          { id: 10, title: "快食简餐", icon: "icon-yaopinjiaocun-01" },
          { id: 11, title: "全部", icon: "icon-meishi" },
          
        ]
    ]
    }
  },
  methods: {
    isSelect(index) {
      //将点击按钮的顺序值传入存档 
      this.selectedIndex = index;
      //用存档的值来确定展示什么菜单页
      if (this.selectedIndex === 0) {
        this.isSelectedOne = true;
        this.isSelectedTwo = false;
      }
      else if (this.selectedIndex === 1) { 
        this.isSelectedTwo = true;
        this.isSelectedOne = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin.scss";
  #homemenu-container {
     //第一张菜单
    .oneMenu {
      list-style: none;
      display: flex;
      //justify-content: center;
      flex-wrap: wrap;//超过一定宽度令其换行
      //max-width: 100%;
      margin-left: 10px;
      .oneMenuLi {
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
    //第二张菜单
    .twoMenu {
      list-style: none;
      display: flex;
      //justify-content: center;
      flex-wrap: wrap;//超过一定宽度令其换行
      //max-width: 100%;
      margin-left: 10px;
      .twoMenuLi {
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

    //选择菜单轮播按钮
    .carouselButton {
      display: flex;
      justify-content: center;
      .carButLi {
        list-style: none;
        margin: 0 8px;
        font-size: 18px;
        border: 5px solid rgb(213, 211, 211);
        border-radius: 50%;
        cursor: pointer;
        
      }
      .active {
        border-color: green;
      }
    }
  }

</style>