/*
 * @Author: your name
 * @Date: 2022-03-11 16:58:57
 * @LastEditTime: 2022-03-11 17:00:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\vue.config.js
 */
module.exports = {
    　　　　devServer: {
    　　　　　　open: true,
    　　　　　　host: 'localhost',
    　　　　　　port: 8080,
    　　　　　　https: false,
    　　　　　　//以上的ip和端口是我们本机的;下面为需要跨域的
    　　　　　　proxy: {  //配置跨域
    　　　　　　　　'/api': {
    　　　　　　　　　　target: 'http://192.168.100.47:5000',  //这里后台的地址模拟的;应该填写你们真实的后台接口
    　　　　　　　　　　ws: true,
    　　　　　　　　　　changOrigin: true,  //允许跨域
    　　　　　　　　　　pathRewrite: {
    　　　　　　　　　　　　'^/api': ''  //请求的时候使用这个api就可以
    　　　　　　　　　　}
    　　　　　　}
    　　　　}
    　　}
    }