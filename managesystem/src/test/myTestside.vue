<!--
 * @Author: your name
 * @Date: 2022-03-03 19:42:36
 * @LastEditTime: 2022-03-03 19:57:39
 * @LastEditors: Please set LastEditors
 * @Description: 测试组件递归
 * @FilePath: \demospace\vue-demo\managesystem\src\test\myside.vue
-->
<template>
    <div class="mytest-side">
        <my-side :treeData="treeData"></my-side>
    </div>
</template>
<script>
import mySide from '@/components/mySide'
export default {
    name:'myTestside',
    components:{
        mySide
    },
    data(){
        return{
            treeData:[
                { id: 1, name: '一级1' },
                {
                    id: 2,
                    name: '一级2',
                    children: [
                    { id: 3, name: '二级2-1' },
                    { id: 4, name: '二级2-2' }
                    ]
                },
                {
                    id: 5,
                    name: '一级3',
                    children: [
                    {
                        id: 6,
                        name: '二级3-1',
                        children: [
                        { id: 7, name: '三级3-1-1' },
                        { id: 8, name: '三级3-1-2' }
                        ]
                    },
                    { id: 9, name: '二级3-2' },
                    { id: 10, name: '二级3-3' }
                    ]
                }
            ]
        }
    }
}
</script>