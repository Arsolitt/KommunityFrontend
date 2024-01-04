import HomePage from '@pages/HomePage.vue';
import ShopPage from '@pages/ShopPage.vue';
import ServicePage from '@pages/ServicePage.vue';

export const routes = [
	{ name: 'Home', path: '/', component: HomePage },
	{ name: 'Shop', path: '/shop', component: ShopPage },
	{ name: 'Service', path: '/service/:serviceName', component: ServicePage },
];
