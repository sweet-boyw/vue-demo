<!--
 * @Author: your name
 * @Date: 2022-02-14 10:36:41
 * @LastEditTime: 2022-04-22 09:45:12
 * @LastEditors: Please set LastEditors
 * @Description: App
 * @FilePath: \vue-demo\managesystem\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  watch:{
    "$store.state.testtext"(newVal,oldVal){
      console.log(`新数据${newVal}，旧数据${oldVal}`)
      
    }
  },
  mounted(){
    this.$store.state.testtext = '11111111'
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>