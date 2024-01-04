import { defineStore } from 'pinia';
import { services } from '@utils/TempServices.js';

export const useServicesStore = defineStore('servicesStore', () => {
	return { services };
});
