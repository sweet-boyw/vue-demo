/*
 * @Author: your name
 * @Date: 2022-03-03 17:33:21
 * @LastEditTime: 2022-03-04 16:37:55
 * @LastEditors: Please set LastEditors
 * @Description: http.js
 * @FilePath: \demospace\vue-demo\managesystem\src\api\http.js
 */
import request from '@/utile/request'
const BaseUrl = ''
import Vue from 'vue'

const http = {
    getCode(){
        return request({
            url:``,
            method:'get'
        })
    }
}

Vue.prototype.$http = http