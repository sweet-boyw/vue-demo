<!--
 * @Author: your name
 * @Date: 2022-02-25 09:03:29
 * @LastEditTime: 2022-03-03 19:58:59
 * @LastEditors: Please set LastEditors
 * @Description: 组件递归、实现动态侧边导航栏
 * @FilePath: \demospace\vue-demo\managesystem\src\components\mySide.vue
-->
<template>
    <div class="my-side-bar">
            <div class="tree-item" v-for="item in treeData" :key="item.id">
                <div class="item-title">{{item.name}}</div>
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
    padding: 4px 8px;
  }
  .child-item {
    padding-left: 20px;
  }
}
</style>