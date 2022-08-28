import { RouteRecordRaw } from 'vue-router';

const AUTHROUTES: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'login',
        component: () => import('../pages/AuthPage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/RegisterPage.vue')
    }
]

export default AUTHROUTES;