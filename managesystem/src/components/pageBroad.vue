<!--
 * @Author: your name
 * @Date: 2022-02-15 08:28:50
 * @LastEditTime: 2022-02-15 08:58:16
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-demo\managesystem\src\components\pageBroad.vue
-->
<template>
    <div class="page-broad">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'pageBroad'
}
</script>
<style lang="scss" scoped>
.page-broad{
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    padding: 90px 90px 30px 90px;
}
</style>