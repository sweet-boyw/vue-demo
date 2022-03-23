<!--
 * @Author: your name
 * @Date: 2022-02-15 08:29:03
 * @LastEditTime: 2022-03-22 09:02:18
 * @LastEditors: Please set LastEditors
 * @Description: 侧边栏
 * @FilePath: \vue-demo\managesystem\src\components\sideBar.vue
-->
<template>
    <div class="side-bar">
        <div class="logo-title">admin</div>
        <div class="side-list">
            <my-side :treeData="treeData"></my-side>
        </div>
    </div>
</template>
<script>
import mySide from '@/components/mySide'
export default {
    name:'sideBar',
    components:{
        mySide
    },
    data(){
        return{
            treeData:[
                {id:1,name:'首页',path:'/index'},
                {id:2,name:'数据中心',path:'/data',children:[
                    {id:3,name:'数据管理',path:'/datacenter'},
                    {id:14,name:'数据查询',path:'/searchdata'}
                ]},
                {id:4,name:'博客',path:'/blog'},
                {id:5,name:'数据收藏',path:'/blog'},
                {id:6,name:'好文章',path:'/blog'},
                {id:7,name:'QQ群',path:'/blog'},
                {id:8,name:'文档管理',path:'/blog'},
                {id:9,name:'文件下载',path:'/blog'},
                {id:10,name:'python',path:'/blog'},
                {id:11,name:'Javascript',path:'/blog'},
                {id:12,name:'前端',path:'/blog'},
                {id:13,name:'后端',path:'/blog'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.side-bar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 160px;
    background-color: #001529;
    z-index: 2;
    color: #fff;
}
.logo-title{
    width: 100%;
    height: 90px;
    line-height: 90px;
    font-size: 30px;
    text-align: center;
    font-weight: 1000;
}
</style>