import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.store';
import indexRoutes from './index.routes'

const router = createRouter({
    routes: indexRoutes,
    history: createWebHistory(),
    scrollBehavior: () => ({left: 0, top: 0})
})

router.beforeEach((to) => {
    const authStore = useAuthStore();

    if(to.meta.requiredLogin && !authStore.isAuthentication) return '/'
});


export { router };