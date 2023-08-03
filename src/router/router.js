import App from '../App.vue';
//实现懒加载，减少消耗
const home = () => import("../page/Home/home.vue")
const address = () => import("../page/Address/address.vue")
const login = () => import("../page/Login/login.vue")
const order = () => import("../page/Order/order.vue")
const orderSearch = () => import("../page/Order/children/order-search.vue")
const mine = () => import("../page/Mine/mine.vue")
 
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
      
    },
    {
      path: "/order",
      component: order,
    
    },
    {
      path: "/order/search",
      component: orderSearch
      
    },
    {
      path: "/mine",
      component: mine
      
    }
    
    

  ]
}]