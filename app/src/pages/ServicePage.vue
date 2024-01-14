<script setup>
import ProjectsSlider from '@entities/ProjectsSlider.vue';
import { useProjectsStore } from '@store/ProjectsStore.js';
import BackgroundHeader from '@ui/BackgroundHeader.vue';
import { useRoute } from 'vue-router';
import { useNavbarStore } from '@store/NavbarStore.js';
import { onBeforeUnmount } from 'vue';
import BaseContainer from '@ui/BaseContainer.vue';
import { useServicesStore } from '@store/ServicesStore.js';
import Breadcrumbs from '@features/Breadcrumbs.vue';

const servicesStore = useServicesStore();
const route = useRoute();

const projectsStore = useProjectsStore();
const projects = projectsStore.projectsByServiceId(route.params['serviceId']);

const navbarStore = useNavbarStore();
navbarStore.activeLinks['services'] = true;

const createBreadcrumbsLinks = (name, id) => {
	const links = [];
	switch (name) {
		case 'Service':
			const service = servicesStore.serviceById(id);
			links.push({
				name: 'Работы',
				url: '/#services',
			});
			links.push({
				name: service.name,
				url: service.url,
			});
			break;
		// case 'Team':
		// 	links.push({
		// 		name: 'Команда',
		// 		url: '/#team',
		// 	});
		// 	break;
		// case 'Project':
		// 	links.push({
		// 		name: 'Работы',
		// 		url: '/#team',
		// 	});
		// 	break;
	}
	return links;
};

onBeforeUnmount(() => {
	navbarStore.activeLinks['services'] = false;
});
</script>

<template>
	<section class="section">
		<BaseContainer>
			<Breadcrumbs
				:links="
					createBreadcrumbsLinks(route.name, route.params['serviceId'])
				" />
		</BaseContainer>
		<BackgroundHeader :fullBright="true">
			{{ servicesStore.serviceById(route.params['serviceId']).name }}
		</BackgroundHeader>
		<ProjectsSlider :projects="projects" />
	</section>
</template>

<style scoped lang="scss">
.section {
	max-height: 100dvh;
	overflow: hidden;
}
</style>
