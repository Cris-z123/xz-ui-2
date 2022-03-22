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
    component: () => import('@/views/Doc.vue'),
    children: [
      {
        path: 'switch',
        name: 'Switch',
        component: () => import('@/views/Switch.vue')
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import('@/views/Button.vue')
      },
      {
        path: 'dialog',
        name: 'Dialog',
        component: () => import('@/views/Dialog.vue')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('@/views/Tabs.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
