<!--
 * @Author: your name
 * @Date: 2022-04-14 22:03:21
 * @LastEditTime: 2022-04-21 11:19:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \managesystem\src\views\download\docuDownload.vue
-->
<template>
    <div class="document-download">
        <el-button type="success" plain @click="clickdownload">模板下载</el-button>
    </div>
</template>
<script>
// import downloadapi from '@/api/api.js'
// import download from '@/utile/download.js'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        clickdownload(){
            // downloadapi().then(res =>{
            //     download(res)
            // })
        }
    }
}
</script>