<script setup>
import BackgroundHeader from '@ui/BackgroundHeader.vue';
import ShopLayout from '@ui/ShopLayout.vue';
import CatalogSection from '@widgets/CatalogSection.vue';
import CartLink from '@ui/CartLink.vue';
import BaseContainer from '@ui/BaseContainer.vue';
</script>

<template>
	<ShopLayout>
		<BackgroundHeader :fullBright="true">Магазин</BackgroundHeader>
		<BaseContainer>
			<CatalogSection />
		</BaseContainer>
	</ShopLayout>
	<CartLink />
</template>

<style lang="scss" scoped>
.cart-link {
	position: fixed;
	z-index: 100;
	bottom: 18px;
	right: 18px;
}

.section {
	//margin-top: -47px;
	padding-top: 75px;
}

.background-text {
	margin-left: -10px;
}
</style>
