// 整个程序的入口
// ES6的导入模块的语法  ==const Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';

// 导入bootstrap.css文件
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';

new Vue({
  el: '#app',//app是index.html中的作用范围
  render: h => h(App) //渲染组件  替换掉el
});
