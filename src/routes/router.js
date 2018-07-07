import Vue from 'vue';
// 导入vue-router
import VueRouter from 'vue-router';
// 注册插件
Vue.use(VueRouter);

// 导入组件
import heroesList from '../views/heroes/list.vue';
import equipsList from '../views/equips/list.vue';
import weaponsList from '../views/weapons/list.vue';
import HeroeAdd from '../views/heroes/add.vue';


// 创建路由对象，配置路由规则
const router = new VueRouter({
    // 全局配置高亮
    linkExactActiveClass:'active',
    routes:[
        // 配置根路径  打开默认是英雄列表页面
        // 这里使用同一个组件的话 不好 所以使用redirect:'/heroes'跳转
        // {name : 'home', path:'/',redirect:'/heroes' },

        // 使用命名路由也是可以的  方便后期修改
        {name : 'home', path:'/',redirect:{name: 'heroes'} },

        // 路由规则
        {name : 'heroes', path:'/heroes',component: heroesList},
        {name : 'equips', path:'/equips',component: equipsList},
        {name : 'weapons', path:'/weapons',component: weaponsList},
        // 添加列表路由
        {name : 'heroadd', path:'/heroes/add',component:HeroeAdd },

    ]
});
// 导出模块
export default router;