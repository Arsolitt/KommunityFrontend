<script setup>
import BaseModal from '@/components/BaseModal.vue';
import ContactForm from '@/components/ContactForm.vue';
import { useContactStore } from '@/store/ContactStore.js';

const contactStore = useContactStore();
</script>

<template>
	<BaseModal @close="contactStore.contactModalOpen = false">
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
</template>

<style lang="scss" scoped>
.modal__header {
	font-size: 20px;
}
</style>
