<script setup>
import { onMounted } from 'vue';
import WelcomeSection from '@widgets/WelcomeSection.vue';
import BackgroundHeader from '@ui/BackgroundHeader.vue';
import AboutSection from '@widgets/AboutSection.vue';
import ServicesSection from '@widgets/ServicesSection.vue';
import TeamSection from '@widgets/TeamSection.vue';
import LocationSection from '@widgets/LocationSection.vue';
import ReviewsSection from '@widgets/ReviewsSection.vue';
import ContactSection from '@widgets/ContactSection.vue';
import FooterSection from '@widgets/FooterSection.vue';
import GlowingLight from '@ui/GlowingLight.vue';

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
	<GlowingLight :number="1" style="margin-top: 65%" />
	<GlowingLight :number="2" style="right: 0; margin-top: 95%" />
	<WelcomeSection style="margin-bottom: 80px" />

	<BackgroundHeader>Как это</BackgroundHeader>
	<AboutSection />

	<ServicesSection />

	<BackgroundHeader>Команда</BackgroundHeader>
	<TeamSection style="margin-bottom: 60px" />

	<GlowingLight :number="3" style="right: 0; margin-top: -70%" />

	<BackgroundHeader>Где мы?</BackgroundHeader>
	<LocationSection style="margin-bottom: 60px" />

	<GlowingLight :number="4" style="right: 0; margin-top: 35%" />
	<GlowingLight :number="5" style="margin-top: 50%" />

	<BackgroundHeader>Отзывы</BackgroundHeader>
	<ReviewsSection style="margin-bottom: 60px" />

	<BackgroundHeader>Напишите</BackgroundHeader>
	<ContactSection style="margin-bottom: 60px" />

	<FooterSection />
</template>

<style lang="scss" scoped>
@media screen and (min-width: 500px) {
	* {
		display: none;
	}
}
</style>
