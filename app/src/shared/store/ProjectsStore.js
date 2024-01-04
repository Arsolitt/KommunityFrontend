import { defineStore } from 'pinia';
import { projects } from '@utils/TempProjects.js';

export const useProjectsStore = defineStore('projectsStore', () => {
	return { projects };
});
