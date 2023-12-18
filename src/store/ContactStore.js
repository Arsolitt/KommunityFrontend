import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useContactStore = defineStore('contactStore', () => {
	const contactModalOpen = ref(false);
	const contactRequestNotificationOpen = ref(true);

	function sendContacts() {
		// задержка для прикола, чтобы кнопка успела стейт поменять
		setTimeout(() => {
			contactModalOpen.value = false;
			contactRequestNotificationOpen.value = true;
			// и какая-то другая хуйня по отправке формы
		}, 200);
	}
	return { contactModalOpen, contactRequestNotificationOpen, sendContacts };
});
