<script setup>
import BaseModal from '@ui/BaseModal.vue';
import { useShopStore } from '@store/ShopStore.js';

const shopStore = useShopStore();
</script>

<template>
	<teleport to="#app">
		<transition name="modal">
			<BaseModal
				v-if="shopStore.shopNotificationOpen"
				:background-image="'/svg/shop-notification.svg'"
				:modal-offset="'margin-top: -150px'"
				@close="shopStore.shopNotificationOpen = false">
				<template v-slot:modal-header>
					<span class="modal__header">Спасибо за Ваш заказ!</span>
				</template>
				<template v-slot:modal-content>
					В ближайшее время с Вами
					<br />
					свяжутся наши специалисты
				</template>
			</BaseModal>
		</transition>
	</teleport>
</template>

<style lang="scss" scoped>
.modal__header {
	font-size: 20px;
	font-weight: 700;
}

.modal__background {
	background: none;
}
</style>
