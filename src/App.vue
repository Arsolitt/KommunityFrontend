<script setup>
import { onMounted } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import BackgroundHeader from '@/components/BackgroundHeader.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';

onMounted(() => {
	if (
		!(
			'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof DocumentTouch)
		)
	) {
		document.body.classList.add('no-touch');
	}
});
</script>

<template>
	<TheNavbar />
	<BaseContainer>
		<WelcomeSection />
	</BaseContainer>

	<BackgroundHeader>Как это</BackgroundHeader>

	<BaseContainer>
		<AboutSection />
		<ServicesSection />
	</BaseContainer>
</template>

<style lang="scss" scoped></style>
