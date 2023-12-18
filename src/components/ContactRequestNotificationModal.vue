<script setup>
import BaseModal from '@/components/BaseModal.vue';
import { useContactStore } from '@/store/ContactStore.js';

const contactStore = useContactStore();
</script>

<template>
	<teleport to="#app">
		<transition name="modal">
			<BaseModal
				v-if="contactStore.contactRequestNotificationOpen"
				:background-image="'/KommunityFrontend/svg/contact-request-notification.svg'"
				:modal-offset="'margin-top: -150px'"
				@close="contactStore.contactRequestNotificationOpen = false">
				<template v-slot:modal-header>
					<span class="modal__header">Спасибо за Вашу заявку!</span>
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
</style>
