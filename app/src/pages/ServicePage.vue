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

const links = [];
const service = servicesStore.serviceById(route.params['serviceId']);
links.push({
	name: 'Работы',
	url: '/#services',
});
links.push({
	name: service.name,
	url: service.url,
});

onBeforeUnmount(() => {
	navbarStore.activeLinks['services'] = false;
});
</script>

<template>
	<section class="section">
		<BaseContainer>
			<Breadcrumbs :links="links" class="Breadcrumbs" />
		</BaseContainer>
		<BackgroundHeader :fullBright="true" class="BackgroundHeader">
			{{ service.name }}
		</BackgroundHeader>
		<ProjectsSlider :projects="projects" class="ProjectsSlider" />
	</section>
</template>

<style scoped lang="scss">
.section {
	max-height: 100dvh;
	overflow: hidden;
}

.background-text {
	top: -10px;
	margin-left: -8px;
}

.Breadcrumbs {
	margin-top: 60px;
}

.ProjectsSlider {
	margin-top: -60px;
}
</style>
