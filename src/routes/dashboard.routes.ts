import { RouteRecordRaw } from 'vue-router';


const DASHBOARDROUTES: Array<RouteRecordRaw> = [
    {
        path: 'player/:id',
        name: 'player',
        component: () => import('../pages/PlayerPage.vue')
    },
    {
        path: 'players',
        name: 'players',
        component: () => import('../pages/PlayersPage.vue')
    },
    {
        path: 'club/:id',
        name: 'club',
        component: () => import('../pages/ClubPage.vue')
    },
    {
        path: 'clubs',
        name: 'clubs',
        component: () => import('../pages/ClubsPage.vue')
    },
    {
        path: 'nation/:id',
        name: 'nation',
        component: () => import('../pages/NationPage.vue')
    },
    {
        path: 'nations',
        name: 'nations',
        component: () => import('../pages/NationsPage.vue')
    },
    {
        path: '',
        redirect: { name: 'players'}
    }
];

export default DASHBOARDROUTES;