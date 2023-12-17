import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes.js';

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				top: 140,
				behavior: 'smooth',
			};
		} else {
			return {
				top: 0,
				behavior: 'smooth',
			};
		}
	},
});
