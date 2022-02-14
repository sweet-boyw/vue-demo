/*
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-02-14 10:41:34
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\managesystem\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
