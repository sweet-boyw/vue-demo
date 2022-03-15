<!--
 * @Author: your name
 * @Date: 2022-02-14 17:16:43
 * @LastEditTime: 2022-03-11 17:01:43
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面
 * @FilePath: \vue-demo\managesystem\src\views\Login\login.vue
-->
<template>
    <div class="login">
        <div class="login-box">
            <div class="box-left">
                <h2>Login</h2>
                <span>Just log in， you can enjoy more services, interact with me here, and publish your opinions</span>
            </div>
            <div class="box-right">
                <div class="form">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password">
                    <input type="submit" id="submit" value="submit" @click="handleLogin()">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        handleLogin(){
            console.log(this.email,this.password)
            // const data = this.password
            axios.post('/login')
            // console.log(res)
            // const token = 'ahdfksh'
            // window.sessionStorage.setItem('token',token)
            // this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #bdbef8,#bbb7fe);
}
.login-box{
    width: 640px;
    height: 320px;
    display: flex;
}
.box-left{
    background-color: #fff;
    height: 280px;
    position: relative;
    top: 20px;
    width: 50%;
}
.box-left h2{
    font:900 50px '';
    margin: 50px 40px 40px;
}
.box-left span{
    display: block;
    color: #999;
    font-style: 14px;
    margin:40px;
}
.box-right{
    background-color: #474a59;
    box-shadow: 0 0 40px 16px rgba($color: #000000, $alpha: 0.2);
    color: #f1f1f2;
    width: 50%;
}
.form{
    margin: 40px;
    position: absolute;
}
label{
    color: #c2c2c5;
    display: block;
    font-size: 14px;
    height: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
    position: relative;
}
input{
    background: transparent;
    border: 0;
    color: #f2f2f2;
    font-style: 20px;
    height: 30px;
    line-height: 30px;
    width: 100%;
    outline: none !important;
}
label::before{
    content: '';
    display: block;
    position: absolute;
    top: 52px;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(to right, #44ffff, #b888ff);
}
#submit{
    color: #fff;
    margin-top: 40px;
    width: 100px;
    height: 35px;
    background-color: rgba($color: #fff, $alpha: .1);
    border-radius: 20px;
    float: right;
    transition: .3s;
}
#submit:hover{
    letter-spacing: 2px;
    color: #000;
    background-color: #fff;
}
</style>