import App from '../App.vue';
//实现懒加载，减少消耗
const home = () => import("../page/Home/home.vue")
const address = () => import("../page/Address/address.vue")
const login = () => import("../page/Login/login.vue")
export default [{
  path: "/",
  component: App,//顶层路由，对应index.html
  children: [
    {
      path: "",
      redirect: "/home"//当地址为空时，重定向到home页面
      
    },
    {
      path: "/home",
      component: home

    },
    {
      path: "/address",
      component: address
      
    },
    {
      path: "/login",
      component: login
      
    }

  ]
}]