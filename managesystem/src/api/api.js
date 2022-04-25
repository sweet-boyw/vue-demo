/*
 * @Author: your name
 * @Date: 2022-03-03 20:58:47
 * @LastEditTime: 2022-04-21 09:59:02
 * @LastEditors: Please set LastEditors
 * @Description: 接口封装
 * @FilePath: \demospace\vue-demo\managesystem\src\api\api.js
 */
import request from '@/utile/request'
const BaseUrl = 'http://192.168.101.28:5000/'

export function getCode(){
    return request({
        url:`${BaseUrl}/getcode`,
        method:'get'
    })
}

export function downloadapi(){
    return request({
        url:``,
        method:'get'
    })
}