<!--
 * @Author: your name
 * @Date: 2022-04-26 13:41:55
 * @LastEditTime: 2022-04-26 14:32:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \managesystem\src\views\blog\messageBoard.vue
-->
<template>
    <div class="message-board">
        <div class="btn-box">
            <div class="textarea-box">
                <el-input type="textarea" placeholder="请输入内容" maxlength="300" show-word-limit v-model="textarea"></el-input>
            </div>
            <div class="submit-btn">
                <el-button type="success" round @click="handleSubmit">发表</el-button>
                <el-button type="info" round @click="hanldeClean">清空</el-button>
            </div>
        </div>
        <div class="message-list">
            <el-table :data="messageList" style="width:100%">
                <el-table-column prop="date" label="时间" width="180"></el-table-column>
                <el-table-column prop="author" label="作者" width="180"></el-table-column>
                <el-table-column prop="message" label="内容"  width="600"></el-table-column>
                <el-table-column prop="handleway" label="操作"  align="center">
                    <template slot-scope="scope">
                        <el-button type="info" round @click="handleClickDetail(scope.$index,scope.row)">详情</el-button>
                        <el-button type="danger" round @click="handleClickDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name:'messageBoard',
    data(){
        return{
            textarea:'',
            messageList:[{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},{date:'2022-04-26',author:'wangxingjiang',message:'dfghjkl;fghjklcvhjklfghjklcvbnmvbnmhjklrtyuiofghjkdfghjkl;cvbnm,.'},]
        }
    },
    mounted(){

    },
    methods:{
        handleSubmit(){
            console.log(this.textarea)
        },
        hanldeClean(){
            this.textarea = ''
        },
        handleClickDetail(index,row){
            console.log(index,row)
        },
        handleClickDelete(index,row){
            console.log(index,row)
        }
    }
}
</script>
<style lang="scss" scoped>
.textarea-box{
    width: 80%;
}
.message-list{
    width: 90%;
    align-items: center;
}
</style>