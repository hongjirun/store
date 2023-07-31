import App from '../App.vue';
//实现懒加载，减少消耗
const home = () => import("../page/Home/home.vue")

export default [{
  path: "/",
  components: App,//顶层路由，对应index.html
  children: [
    {
      path: "",
      redirect: "/home"//当地址为空时，重定向到home页面
    },
    {
      path: "/home",
      components: home
    }

  ]
}]