import { createApp } from 'vue';
import '@/assets/scss/style.scss';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import { router } from '@/router/';

createApp(App).use(createPinia()).use(router).mount('#app');
