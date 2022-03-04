import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/doc',
    name: 'Doc',
    component: () => import('@/views/Doc.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
