import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavbarStore = defineStore('navbaraStore', () => {
	const activeLinks = ref({});
	return { activeLinks };
});
