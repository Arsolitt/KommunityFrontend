<script setup>
import CartItem from '@entities/CartItem.vue';
import { useShopStore } from '@store/ShopStore.js';
import CartSummary from '@features/CartSummary.vue';

const shopStore = useShopStore();

const numWord = value => {
	const words = ['товар', 'товара', 'товаров'];
	value = Math.abs(value) % 100;
	const num = value % 10;
	if (value > 10 && value < 20) return words[2];
	if (num > 1 && num < 5) return words[1];
	if (num === 1) return words[0];
	return words[2];
};
</script>

<template>
	<SectionHeader>
		{{ shopStore.cart.length }} {{ numWord(shopStore.cart.length) }}
	</SectionHeader>
	<div class="cart__wrapper">
		<div class="cart__list">
			<CartItem
				@deleteItem="shopStore.deleteCartItem"
				@decrementQuantity="shopStore.decrementQuantity"
				@incrementQuantity="shopStore.incrementQuantity"
				:product="product"
				v-for="product in shopStore.cart"
				:key="product.id" />
		</div>
		<CartSummary />
	</div>
</template>

<style scoped lang="scss">
.section__header {
	margin-top: -47px;
}

.cart {
	&__item {
		margin-top: 15px;
	}

	&__summary {
		height: 180px;
		max-width: 362px;
		position: fixed;
		bottom: 0;
		z-index: 10;
	}

	&__wrapper {
		position: relative;
		padding-bottom: 195px;
	}
}
</style>
