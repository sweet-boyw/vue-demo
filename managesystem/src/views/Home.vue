<!--
 * @Author: your name
 * @Date: 2022-02-14 11:07:06
 * @LastEditTime: 2022-02-17 11:25:55
 * @LastEditors: Please set LastEditors
 * @Description: 未登录页面、数据展示
 * @FilePath: \vue-demo\managesystem\src\views\Home.vue
-->
<template>
    <div class="home">
        <div class="header">
            <div class="left">首页</div>
            <div class="right">
                <router-link to="/login" tag="a">登录</router-link>
            </div>
        </div>
        <div class="page-echarts" ref="echartsboard">
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                    label="年龄"
                    prop="age"
                    :rules="[
                    { required: true, message: '年龄不能为空'},
                    { type: 'number', message: '年龄必须为数字值'}
                    ]"
                >
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
        return{
            numberValidateForm: {
          age: ''
        }
        }
    },
    mounted(){
        
    },
    methods:{
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
    color: #000;
}
.header{
    width: 100%;
    height: 60px;
    background-color: #fff;
    color: #000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 12px 0px rgba(107, 156, 255, 0.3);
    z-index: 2;
}
.page-echarts{
    width: 100%;
    height: 100%;
    background-color: #f3f4f9;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 90px;
    z-index: 1;
}
.left{
    padding-left: 30px;
}
.right{
    padding-right: 30px;
}
</style>