import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useContactStore = defineStore('contactStore', () => {
	const contactModalOpen = ref(false);
	const contactRequestNotificationOpen = ref(false);

	function sendContacts() {
		contactModalOpen.value = false;
		contactRequestNotificationOpen.value = true;
		// и какая-то другая хуйня по отправке формы
	}
	return { contactModalOpen, contactRequestNotificationOpen, sendContacts };
});
