/*
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-02-15 16:34:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\managesystem\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import promission from './promissrouter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/login')
  },
  {
    path:'/index',
    name:'home',
    component:() => import('@/views/Home')
  },
  {
    path:'/',
    name:'index',
    component:() =>import('@/views/Home/index'),
    // children:[promission]
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫，判断是否登录
router.beforeEach((to,from,next) =>{
  if(to.path === '/login' || to.path === '/index') return next()
  const token = window.sessionStorage.getItem('logintoken')
  if(!token){
    console.log('没有登录')
    next('/login')
  }else{
    console.log('登录了')
    next()
  }
})

export default router
