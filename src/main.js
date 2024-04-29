import { createApp } from 'vue';
import '@app/index.scss';
import App from '@app/index.vue';
import { createPinia } from 'pinia';
import { router } from '@router';

createApp(App).use(createPinia()).use(router).mount('#app');
