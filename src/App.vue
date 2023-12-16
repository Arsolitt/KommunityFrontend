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
import FooterSection from '@/components/FooterSection.vue';
import PlugComponent from '@/components/PlugComponent.vue';
import GlowingLight from '@/components/GlowingLight.vue';

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
	<TheNavbar class="navbar" />
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
	<PlugComponent class="plug" />
</template>

<style lang="scss" scoped>
.plug {
	display: none;
}
@media screen and (min-width: 500px) {
	* {
		display: none;
	}
	.navbar {
		display: none;
	}
	.plug {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
