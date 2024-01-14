import { defineStore } from 'pinia';
import { services } from '@utils/TempServices.js';

export const useServicesStore = defineStore('servicesStore', () => {
	const serviceById = id => services.find(service => service.serviceId === id);
	return { services, serviceById };
});
