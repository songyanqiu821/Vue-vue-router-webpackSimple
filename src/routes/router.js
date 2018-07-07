import Vue from 'vue';
// 导入vue-router
import VueRouter from 'vue-router';
// 注册插件
Vue.use(VueRouter);

// 导入组件

import heroesList from '../views/heroes/list.vue';
import equipsList from '../views/equips/list.vue';
import weaponsList from '../views/weapons/list.vue';

// 创建路由对象，配置路由规则
const router = new VueRouter({
    routes:[
        // 路由规则
        {name : 'heroes', path:'/heroes',component: heroesList},
        {name : 'equips', path:'/equips',component: equipsList},
        {name : 'weapons', path:'/weapons',component: weaponsList},
    ]
});
// 导出模块
export default router;