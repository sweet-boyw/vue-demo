/*
 * @Author: your name
 * @Date: 2021-12-07 15:22:19
 * @LastEditTime: 2021-12-07 15:25:17
 * @LastEditors: Please set LastEditors
 * @Description: 函数递归
 * @FilePath: \demospace\vue-demo\fun_demo.js
 */
var fun = x =>{
    if(x === 1){
        return 1
    }else{
        return x * fun(x-1)
    }
}
fun(10) //3628800