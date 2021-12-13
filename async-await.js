/*
 * @Author: your name
 * @Date: 2021-12-13 10:51:43
 * @LastEditTime: 2021-12-13 14:48:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demospace\vue-demo\async-await.js
 */
//箭头函数
// let fun = x => x*x
// console.log(fun(2))

//函数递归
// let fun = x => {
//     if(x === 1) return 1
//     return x + fun(x - 1)
// }
// console.log(fun(9))
//斐波拉契数列
// let foo = x =>{
//     if(x === 1 || x === 2) return 1
//     return foo(x -1) + foo(x - 2)
// }
// console.log(foo(9))
//函数柯理化：一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
// let add = (a,b) =>{//普通函数
//     return a + b
// }
// console.log(add(1,2))
// //柯理化函数
// let  addcurry = (x) =>{
//     return function(y){
//         return x + y
//     }
// }
// console.log(addcurry(2)(1))


//async-await
// async function test(){
//     return 'test'
// }
// console.log(test)//[AsyncFunction: test]
// console.log(test())//Promise { 'test' }
// test().then(res =>{
//     console.log('test',res)
// })

// async function test(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve('test')
//         }, 1000);
//     })
// }
// function foo(){
//     return '1'
// }
// async function next(){
//     let res1 = await foo()
//     let res2 = await test()
//     let res3 = await foo()
//     console.log(res1)
//     console.log(res2)
//     console.log(res3)
// }

// async function test(){
//     await Promise.reject('error')
// }
// test().then(res =>{
//     console.log('sussess',res)
// },err =>{
//     console.log('err',err)//err error
// })