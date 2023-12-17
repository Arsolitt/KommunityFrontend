import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavbarStore = defineStore('', () => {
	const activeLinks = ref({});
	return { activeLinks };
});
