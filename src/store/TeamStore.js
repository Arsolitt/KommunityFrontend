import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTeamStore = defineStore('teamStore', () => {
	const team = [
		{
			memberId: 0,
			name: 'Илья',
			specialization: 'Арт-директор',
			img: '/KommunityFrontend/temp/team_2.png',
		},
		{
			memberId: 1,
			name: 'Егор',
			specialization: 'Дизайнер',
			img: '/KommunityFrontend/temp/team_2.png',
		},
		{
			memberId: 2,
			name: 'Кузьма',
			specialization: 'Видеомейкер',
			img: '/KommunityFrontend/temp/team_2.png',
		},
		{
			memberId: 3,
			name: 'Александр',
			specialization: 'Фотограф',
			img: '/KommunityFrontend/temp/team_2.png',
		},
		{
			memberId: 4,
			name: 'Полина',
			specialization: 'Дизайнер',
			img: '/KommunityFrontend/temp/team_1.png',
		},
	];
	return { team };
});
