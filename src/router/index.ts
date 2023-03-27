import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/Home.vue')
  },
  {
    path: '/doc',
    name: 'Doc',
    component: () => import('views/Doc.vue'),
    children: [
      {
        path: 'switch',
        name: 'Switch',
        component: () => import('views/demo/switch-demo.vue')
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import('views/demo/button-demo.vue')
      },
      {
        path: 'dialog',
        name: 'Dialog',
        component: () => import('views/demo/dialog-demo.vue')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('views/demo/tabs-demo.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
