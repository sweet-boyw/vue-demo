/*
 * @Author: your name
 * @Date: 2022-02-14 17:11:34
 * @LastEditTime: 2022-02-14 17:20:24
 * @LastEditors: Please set LastEditors
 * @Description: 需要权限的路由
 * @FilePath: \vue-demo\managesystem\src\router\promissrouter.js
 */
const Prouter = [
    {
        path:'/index',
        component:() => import('@/view/Home/index'),
        meta:{
            name:''
        }
    }
]

export default Prouter