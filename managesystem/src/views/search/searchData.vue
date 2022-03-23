<!--
 * @Author: your name
 * @Date: 2022-03-22 08:43:37
 * @LastEditTime: 2022-03-22 16:58:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\managesystem\src\views\search\searchData.vue
-->
<template>
    <div class="search-data">
        <div class="search-btn">
            <el-form ref="searchBtnForm" :model='searchBtnForm' label-width='80px'>
                <el-form-item label="活动名称">
                    <el-input v-model="searchBtnForm.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="data-list"></div>
    </div>
</template>
<script>
export default {
    name:'SearchData',
    data(){
        return{
            searchBtnForm:{}
        }
    },
    mounted(){
        this.$utile.handleLog()
    }
}
</script>
<style lang="scss" scoped>
.search-btn{
    width: 100%;
    height: 30%;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 0px 12px 0px rgba(185, 185, 185, 0.5);
}
</style>