<!-- 收货地址下方地址选择和收货地址搜索框组件 -->
<template>
  <div id="addressSearch-container">
    <!-- 城市下拉列表跳转 -->
    <router-link to="/address/citychoice" class="city-list">
      <i class="iconfont icon-dingwei"></i>
      <span>{{ $store.state.positionCity }}</span>
      <i class="iconfont icon-xiala"></i>
    </router-link>

    <!-- 收货地址搜索框 -->
    <div class="search-city">
      <i class="iconfont icon-sousuo icon"></i>
      <input type="text" placeholder="请输入收货地址" class="addSeaInput" v-model="inputContent">
    </div>

    <!-- 搜索框输入内容显示列表 -->
    <div class="search-list" v-show="isInput">
      <ul>
        <li v-for="(item,index) in matchCity" :key="index" class="listShow" @click="changeReceAddr(item)">{{item}}</li>
      </ul>
    </div>

    <!-- 搜索框下内容 -->   
    <div class="content" v-show="!isInput">
      <!-- 收货具体地址定位 -->
      <div class="receipt">
        <span class="receAddress">{{ $store.state.receiptAddress }}</span>
        <div class="reloadAddress" @click="reloadAddress">
          <i class="iconfont icon-dingwei"></i>
          <span >重新定位</span>
        </div>
      </div>

      <!-- 我的收货地址信息列表 -->
      <div class="myAddress">
        <div class="myAddTitle">
          <i class="iconfont icon-shouye"></i>
          <span>我的收货地址</span>    
        </div>
        <div class="myAddContent">
          <!-- 展示前三条收货地址信息列表 -->
          <div class="contentModule" v-for="(item, index) in displayItems" :key="index" @click="changeReceAddr(item.address)" :class="{ 'border-bottom': !dropdownOpen }">
            <div>{{ item.address }}</div>
            <ul>
              <li v-for="(item_list, i) in item.contact" :key="i">
                {{ item_list }}
              </li>
            </ul>
          </div>
          <!-- 展开按钮显示剩余信息列表 -->
          <div class="dropdown" v-if="this.$store.state.myAddressAll.length > 3">
            <div class="contentModuleRest" v-for="(item_rest, i) in displayRestItems" :key="i" @click="changeReceAddr(item_rest.address)">
              <div class="addressRest">{{ item_rest.address }}</div>
              <ul>
                <li v-for="(item_rest_list, index) in item_rest.contact" :key="index">{{ item_rest_list }}</li>
              </ul>
            </div>
            <button  @click="toggleDropdown">
              {{ dropdownOpen ? "收起" : "展示更多地址" }}
              <i class="iconfont icon-xiala" v-if="!dropdownOpen"></i>
              <i class="iconfont icon-shangla" v-if="dropdownOpen"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
export default {
  data() { 
    return {
      dropdownOpen: false,//判断是否需要展开，true为已经展开多余(显示收起)，false为收取多余(显示展开)
      inputContent: "",//搜索框内容
      positionCityList:[],//获取所有城市中定位城市的列表内容
    }
  },
  methods: {
    reloadAddress() {
      window.location.reload();
    },
    //修改收货地址
    changeReceAddr(receiptAddress) { 
      this.$store.commit("changeReceiptAddress", { receAddr: receiptAddress });
      this.$router.go(-1);
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    
  },
  computed: {
    //获取收货地址前三个，进行展示
    displayItems() { 
      if (this.$store.state.myAddressAll.length > 3) {
        return this.$store.state.myAddressAll.slice(0, 3);//返回数组前三个
      }
      else { 
        return this.$store.state.myAddressAll;
      }
    },
    //获取收货地址第三个信息后的信息，进行展示
    displayRestItems() { 
      if (this.dropdownOpen) {
        return this.$store.state.myAddressAll.slice(3);
      }
      else { 
        return [];
      }
    },
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
      // 提取城市名字跟定位城市对比
      for (let i = 0; i < this.$store.state.cityTown.length; i++) { 
        if (this.$store.state.cityTown[i].city === this.$store.state.positionCity) { 
          this.positionCityList = this.$store.state.cityTown[i].places;
          break;
        }
      }
      return this.positionCityList.filter(city => pattern.test(city));

    }
  }
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
   
    // 城市下拉列表跳转
    .city-list {
      display: flex;
      align-items: center;
      flex: 1;
      @include sc(14px,#000);
      text-decoration: none;
      
    }

    //收货地址搜索框
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
    //搜索框输入内容显示列表
    .search-list {
      width: 100%;
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

    //搜索框下内容
    .content {
      //收货具体地址定位
      .receipt {
        @include wh(100%,50px);
        position: fixed;
        top: 84px;
        left: 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid $line;
        .receAddress {
          @include sc(16px,#000);
          margin: 0 10px;
        }
        .reloadAddress {
          position: fixed;
          right: 0;
          margin-right: 5px;
          i {
            color: rgb(58, 246, 58);
          }
          span {
            @include sc(14px,rgb(58, 246, 58));
          }
        }
      }

      //我的收货地址信息列表
      .myAddress {
        width: 100%;
        height: calc(100% - 200px);
        position: fixed;
        top: 134px;
        left: 0;
        margin: 0 10px;
        overflow-y: auto;
        .myAddTitle {
          @include sc(14px,grey);
          margin: 5px 0;
          i {
            margin-right: 5px;
          }
        }
        .myAddContent {
          .border-bottom {
            &:nth-child(3){
              border-bottom: 0;
              padding-bottom: 0;
            }
          }
          //展示前三条收货地址信息列表
          .contentModule {
            margin: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid $line;       
            
            div {
              @include sc(16px,#000);
              margin-bottom: 5px;
            }

            ul {
              list-style: none;
              display: flex;
              @include sc(14px,grey);
              li {
                margin-right: 20px;
                &:nth-child(1)::after{
                  content: "先生";
                }
              }
            }
          }
          //展开按钮显示剩余信息列表
          .dropdown {  
            padding-bottom: 10px;
            border-bottom: 1px solid $line;
            
            .contentModuleRest {
              margin: 20px;
              padding-bottom: 10px;
              border-bottom: 1px solid $line;
              &:last-of-type {
                border-bottom: 0;
                margin-bottom: 10px;
              }
              .addressRest {
                @include sc(16px,#000);
                margin-bottom: 5px;
              }
              ul {
                list-style: none;
                display: flex;
                @include sc(14px,grey);
                li {
                  margin-right: 20px;
                  &:nth-child(1)::after{
                    content: " 先生";
                  }
                }
              }
            
            }
            button {
              margin: 0 20px ;
              border: 0;
              background-color: transparent;
              i {
                font-size: 14px;
              }
            }
          }

          

        }

      }
    }
    

  }
</style>