/*
 * @Author: your name
 * @Date: 2021-12-07 14:01:33
 * @LastEditTime: 2021-12-07 14:30:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demospace\vue-demo\fuu_demo.js
 */

// var age = 24
// var obj = {
//     age:12,
//     getAge:function(){
//         console.log(this.age)
//         console.log(obj.age)
//     }
// }
// obj.getAge()//12 12

var age = 24
var obj = {
    age:12,
    getAge:() =>{
        console.log(this.age)
        console.log(obj.age)
    }
}
obj.getAge()//undefined 12

// var age = 24
// var obj = {
//     age:12,
//     getAge:() =>{
//         var that = this
//         console.log(that.age)
//         console.log(obj.age)
//     }
// }
// obj.getAge()//undefined 12

// var age = 24
// var obj = {
//     age:12,
//     getAge:function(){
//         var that =  this
//         console.log(that.age)
//         console.log(obj.age)
//     }
// }
// obj.getAge()// 12 12

// var a = 24
// var foo = function(){
//     console.log(this.a)
// }
// foo() //undefined

// var a = 24
// var foo = () =>{
//     console.log(this.a)
// }
// foo() //undefined
