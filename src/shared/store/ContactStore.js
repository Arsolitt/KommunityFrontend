import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useContactStore = defineStore('contactStore', () => {
	const contactModalOpen = ref(false);
	const contactRequestNotificationOpen = ref(false);

	function sendContacts() {
		setTimeout(() => {
			contactModalOpen.value = false;
			contactRequestNotificationOpen.value = true;
		}, 200);
	}

	return { contactModalOpen, contactRequestNotificationOpen, sendContacts };
});
