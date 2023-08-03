import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router';
import "../src/style/global.scss";
import "./assets/fonts/iconfont/iconfont.css";

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "hash"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
