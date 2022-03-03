/*
 * @Author: your name
 * @Date: 2022-03-03 17:17:49
 * @LastEditTime: 2022-03-03 17:32:49
 * @LastEditors: Please set LastEditors
 * @Description: 接口封装
 * @FilePath: \demospace\vue-demo\managesystem\src\utile\requet.js
 */
import axios from 'axios'

const service = axios.create({
    timeout:5000
})

service.interceptors.request.use(config =>{
    config.headers[''] = ''
    return config
},
error =>{
    console.error(error)
})

service.interceptors.response.use(res =>{
    if(res.data.code === 200){
        return res.data
    }
},
error =>{
    return Promise.reject(error)
}
)

export default service