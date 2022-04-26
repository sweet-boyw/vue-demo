<!--
 * @Author: your name
 * @Date: 2022-03-22 08:43:37
 * @LastEditTime: 2022-04-26 11:08:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\managesystem\src\views\search\searchData.vue
-->
<template>
    <div class="search-data">
        <div class="search-btn">
            <el-form :model="formInline" class="demo-form-inline" label-width="100px">
                <el-form-item label="时间">
                    <el-date-picker
                    v-model="dataTime"
                    type="datetimerange"
                    format="yyyy-MM-dd HH:mm:ss"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="编号">
                    <el-input v-model="formInline.num" placeholder="010001009" class="NumInput"></el-input>
                </el-form-item>
                <el-form-item label="类型选择">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="身份证" value="01"></el-option>
                    <el-option label="警官证" value="02"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
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
            searchBtnForm:{},
            formInline: {
                user: '',
                region: '',
                num:''
            },
            dataTime:''
        }
    },
    mounted(){
        this.$utile.handleLog()
    },
    methods:{
        onSubmit() {
            console.log('submit!',this.dataTime);
        }
    }
}
</script>
<style lang="scss" scoped>
.NumInput{
    width: 300px;
}
</style>