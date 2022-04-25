/*
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-04-22 09:50:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\managesystem\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    testtext:'',
    openTab: [],
    activeIndex: ''
  },
  mutations: {
    add(state){
      state.count ++
    },
    sub(state){
      state.count --
    },
    add_tabs (state, data) {
      this.state.openTab.push(data)
    },
    delete_tabs (state, route) {
      let index = 0
      for (let gohh of state.openTab) {
        if (gohh.route === route) {
          break
        }
        index++
      }
      this.state.openTab.splice(index, 1)
    },
    set_active_index (state, index) {
      this.state.activeIndex = index
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    addFun(state){
      return '初始值' + state.count
    }
  }
})
