import { createRouter, createWebHistory } from 'vue-router';
import clientRoutes from './client'
import adminRoutes from './admin'

const routes = [
  ...clientRoutes,
  ...adminRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;