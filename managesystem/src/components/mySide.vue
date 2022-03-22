<!--
 * @Author: your name
 * @Date: 2022-02-25 09:03:29
 * @LastEditTime: 2022-03-21 17:20:55
 * @LastEditors: Please set LastEditors
 * @Description: 组件递归、实现动态侧边导航栏
 * @FilePath: \demospace\vue-demo\managesystem\src\components\mySide.vue
-->
<template>
    <div class="my-side-bar">
        <div class="tree-item" v-for="item in treeData" :key="item.id">
            <div class="item-title"><router-link :to="item.path" tag="a">{{item.name}}</router-link></div>
            <div class="child-item" v-if="item.children && item.children.length">
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
a{
  text-decoration: none;
  color: #fff;
}
</style>