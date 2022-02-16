<!--
 * @Author: your name
 * @Date: 2022-02-14 17:14:46
 * @LastEditTime: 2022-02-15 15:54:09
 * @LastEditors: Please set LastEditors
 * @Description: 登录后首页
 * @FilePath: \vue-demo\managesystem\src\views\Home\index.vue
-->
<template>
    <div class="index">
        <MHeader />
        <SideBar/>
        <PageBroad />
    </div>
</template>
<script>
import MHeader from '@/components/Header'
import SideBar from '@/components/sideBar'
import PageBroad from '@/components/pageBroad'
export default {
  name:'index',
  components:{
    MHeader,
    SideBar,
    PageBroad
  }
}
</script>