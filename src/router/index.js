import { createRouter, createWebHistory } from 'vue-router';
import clientRoutes from './client';
import adminRoutes from './admin';
import { getCurrentUser } from '@/utils/auth';

const routes = [
  ...clientRoutes,
  ...adminRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const user = getCurrentUser();

  if (to.meta.requiresAuth && !user) {
    return next({ name: 'Login' });
  }

  if (to.meta.requiresAdmin && user?.role !== 'admin') {
    alert('Bạn không có quyền truy cập');
    return next({ name: 'Home' });
  }

  next();
});

export default router;
