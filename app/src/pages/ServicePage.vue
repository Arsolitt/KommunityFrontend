<script setup>
import ProjectsSlider from '@entities/ProjectsSlider.vue';
import { useProjectsStore } from '@store/ProjectsStore.js';
import BackgroundHeader from '@ui/BackgroundHeader.vue';

const projectsStore = useProjectsStore();
</script>

<template>
	<section class="section">
		<div class="breadcrumbs"></div>
		<BackgroundHeader>Продакшн</BackgroundHeader>
		<ProjectsSlider :projects="projectsStore.projects" />
	</section>
</template>

<style scoped lang="scss">
.section {
	max-height: 100dvh;
}
</style>
