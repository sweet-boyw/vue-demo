/*
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-03-22 16:58:20
 * @LastEditors: Please set LastEditors
 * @Description: 项目入口配置、组件引入
 * @FilePath: \vue-demo\managesystem\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echart from 'echarts'
import '@/api/http.js'
import '@/utile/utile.js'

import '@/style/style.scss'

Vue.prototype.$echarts = echart
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
