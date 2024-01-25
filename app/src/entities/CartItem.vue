<script setup>
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

defineEmits(['deleteItem']);
</script>

<template>
	<div class="cart__item">
		<img :src="product.images[0]" alt="" class="item__img" />
		<div class="item__info">
			<span class="item__title">
				{{ product.name }}
			</span>
			<span class="item__price">{{ product.price }} ₽</span>
			<div class="item__count"></div>
		</div>
		<button class="item__delete" @click="$emit('deleteItem', product.id)">
			<img alt="" src="@svg/modal-button_close.svg" />
		</button>
	</div>
</template>

<style scoped lang="scss">
.cart__item {
	display: flex;
}

.item {
	&__info {
		display: flex;
		flex-direction: column;
	}

	&__img {
		max-width: 75px;
		max-height: 75px;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		vertical-align: bottom;
	}

	&__delete {
		align-self: start;
	}
}
</style>
