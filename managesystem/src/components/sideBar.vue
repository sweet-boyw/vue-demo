<!--
 * @Author: your name
 * @Date: 2022-02-15 08:29:03
 * @LastEditTime: 2022-02-15 08:58:59
 * @LastEditors: Please set LastEditors
 * @Description: 侧边栏
 * @FilePath: \vue-demo\managesystem\src\components\sideBar.vue
-->
<template>
    <div class="side-bar">sideBar</div>
</template>
<script>
export default {
    name:'sideBar'
}
</script>
<style lang="scss" scoped>
.side-bar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 60px;
    background-color: cadetblue;
    z-index: 2;
}
</style>