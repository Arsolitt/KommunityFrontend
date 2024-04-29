import HomePage from '@pages/HomePage.vue';
import ShopPage from '@pages/ShopPage.vue';
import ServicePage from '@pages/ServicePage.vue';
import MemberPage from '@pages/MemberPage.vue';

export const routes = [
	{ name: 'Home', path: '/', component: HomePage },
	{ name: 'Service', path: '/service/:serviceId', component: ServicePage },
	{ name: 'Team', path: '/team/:memberId', component: MemberPage },
	{
		name: 'Shop',
		path: '/shop',
		component: () => import('@pages/ShopPage.vue'),
	},
	{
		name: 'Product',
		path: '/shop/product/:productId',
		component: () => import('@pages/ProductPage.vue'),
	},
	{
		name: 'Cart',
		path: '/shop/cart',
		component: () => import('@pages/CartPage.vue'),
	},
];
