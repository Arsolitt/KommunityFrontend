<script setup>
import Breadcrumbs from '@features/Breadcrumbs.vue';
import BaseContainer from '@ui/BaseContainer.vue';
import BackgroundHeader from '@ui/BackgroundHeader.vue';
import ShopLayout from '@ui/ShopLayout.vue';
import CartContent from '@widgets/CartContent.vue';
import { useShopStore } from '@store/ShopStore.js';

const shopStore = useShopStore();

const links = [];
links.push({
	name: 'Магазин',
	url: '/shop',
});
links.push({
	name: 'Корзина',
	url: '/shop/cart',
});
</script>

<template>
	<ShopLayout>
		<BaseContainer>
			<Breadcrumbs :links="links" class="Breadcrumbs" />
		</BaseContainer>
		<BackgroundHeader fullBright>Корзина</BackgroundHeader>
		<BaseContainer>
			<CartContent />
		</BaseContainer>
	</ShopLayout>
</template>

<style scoped lang="scss">
.Breadcrumbs {
	margin-top: 60px;
}
</style>
