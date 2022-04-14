<!--
 * @Author: your name
 * @Date: 2022-04-14 22:12:14
 * @LastEditTime: 2022-04-14 23:30:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \managesystem\src\components\tagsBox.vue
-->
<template>
    <div class="tags-box">
        <el-tabs v-model="activeIndex" type="card" closable @tab-remove="handleTabsEdit" @tab-click="handlechangroute()">
            <el-tab-pane
                :key="item.name"
                v-for="(item) in openTab"
                :label="item.name"
                :name="item.route"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tabIndex: 2
      }
    },
    computed: {
        openTab () {
            return this.$store.state.openTab
        },
        activeIndex: {
            get () {
                return this.$store.state.activeIndex
            },
            set (val) {
                this.$store.commit('set_active_index', val)
            }
        }
    },
    watch: {
        '$route' (to) {
            let flag = false
            for (let item of this.openTab) {
                if (item.name === to.name) {
                this.$store.commit('set_active_index', to.path)
                flag = true
                break
                }
            }
            if (!flag) {
                this.$store.commit('add_tabs', {route: to.path, name: to.name})
                this.$store.commit('set_active_index', to.path)
            }
        }
    },
    mounted () {
        // 刷新时以当前路由做为tab加入tabs
        // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
        // 当当前路由是首页时，添加首页到store，并设置激活状态
        if (this.$route.path !== '/' && this.$route.path !== '/index') {
        this.$store.commit('add_tabs', {route: '/index' , name: '首页'})
        this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name })
        this.$store.commit('set_active_index', this.$route.path)
        
        } else {
        this.$store.commit('add_tabs', {route: '/index', name: '首页'})
        this.$store.commit('set_active_index', '/index')
        
        }
    },
    methods: {
      handleTabsEdit(target) {
          if(target == '/'||target == '/index'){
                return
            }
            this.$store.commit('delete_tabs', target)
            if (this.activeIndex === target) {
                // 设置当前激活的路由
                if (this.openTab && this.openTab.length >= 1) {
                console.log('=============', this.openTab[this.openTab.length - 1].route)
                this.$store.commit('set_active_index', this.openTab[this.openTab.length - 1].route)
                this.$router.push({path: this.activeIndex})
                }
            }  
      },
      // 路由跳转
      handlechangroute(tag){
          console.log(tag)
          this.$router.push({path: this.activeIndex})
          console.log(this.$route.path)
      }
    }
}
</script>
<style lang="scss" scoped>
</style>