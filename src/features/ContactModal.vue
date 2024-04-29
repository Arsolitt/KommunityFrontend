<script setup>
import BaseModal from '@ui/BaseModal.vue';
import ContactForm from '@features/ContactForm.vue';
import { useContactStore } from '@store/ContactStore.js';

const contactStore = useContactStore();
</script>

<template>
	<teleport to="#app">
		<transition name="modal">
			<BaseModal
				v-if="contactStore.contactModalOpen"
				@close="contactStore.contactModalOpen = false">
				<template v-slot:modal-header>
					<span class="modal__header">
						Расскажите
						<br />
						о своей задаче
					</span>
				</template>
				<template v-slot:modal-content>
					<ContactForm />
				</template>
			</BaseModal>
		</transition>
	</teleport>
</template>

<style lang="scss" scoped>
.modal__header {
	font-size: 20px;
}
</style>
