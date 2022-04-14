<!--
 * @Author: your name
 * @Date: 2022-02-15 08:28:50
 * @LastEditTime: 2022-04-14 22:36:01
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-demo\managesystem\src\components\pageBroad.vue
-->
<template>
    <div class="page-broad">
        <div class="tags-box">
            <tags-box></tags-box>
        </div>
        <div class="router-exit">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import tagsBox from '@/components/tagsBox'
export default {
    name:'pageBroad',
    components:{
        tagsBox
    }
}
</script>
<style lang="scss" scoped>
.page-broad{
    position: fixed;
    top: 0%;
    left: 0%;
    width: 88%;
    height: 100%;
    padding: 170px 190px 30px 190px;
}
</style>