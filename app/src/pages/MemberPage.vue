<script setup>
import BaseContainer from '@ui/BaseContainer.vue';
import BackgroundHeader from '@ui/BackgroundHeader.vue';
import ProjectsSlider from '@features/ProjectsSlider.vue';
import { useRoute } from 'vue-router';
import { useProjectsStore } from '@store/ProjectsStore.js';
import { useNavbarStore } from '@store/NavbarStore.js';
import { onBeforeUnmount } from 'vue';
import { useTeamStore } from '@store/TeamStore.js';
import Breadcrumbs from '@features/Breadcrumbs.vue';
import MemberCard from '@entities/MemberCard.vue';

const projectsStore = useProjectsStore();
const navbarStore = useNavbarStore();
const teamStore = useTeamStore();

const route = useRoute();
const projects = projectsStore.projectsByAuthorId(route.params['memberId']);
const member = teamStore.memberById(route.params['memberId']);

const links = [];
links.push({
	name: 'Команда',
	url: '/#team',
});
links.push({
	name: member.name,
	url: route.path,
});

navbarStore.activeLinks['team'] = true;
onBeforeUnmount(() => {
	navbarStore.activeLinks['team'] = false;
});
</script>

<template>
	<BaseContainer>
		<Breadcrumbs :links="links" class="Breadcrumbs" />
	</BaseContainer>
	<BackgroundHeader :fullBright="true">
		{{ member.specialization }}
	</BackgroundHeader>
	<BaseContainer>
		<MemberCard :member="member" />
	</BaseContainer>
	<ProjectsSlider :projects="projects" />
</template>

<style scoped lang="scss">
.Breadcrumbs {
	margin-top: 60px;
}

.background-text {
	top: -10px;
	//margin-left: 0px;
}

.card {
	margin-top: -55px;
}

.project-slider {
	margin-top: 40px;
}
</style>
