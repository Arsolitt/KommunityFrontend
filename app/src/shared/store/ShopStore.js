import { defineStore } from 'pinia';
import { products } from '@utils/TempProducts.js';
import { ref, watch } from 'vue';

export const useShopStore = defineStore('shopStore', () => {
	const cart = ref(
		localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [],
	);

	watch(
		cart.value,
		() => {
			localStorage.setItem('cart', JSON.stringify(cart.value));
		},
		{ deep: true },
	);

	const changeCart = product => {
		const index = cart.value.findIndex((item, index) => {
			return item.id === product.id;
		});
		if (index < 0) {
			product.quantity = 1;
			cart.value.push(product);
			return true;
		} else {
			cart.value.splice(index, 1);
			return false;
		}
	};

	const deleteCartItem = id => {
		const index = cart.value.findIndex((item, index) => {
			return item.id === id;
		});
		if (index >= 0) {
			cart.value.splice(index, 1);
		}
		console.log(cart.value);
	};

	return { useShopStore, products, cart, changeCart, deleteCartItem };
});
