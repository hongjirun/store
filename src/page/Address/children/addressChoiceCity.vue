<template>
  <div id="addressChoiceCity-container">
    <div class="head">
      <!-- 头部导航栏 -->
      <headerTop addressGoback="addressChoiceCity" addressChoCity="addressChoiceCity"></headerTop>
    
      <!-- 选择城市页面搜索框 -->
      <div class="choiceCityInput">
        <div class="searchCity" >
          <i class="iconfont icon-sousuo icon"></i>
          <input type="text" placeholder="输入城市名进行搜索" class="CitySeaInput" v-model="inputContent">
        </div>
      </div>

    

      <!-- 当前定位城市显示 -->
      <div class="showPosition" v-show="!isInput">
        <div class="showdetail">
          <i class="iconfont icon-dingwei icon"></i>
          <span >当前定位城市</span>
          <span class="cityName" @click="$router.go(-1)">{{ $store.state.positionCity }}市</span>
        </div>
      </div>
      
    </div>
    

    <!-- 显示输入搜索框内容对应文字的城市列表 -->
    <div class="cityList" v-if="isInput">
      <ul>
        <li v-for="(item, i) in matchCity" :key="i"  class="listShow" @click="changePoitCity(item)">{{ item }}</li>
      </ul>
    </div>

    <!-- 页面主要内容 -->
    <div class="CityContent" @scroll="handleScroll">
      <!-- 热门城市显示 -->
      <div class="hotCity" v-show="!isInput">
        <div class="hotTitle">热门城市</div>
        <ul class="hotCityList">
          <li v-for="(item, index) in hotCity" :key="index" @click="changePoitCity(item)" :class="{ active: item == $store.state.positionCity }">{{ item }}</li>
        </ul>   
      </div>

      <!-- 城市按字母分类列表 -->
      <div class="cityListAll" v-show="!isInput">
        <div class="listModule" v-for="(item, index) in cityListAll" :key="index">
          <div class="letter">{{ index }}</div>
          <ul>
            <li v-for="(city, i) in item" :key="i" @click="changePoitCity(city)">{{ city }}</li>
          </ul>
        </div>
      </div>

    </div>
    

    
  </div>
</template>

<script>
import headerTop from '../../../components/Header/header.vue';
export default { 
  data() { 
    return {
      cities: ["北京", "上海", "广州", "成都", "杭州", "广西"],
      inputContent: "",//搜索城市输入框内容
      hotCity: ["北京", "成都", "重庆", "广州", "杭州", "南京", "上海", "深圳", "苏州", "天津", "武汉", "西安"],//热门城市列表
      cityListAll: {
        A: ["鞍山", "安庆", "安阳", "安顺", "安康", "阿拉善盟", "阿克苏", "阿勒泰"],
        B: ["北京", "包头", "蚌埠", "保定", "宝鸡", "白银", "宝应县", "亳州", "毕节", "滨州"],
        C: ["成都", "长沙", "重庆", "长春", "常州", "常德", "沧州", "承德", "朝阳", "郴州"],
        D:["大连", "东莞", "德阳", "丹东", "大庆", "东营", "大同", "达州", "德州", "大理"]
      }
    }
  },
  components: {
    headerTop,
  },
  computed: {
    //判断输入框是否有内容，有的话就返回true，没有的话就返回false
    isInput() { 
      if (this.inputContent !== '') {
        return true;
      }
      else { 
        return false;
      }
    },
    //根据搜索框的内容来用正则表达式进行匹配筛选返回一个过滤完的数组
    matchCity() { 
      const inputValue = this.inputContent.trim();//获取搜索框的内容然后去掉前后空格，防止匹配不了
      if (inputValue === '') { 
        return [];//输入值为空，返回空数组
      }
      const pattern = new RegExp(inputValue.split("").join(".*"), "i");//将搜索框内容输入生成正则表达式
      return this.cities.filter(city => pattern.test(city));

    }
  },
  methods: {
    changePoitCity(positionCity) { 
      this.$store.commit("changePositionCity", { city: positionCity });
      this.$router.go(-1);
    },
    handleScroll(event) { 
      
       
      
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../style/mixin.scss";
  @import "../../../style/global.scss";
  #addressChoiceCity-container {
    .head {     
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
            font-size: 16px;
            font-weight: bolder;
            cursor: pointer;
          }
        }
      }
    }

    

    //搜索展示对应的城市列表
    .cityList {
      width: 100%;
      @include sc(16px,#000);
      position: fixed;
      top: 84px;
      left: 0;
      
      .listShow {
        @include wh(95%,30px);
        display: flex;
        align-items: center;
        margin: 5px  ;
        border-bottom: 1px solid $line;
      }
    }

    //页面主要内容
    .CityContent {
      width: 100%;
      height: calc(100% - 140px);
      position: fixed;
      top: 140px;
      left: 0;
      overflow-y: auto;
      //热门城市列表
      .hotCity {
        @include sc(16px,#000);
        
       .hotTitle {
          margin: 0 5px 10px 5px;
          color: grey;
          font-size: 14px;
        }
        .hotCityList {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          margin-left: 5px;
          
          
          li {
            width: 20%;
            height: 30px;
            margin: 5px;
            font-size: 14px;
            //文字居中
            @include flex-center;
            border-radius: 5px;
            background-color: rgb(230, 227, 227);
            
          }
          .active {
            background-color: rgb(108, 189, 108);
            color: rgb(58, 246, 58);
          }
          
        }
        
      }
      //城市按字母分类列表
      .cityListAll {
        width: 100%;
        margin: 30px 0 0 5px;
        .listModule {
          .letter {
            width: 90%;
            margin: 20px 0 0px 5px;
            @include sc(15px,grey);
            border-bottom: 1px solid $line;
            padding-bottom: 5px;
          }
          ul {
            list-style: none;
            
            li {
              width: 90%;
              @include sc(14px,#000);
              padding: 10px 0;
              
              border-bottom: 1px solid $line;
            }
          }
        }
        
        
      }
    }
    

  }

</style>