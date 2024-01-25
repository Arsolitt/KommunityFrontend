<script setup>
import ProductButton from '@ui/ProductButton.vue';

const props = defineProps({
	product: {
		required: true,
		type: Object,
	},
	inCart: {
		type: Boolean,
		default: false,
	},
});

defineEmits(['changeCart']);
</script>

<template>
	<div class="product__card">
		<img :src="props.product.images[0]" alt="" class="product__img" />
		<h6 class="product__title">{{ props.product.name }}</h6>
		<span class="product__price">
			<span>{{ props.product.price }} ₽</span>
			<ProductButton
				:active="inCart"
				@click="
					inCart = !inCart;
					$emit('changeCart', props.product.id);
				" />
		</span>
	</div>
</template>

<style scoped lang="scss">
.product {
	&__card {
		border-radius: 18px;
		border: 1px solid var(--2, #fff1fa);
		background: #141114;
		padding: 12px;
		max-width: 174px;
	}

	&__img {
		max-width: 150px;
		max-height: 150px;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		vertical-align: bottom;
		object-fit: cover;
	}

	&__title {
		margin-top: 20px;
	}

	&__price {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;

		span {
			font-weight: 700;
		}
	}
}
</style>
