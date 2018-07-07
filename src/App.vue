
<template>
<!-- 将默认的#app删除 -->
<!-- 注意：这里有且只有一个根节点 -->
 <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
      <!-- 头部 -->
        <app-header></app-header>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
         <router-link to="/heroes"></router-link>
          <router-link to="/equips"></router-link>
          <router-link to="/weapons"></router-link>
    <!-- 侧边栏 -->
    <app-siderbar></app-siderbar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <!-- 渲染在页面 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
</div>

    

</template>

<script>

// 导入通用的组件
import  AppHeader from './components/AppHeader.vue';
import AppSiderbar from './components/AppSiderbar'
// ES6导出模块的语法  ====module.exporets = {}
// webpack 支持各种模块化的语法：CommonJS AMD 、
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    AppHeader,
    AppSiderbar
  }
}
</script>

<style lang="scss">
// 默认的所有的样式都删除

</style>
