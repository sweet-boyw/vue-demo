/*
 * @Author: your name
 * @Date: 2022-03-22 16:53:34
 * @LastEditTime: 2022-04-24 11:05:40
 * @LastEditors: Please set LastEditors
 * @Description: 封装公共方法
 * @FilePath: \vue-demo\managesystem\src\utile\utile.js
 */
const utile = {
    handleLog(){
        console.log('aaaaaaaaaaaaaaa')
    },
    // 你要获取哪天时间-1表示昨天,默认传入0表示今天时间
    handleGetDate(day = 0){
        const date = new Date()
        date.setTime(date.getTime() + day*24*60*60*1000)
        const YY = date.getFullYear()
        const MM = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const DD = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        const mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        const ss = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
        return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    }
}

import Vue from 'vue'
Vue.prototype.$utile = utile