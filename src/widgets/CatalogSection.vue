<script setup>
import { useShopStore } from '@store/ShopStore.js';
import SectionHeader from '@ui/SectionHeader.vue';
import ProductCard from '@entities/ProductCard.vue';

const shopStore = useShopStore();
</script>

<template>
	<section class="catalog__section">
		<SectionHeader>Готовый креативчик</SectionHeader>
		<div class="catalog">
			<ProductCard
				@changeCart="shopStore.changeCart(product)"
				:product="product"
				:inCart="
					shopStore.cart.filter(item => item.id === product.id).length > 0
				"
				v-for="product in shopStore.products"
				:key="product.id" />
		</div>
	</section>
</template>

<style scoped lang="scss">
.catalog__section {
	margin-top: -47px;
}

.catalog {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: center;
	gap: 15px;
}
</style>
