import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useServicesStore = defineStore('servicesStore', () => {
	const services = [
		{
			serviceId: 0,
			name: 'UI/UX-дизайн',
			img: '/KommunityFrontend/temp/service_1.png',
			selected: false,
		},
		{
			serviceId: 1,
			name: 'Иллюстрации и превью',
			img: '/KommunityFrontend/temp/service_2.png',
			selected: false,
		},
		{
			serviceId: 2,
			name: 'Графический дизайн',
			img: '/KommunityFrontend/temp/service_3.png',
			selected: true,
		},
		{
			serviceId: 3,
			name: '3D и анимация',
			img: '/KommunityFrontend/temp/service_4.png',
			selected: false,
		},
		{
			serviceId: 4,
			name: 'Видео-продакшн',
			img: '/KommunityFrontend/temp/service_5.png',
			selected: false,
		},
		{
			serviceId: 5,
			name: 'Фотосессии и ретушь',
			img: '/KommunityFrontend/temp/service_6.png',
			selected: false,
		},
		{
			serviceId: 6,
			name: 'Выпускные альбомы',
			img: '/KommunityFrontend/temp/service_7.png',
			selected: false,
		},
	];
	return { services };
});
