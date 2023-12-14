<script setup>
import { onMounted } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import BackgroundHeader from '@/components/BackgroundHeader.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import LocationSection from '@/components/LocationSection.vue';
import ReviewsSection from '@/components/ReviewsSection.vue';
import ContactSection from '@/components/ContactSection.vue';

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
	<WelcomeSection style="margin-bottom: 80px" />

	<BackgroundHeader>Как это</BackgroundHeader>
	<AboutSection />

	<ServicesSection />

	<BackgroundHeader>Команда</BackgroundHeader>
	<TeamSection style="margin-bottom: 60px" />

	<BackgroundHeader>Где мы?</BackgroundHeader>
	<LocationSection style="margin-bottom: 60px" />

	<BackgroundHeader>Отзывы</BackgroundHeader>
	<ReviewsSection />

	<BackgroundHeader>Напишите</BackgroundHeader>
	<ContactSection />
</template>

<style lang="scss" scoped></style>
