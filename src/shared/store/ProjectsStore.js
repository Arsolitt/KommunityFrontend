import { defineStore } from 'pinia';
import { projects } from '@utils/TempProjects.js';

export const useProjectsStore = defineStore('projectsStore', () => {
	const projectsByServiceId = id => projects;
	const projectsByAuthorId = id => projects;

	return { useProjectsStore, projectsByAuthorId, projectsByServiceId };
});
