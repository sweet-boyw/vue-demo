<!--
 * @Author: your name
 * @Date: 2022-04-20 17:25:11
 * @LastEditTime: 2022-04-21 09:50:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \managesystem\src\views\upload\upload.vue
-->
<template>
    <div class="upload-container">
        <div class="search-box">
            <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rule">
                <el-form-item label="审批人" prop="user">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="upload-file">
            <el-button type="success" plain @click="handleUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <input type="file" @change="upload($event)" ref="upload" style="display:none" accept=".pdf,.docx"> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        formInline: {
          user: '',
          region: ''
            },
        rule:{
            user:[{required:true, message: '请输入审批人姓名', trigger: 'blur'}]
        }
        }
    },
    methods:{
        handleUpload(){
            this.$refs.upload.click()
        },
        upload(e){
            const file = e.target.files[0]
            const uploadData = new FormData()
            uploadData.append('file',file)
            console.log(uploadData)
        },
        handlelog(){
            console.log(this.value)
        },
        onSubmit() {
            const FormData = this.formInline
            const data = {
                user:FormData.user,
                region:FormData.region
            }
        console.log('submit!',data);
      }
    }
}
</script>