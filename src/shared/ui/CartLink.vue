<script setup>
import { useShopStore } from '@store/ShopStore.js';

const shopStore = useShopStore();
</script>

<template>
	<RouterLink :to="{ name: 'Cart' }" class="cart-link">
		<span v-if="shopStore.cart.length > 0" class="counter">
			{{ shopStore.cart.length }}
		</span>
		<img src="/svg/cart-link.svg" alt="" />
	</RouterLink>
</template>

<style scoped lang="scss">
.counter {
	background-color: $main-solid;
	display: flex;
	justify-content: center;
	align-content: center;
	padding-top: 2px;
	vertical-align: center;
	border-radius: 50%;
	height: 18px;
	width: 18px;
	font-size: 12px;
	position: fixed;
	right: 15px;
	bottom: 52px;
}
</style>
