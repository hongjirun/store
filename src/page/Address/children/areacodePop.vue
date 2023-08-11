<!-- 新增收货地址点击选择区号时弹窗 -->
<template>
  <div id="areacodePop-container">
    <div class="header">
      <div class="cancel" @click="cancelSelect">取消</div>
      <div class="title">区号选择</div>
      <div class="confirm" @click="confirmSelect">确定</div>
    </div>
    <div class="content-list" @wheel="handleScroll">
      <ul>
        <li></li>
        <li v-for="(item,i) in $store.state.code" :key="i" :class="{'isSelect':i===positionNumber}" @click="isClickSelect(i)">{{ item.name }}{{ item.code }}</li>
             
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      
      positionNumber: 0,//用于鼠标滚动后赋值来判定选中
    }
  },
  methods: {
    //通过每一次滚动都为+-128来进行计算显示选择的内容
    handleScroll(event) { 
      if (event.deltaY > 0 && parseInt(event.deltaY) % 128 === 0) {
        this.positionNumber = this.positionNumber + 1;
        if (this.positionNumber >= this.$store.state.code.length) {
          this.positionNumber = 3;

        }
      }
      else if (event.deltaY < 0 && parseInt(event.deltaY) % 128 === 0) { 
        this.positionNumber = this.positionNumber - 1;
        if (this.positionNumber < 0) {
          this.positionNumber = 0;

        }
      }
    },
    //通过点击来选中
    isClickSelect(index) { 
      this.positionNumber = index;
    },
    //点击取消调用方法改变state变量隐藏弹窗
    cancelSelect() { 
      this.$store.commit("changeshowareacodePop", { showareacodePop: false });
    },
    //点击确定把区号重新修改
    confirmSelect() { 
      this.$store.commit("changeCodeIndex", { codeIndex: this.positionNumber });
      this.$store.commit("changeshowareacodePop", { showareacodePop: false });

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style//mixin.scss";
  @import "../../../style//global.scss";
  #areacodePop-container {
    width: 100%;
    height: 200px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 10px;
    .header {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      @include sc(14px,#000);
      border-bottom: 1px solid $line;
      .cancel {
        margin-left: 5px;
      }
      .title {
        margin: 0 auto;
        font-size: 16px;
      }
      .confirm {
        margin-right: 5px;
      }
    }
    .content-list {
      width: 100%;
      height: 160px;
      font-size: 12px;
      overflow-y: auto;
      
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        
        li {
          margin: 20px 0;
        }
        .isSelect {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: bolder;
          padding: 10px 0;
          border: 1px solid $line;
          margin: 10px 0;
          color: green;
        }
      }
    }
  }
</style>