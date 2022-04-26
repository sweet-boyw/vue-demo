<!--
 * @Author: your name
 * @Date: 2022-02-15 08:29:03
 * @LastEditTime: 2022-04-26 15:10:24
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
                {id:2,name:'数据中心',path:'/',children:[
                    {id:3,name:'数据管理',path:'/datamanage'},
                    {id:14,name:'数据查询',path:'/searchdata'}
                ]},
                {id:4,name:'博客',path:'/blog'},
                {id:5,name:'数据收藏',path:'/collection_data'},
                {id:6,name:'好文章',path:'/article'},
                {id:8,name:'文档管理',path:'/document_manage'},
                {id:9,name:'文件下载',path:'/docu_download'},
                {id:10,name:'文件上传',path:'/upload'},
                {id:11,name:'留言板',path:'/message-board'},
                {id:12,name:'日历',path:'/calender'},
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