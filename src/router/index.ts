// router文件夹下新建index.js文件
import { createRouter, createWebHistory,createWebHashHistory} from 'vue-router'

//注册路由
const routes = [
    {
        path: '/',
        name: 'calc',
        component: () => import('../views/calc.vue')
    },
    {
        path: '/mtcalc',
        name: 'mtcalc',
        component: () => import('../views/Mtcalc.vue')
    },
    {
        path: '/agecalc',
        name: 'agecalc',
        component: () => import('../views/agecalc.vue')
    }
];
const router = createRouter({
// createWebHashHistory()是使用hash模式路由
// createWebHistory()是使用history模式路由
    history: createWebHashHistory(),
    routes
});

export default router;