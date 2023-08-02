<template>
  <div id="app">
    <transition name="router-fade" mode="in-out">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <home></home>
  </div>
</template>

<script>
import home from './page/Home/home.vue';
export default {
  name: "App",
  components: {
    home
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-fade-enter-active ,.router-fade-leave-active{
  transition: opacity .3s;
}
.router-fade-enter,.router-fade-leave {
  opacity: 0;
}
</style>
