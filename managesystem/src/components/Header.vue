<!--
 * @Author: your name
 * @Date: 2022-02-15 08:28:38
 * @LastEditTime: 2022-04-19 14:34:08
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
                    <el-dropdown-item>
                        <button @click="handlelogout">注销登录</button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <button>退出登录</button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handlelogout(){
            this.$store.state.openTab = []
            this.$store.state.activeIndex = ''
            window.sessionStorage.removeItem('Token')
            this.$router.push('/login')
        }
    }
}
</script>
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
button{
    border: none;
    background: none;
}
</style>