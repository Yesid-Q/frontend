import { RouteRecordRaw } from 'vue-router';

import AUTHROUTES from './auth.routes';
import DASHBOARDROUTES from './dashboard.routes';

const INDEXROUTER: Array<RouteRecordRaw> = [
    {
        path: '',
        component: () => import('../layouts/AuthLayout.vue'),
        children: AUTHROUTES
    },
    {
        path: '/dashboard',
        component: () => import('../layouts/DashboardLayout.vue'),
        children: DASHBOARDROUTES,
        meta: { requiredLogin: true }
    }
];

export default INDEXROUTER;