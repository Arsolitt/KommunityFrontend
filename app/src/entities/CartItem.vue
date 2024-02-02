<script setup>
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

defineEmits(['deleteItem', 'incrementQuantity', 'decrementQuantity']);
</script>

<template>
	<div class="cart__item">
		<a :href="`/shop/item/${product.id}`">
			<img :src="product.images[0]" alt="" class="item__img" />
		</a>
		<div class="item__info">
			<a :href="`/shop/item/${product.id}`" class="item__title">
				{{ product.name }}
			</a>
			<span class="item__price">{{ product.price }} ₽</span>
			<div class="item__count">
				<button
					class="decrement"
					@click="$emit('decrementQuantity', product.id)">
					-
				</button>
				<span>{{ product.quantity }}</span>
				<button
					class="increment"
					@click="$emit('incrementQuantity', product.id)">
					+
				</button>
			</div>
		</div>
		<button class="item__delete" @click="$emit('deleteItem', product.id)">
			<img alt="" src="@svg/modal-button_close.svg" />
		</button>
	</div>
</template>

<style scoped lang="scss">
.cart__item {
	display: flex;
	justify-content: space-between;
}

.item {
	&__delete {
		width: 10px;
		height: 10px;
	}

	&__count {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		width: 80px;
		height: 18px;
		border: 1px solid rgba(255, 102, 208, 50%);
		border-radius: 8px;
		font-size: 16px;

		span {
			//margin-left: 13px;
			margin-top: -1.75px;
			border: 1px solid #ff66d0;
			border-radius: 8px;
			width: 32px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			z-index: 2;
			background-color: $main-dark;
		}

		button {
			color: gray;
			font-size: 20px;
			display: flex;
			vertical-align: bottom;
		}

		.decrement {
			line-height: 14px;
		}

		.increment {
			line-height: 17.5px;
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 8px;
	}

	&__price {
		font-weight: 600;
	}

	&__title {
		text-decoration: underline;
		font-size: 15px;
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
		cursor: pointer;
	}
}
</style>
