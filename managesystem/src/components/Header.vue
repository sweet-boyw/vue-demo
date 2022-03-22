<!--
 * @Author: your name
 * @Date: 2022-02-15 08:28:38
 * @LastEditTime: 2022-03-21 17:10:36
 * @LastEditors: Please set LastEditors
 * @Description: 顶部导航栏
 * @FilePath: \vue-demo\managesystem\src\components\Header.vue
-->
<template>
    <div class="header">
        <div class="right"></div>
        <div class="userinfo">
            <el-dropdown>
                <span>wangxingjiang</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><router-link to="/center" tag="a">个人中心</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link to="/login" tag="a">退出登录</router-link></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<style scoped lang="scss">
.header{
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 100%;
    padding-left: 120px;
    background-color: #fff; 
    z-index: 2;
    box-shadow: 0px 4px 12px 0px rgba(107, 156, 255, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.right{
    width: 85%
}
.userinfo{
    width: 15%;
    color: #000;
}
a{
    text-decoration: none;
    color: #000;
}
</style>