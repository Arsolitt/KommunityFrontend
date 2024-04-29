<script setup>
import BaseButton from '@ui/BaseButton.vue';
import { useContactStore } from '@store/ContactStore.js';

const contactStore = useContactStore();

const openModal = () => {
	setTimeout(() => {
		contactStore.contactModalOpen = true;
	}, 200);
};
</script>

<template>
	<BaseButton :base-state="'glowing'" class="welcome-button" @click="openModal">
		Сотворить стилёк
	</BaseButton>
</template>

<style scoped lang="scss">
.welcome-button {
	margin-top: 50px;
}
</style>
