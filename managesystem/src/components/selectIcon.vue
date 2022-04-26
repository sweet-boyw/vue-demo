<!--
 * @Author: your name
 * @Date: 2022-04-24 13:56:50
 * @LastEditTime: 2022-04-25 08:40:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \managesystem\src\components\selectIcon.vue
-->
<template>
    <div class="select-box"></div>
</template>
<script>
import iconList from '@/common/icon.js'
export default {
    data(){
        return {
            iconlist:iconList
        }
    },
    mounted(){
        this.handleLog()
    },
    methods:{
        handleLog(){
            console.log(this.iconlist)
        }
    }
}
</script>