<script setup>
import BaseButton from '@ui/BaseButton.vue';
import { useShopStore } from '@store/ShopStore.js';

const shopStore = useShopStore();
</script>

<template>
	<div class="cart__summary">
		<div class="info">
			<div>
				<span class="summ">
					Итоги:
					<br />
				</span>
				<span class="price">
					{{
						shopStore.cart.reduce(
							(acc, item) => acc + item.price * item.quantity,
							0,
						)
					}}
					₽
				</span>
			</div>
			<input
				class="phone"
				name="phone"
				placeholder="Телефон или любой удобный мессенджер"
				type="text" />
		</div>
		<BaseButton
			:base-state="'gradient'"
			@click.prevent="shopStore.sendShopContacts">
			Оформить заказ
		</BaseButton>
		<span class="disclaimer">
			*Цена указана без учёта доставки. Наиболее удобный способ доставки будет
			обсуждаться с покупателем.
		</span>
	</div>
</template>

<style scoped lang="scss">
.cart__summary {
	background-color: $main-dark;
	border-top: 1px solid gray;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.disclaimer {
		margin-top: 10px;
		font-size: 10px;
		color: rgba(255, 255, 255, 0.75);
	}

	button {
		width: 99%;
		margin-top: 20px;
	}

	.price {
		font-weight: 700;
	}

	.info {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		width: 99%;
	}

	.phone {
		background-color: $main-dark;
		padding: 8px;
		border-radius: 8px;
		outline: none;
		border: 1px solid #ffa5f6;
		max-width: 270px;

		&::placeholder {
			color: rgba(255, 255, 255, 0.5);
			font-size: 14px;
		}
	}
}
</style>
