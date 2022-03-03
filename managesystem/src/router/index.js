/*
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-03-03 19:56:18
 * @LastEditors: Please set LastEditors
 * @Description: 前端路由管理，路由守卫
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
  },
  {
    path:'/mytestside',
    name:'mytestside',
    component:() =>import('@/test/myTestside')
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫，判断是否登录
// router.beforeEach((to,from,next) =>{
//   if(to.path === '/login' || to.path === '/index') return next()
//   const token = window.sessionStorage.getItem('logintoken')
//   if(!token){
//     console.log('没登录')
//     next('/login')
//   }else{
//     console.log('登录了')
//     next()
//   }
// })

export default router
