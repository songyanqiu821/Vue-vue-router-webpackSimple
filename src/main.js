// 整个程序的入口
// ES6的导入模块的语法  ==const Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';

// 导入bootstrap.css文件
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';

// // 导入axios
// import  axios  from 'axios';
// // 设置全局的Url --->自动获取
// axios.defaults.baseURL = 'http://localhost:3000/';
// // 全局配置axios：配置所有Vue的实例都具有$http这个成员
// Vue.prototype.$http = axios;

// 可以使用插件的方法来注册插件
// 导入axios插件  
import MyAxios  from '../plugins/axios';
// 注册axios插件 内部会调用插件的install方法
Vue.use(MyAxios);




new Vue({
  el: '#app',//app是index.html中的作用范围
  render: h => h(App), //渲染组件  替换掉el
  router
});
