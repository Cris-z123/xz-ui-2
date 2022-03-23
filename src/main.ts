import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import NProgress from 'nprogress';
import { createPinia } from 'pinia';

import '@iconify/iconify';
import '@purge-icons/generated';

import '@/styles/tailwind.css';
import '@/styles/normalize.scss';
import '@/styles/project.scss';

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
