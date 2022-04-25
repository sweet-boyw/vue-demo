/*
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-04-21 11:17:04
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
    path:'/',
    name:'home',
    component:() => import('@/views/Home'),
    children:[
      {
        path:'/index',
        name:'首页',
        component:() => import('@/views/Home/index.vue')
      },
      {
        path:'/searchdata',
        name:'数据查询',
        component:() => import('@/views/search/searchData.vue')
      },
      {
        path:'/datamanage',
        name:'数据管理',
        component:() => import('@/views/data/dataManage.vue')
      },
      {
        path:'/blog',
        name:'博客',
        component:() => import('@/views/blog/blog.vue')
      },
      {
        path:'/collection_data',
        name:'数据收藏',
        component:() => import('@/views/collection/collectionData.vue')
      },
      {
        path:'/document_manage',
        name:'文档管理',
        component:() => import('@/views/manage/documentManage.vue')
      },
      {
        path:'/article',
        name:'好文章',
        component:() => import('@/views/article/article.vue')
      },
      {
        path:'/docu_download',
        name:'文件下载',
        component:() => import('@/views/download/docuDownload.vue')
      },
      {
        path:'/upload',
        name:'文件上传',
        component:() =>import('@/views/upload/upload.vue')
      }
    ]
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
router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if(!token){
    next('/login')
  }else{
    next()
  }
})

export default router
