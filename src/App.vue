<template>
  <div id="app">
    <!--$route.meta.KeepAlive为true进行组件缓存  -->
    <transition name="router-fade" mode="out-in">
      <keep-alive >
        <router-view v-if="$route.meta.KeepAlive"></router-view>
      </keep-alive>
      <!--$route.meta.KeepAlive为false不进行组件缓存，跳转到这里  -->
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

  </div>
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style lang="scss">
  @import "//at.alicdn.com/t/c/font_4195175_q10sdljsxhq.css";
  #app {
    .router-fade-enter-active ,.router-fade-leave-active{
      transition: opacity .3s;
    }
    .router-fade-enter,.router-fade-leave {
      opacity: 0;
    }
  }
  
</style>
