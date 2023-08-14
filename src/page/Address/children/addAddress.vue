<!-- 新增收货地址页面 -->
<template>
  <div id="addAddress-container">
    <div :class="{'hidden':$store.state.showareacodePop}">
      <div class="hidden-grey"></div> <!--弹窗出来后给上一层灰层-->
      <header-top addressGoback="addAddress" addAddress="addAddress"></header-top>
      <div class="background" >
        <div class="container">
          <div class="choiceAddress">
            <span>选择收货地址</span>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="menpaihao">
            <span>门牌号</span>
            <input type="text" placeholder="详细地址,例1层101室">
          </div>
          <div class="biaoqian">
            <span>标签</span>
            <ul>
              <li v-for="(item, i) in biaoqian" :key="i" @click="getIndex(i)" :class="{ 'isChecked': index_judge === i }">{{ item }}</li>
            </ul>
          </div>
          <div class="lianxiren">
            <span class="lianxi_title">联系人</span>
            <input class="input_name" type="text" placeholder="请填写收货人的姓名">
            <input type="radio" name="sex" id="male" checked>
            <label for="male">先生</label>
            <input type="radio" name="sex" id="female">
            <label for="female">女士</label>
          </div>
          <div class="telephone">
            <span class="number_title">手机号</span>
            <div class="quhao">
              <span @click="changeShowareacodePop">{{ $store.state.code[$store.state.codeIndex].code }}</span>
              <i class="iconfont icon-xiala"></i>
              <input type="text" placeholder="请填写收货手机号码">
            </div>
          </div>
          <div class="saveButton">
            <button>保存地址</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗选择区号 -->
    <transition name="fade" mode="out-in">
      <areacode-pop v-if="$store.state.showareacodePop" class="pop" ></areacode-pop>
    </transition>
    
  </div>
</template>

<script>
import headerTop from '../../../components/Header/header.vue';
import areacodePop from './areacodePop.vue';
export default {
  data() { 
    return {
      biaoqian: ["家", "公司", "学校", "父母家"],
      index_judge: 0, 
       
    }
  },
  components: {
    headerTop,
    areacodePop
  },
  methods: {
    getIndex(index) { 
      this.index_judge = index;
    },
    changeShowareacodePop() { 
      this.$store.commit("changeshowareacodePop", { showareacodePop: true });
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../style//global.scss";
  @import "../../../style/mixin.scss";
  #addAddress-container{
    .hidden {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
       //选择区号弹窗出来时添加蒙层
      .hidden-grey {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(102, 100, 100);
        opacity: 0.7;
        z-index: 999;
        animation: cancelAnimation 0.5s ease-out;
      }
      @keyframes cancelAnimation {
        0%{opacity: 0;};
        100%{opacity:0.7 ;}
      }   
      
    } 
    .background {
      width: 100%;
      height: calc(100% - 44px);
      position: fixed;
      top: 44px;
      left: 0;
      background-image: url("../../../images/background.jpg");
      background-size: cover;
      background-position: center center;
      z-index: 2;
      
      .container {
        width: 95%;
        height: 100%;
        background: #fff;
        margin: 15px auto;
        padding-top: 20px;
        border-radius: 15px;
        .choiceAddress {
          @include wh(95%,30px);
          border: 1px solid green;
          border-radius: 10px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          @include sc(16px,green);
        
        }
        .menpaihao {
          @include wh(95%,30px);
          margin: 0 0 10px 10px;
          border-bottom: 1px solid $line;

          span {
            @include sc(16px,#000);
            font-weight: bolder;
            margin-right: 10px;
          }
          input {
            border: 0;
            outline: none;
            font-size: 14px;
          }
        }
        .biaoqian {
          @include wh(95%,30px);
          margin: 0 0 10px 10px;
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid $line;
          span {
            @include sc(16px,#000);
            font-weight: bolder;
            margin-right: 25px;
          }
          ul {
            display: flex;
            list-style: none;
            
            li {
              width: 40px;
              font-size: 12px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid $line;
              border-radius: 5px;
              margin-right: 5px;

            }
            .isChecked {
              background-color: rgb(151, 250, 151);
            }
          }
        }
        .lianxiren {
          @include wh(95%,30px);
          margin: 0 0 10px 10px;
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid $line;
          .lianxi_title {
            @include sc(16px,#000);
            font-weight: bolder;
            margin-right: 10px;
          }
          .input_name {
            border: 0;
            outline: none;
            font-size: 14px;
          }
          #male {
            appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid #999;
            border-radius: 15px;
            margin-right: 3px;
            &:checked {
              background-color: rgb(151, 250, 151);
              border: 3px solid #d3dff7;
              
            }
          }
          #female {
            appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid #999;
            border-radius: 15px;
            margin-right: 3px;
            &:checked {
              background-color: rgb(151, 250, 151);
              border: 3px solid #d3dff7;
              
            }
          }
          label {
            margin-right: 5px;
            font-size: 12px;
          }
          
        }
        .telephone {
          @include wh(95%,30px);
          margin: 0 0 15px 10px;
          display: flex;
          align-items: center;
          font-size: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid $line;
          .number_title {
            @include sc(16px,#000);
            font-weight: bolder;
            margin-right: 10px;
          }
          .quhao {
            display: flex;
            align-items: center;
            span {
              font-weight: 500;
            }
            input {
              border: 0;
              outline: none;
              font-size: 14px;
              margin-left: 10px;
            }
          }
        }
        .saveButton {
          @include wh(95%,30px);
          margin: 0 0 10px 10px;
          display: flex;
          align-items: center;
          font-size: 16px;
          button {
            width: 100%;
            height: 35px;
            background-color: rgb(151, 250, 151);
            border: 0;
            border-radius: 15px;
            font-weight: bolder;
          }
        }
      }
    }
    //区号选择弹窗
    .pop {
      position: fixed;
      z-index: 10000;
      //animation: popupAnimation 0.3s ease-out;
    }
    /**
    @keyframes popupAnimation {
      0% { opacity: 0; width: 0; height: 0; }
      100% { opacity: 1; width: 100%; height: 200px; }
    }   
    */
    //进入开始时和结束开始时状态设置透明度为0
    .fade-enter,.fade-leave {
      opacity: 0;
    }
    //进入和离开过程时间设置
    .fade-enter-active,.fade-leave-active {
      transition: opacity 0.8s;
    }
    //离开页面时状态设置透明度为0
    .fade-leave-to {
      opacity: 0;
    }
    
  }
</style>