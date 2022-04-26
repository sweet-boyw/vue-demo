<!--
 * @Author: your name
 * @Date: 2022-04-26 15:06:54
 * @LastEditTime: 2022-04-26 15:11:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \managesystem\src\views\elementDemo\calender.vue
-->
<template>
    <div class="calender-box">
        <el-calendar v-model="value">
        </el-calendar>
    </div>
</template>
<script>
export default {
    name:'calender',
    data(){
        return{
            value:new Date()
        }
    }
}
</script>