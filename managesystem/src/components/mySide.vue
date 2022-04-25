<!--
 * @Author: your name
 * @Date: 2022-02-25 09:03:29
 * @LastEditTime: 2022-04-15 16:19:09
 * @LastEditors: Please set LastEditors
 * @Description: 组件递归、实现动态侧边导航栏
 * @FilePath: \demospace\vue-demo\managesystem\src\components\mySide.vue
-->
<template>
    <div class="my-side-bar">
        <div class="tree-item" v-for="item in treeData" :key="item.id">
            <div class="item-title">
              <button @click="toPath(item.path)">
                {{item.name}}
                <i :class="isShowChild?'el-icon-arrow-down':'el-icon-arrow-up'" v-if="item.children" @click="handleShowChild()"></i>
              </button>
            </div>
            <div class="child-item" v-if="item.children && item.children.length" v-show="isShowChild">
                <my-side :treeData="item.children"></my-side>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'mySide',
    props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
    data(){
        return{
          isShowChild:true
        }
    },
    methods:{
      toPath(path){
        if(path === '/'){
          this.isShowChild = !this.isShowChild
        }else{
          this.$router.push(path)
        }
      },
      handleShowChild(){
        this.isShowChild = !this.isShowChild
      }
    }
}
</script>
<style lang="scss" scoped>
.my-side-bar {
  .item-title {
    font-size: 20px;
    padding: 15px 30px;
    color: #fff;
  }
  .child-item {
    padding-left: 10px;
  }
}
button{
  border: none;
  background: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
</style>