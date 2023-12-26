import HomeView from '@/views/HomeView.vue';
import ShopView from '@/views/ShopView.vue';

export const routes = [
	{ name: 'Home', path: '/', component: HomeView },
	{ name: 'Shop', path: '/shop', component: ShopView },
];
