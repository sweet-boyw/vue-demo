/*
 * @Author: your name
 * @Date: 2022-03-03 20:58:47
 * @LastEditTime: 2022-03-03 21:01:20
 * @LastEditors: Please set LastEditors
 * @Description: 接口封装
 * @FilePath: \demospace\vue-demo\managesystem\src\api\api.js
 */
import request from '@/utile/request'
const BaseUrl = ''

export function getCode(){
    return request({
        url:`${BaseUrl}/getcode`,
        method:'get'
    })
}