import { defineStore } from 'pinia';
import { team } from '@utils/TempTeam.js';

export const useTeamStore = defineStore('teamStore', () => {
	const memberById = id => team.find(member => member.memberId === id);

	return { team, useTeamStore, memberById };
});
