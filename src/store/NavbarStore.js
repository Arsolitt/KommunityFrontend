import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavbarStore = defineStore('navbarStore', () => {
	const activeLinks = ref({});
	return { activeLinks };
});
