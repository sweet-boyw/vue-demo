/*
 * @Author: your name
 * @Date: 2022-03-03 17:33:21
 * @LastEditTime: 2022-03-08 11:07:11
 * @LastEditors: Please set LastEditors
 * @Description: http.js
 * @FilePath: \demospace\vue-demo\managesystem\src\api\http.js
 */
import request from '@/utile/request'
const BaseUrl = 'http://192.168.100.47:5000'
import Vue from 'vue'

const http = {
    getCode(){
        request({
            url:`${BaseUrl}/index`,
            method:'get'
        }).then(res =>{
            console.log('getCode',res)
        })
    }
}

Vue.prototype.$http = http