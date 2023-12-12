<script setup>
import { onMounted } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import BackgroundText from '@/components/BackgroundText.vue';
import AboutSection from '@/components/AboutSection.vue';

onMounted(() => {
	if (
		!(
			'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof DocumentTouch)
		)
	) {
		document.body.classList.add('no-touch');
	}

	const bgHeaders = document.querySelectorAll('.background-text');
	bgHeaders.forEach(bgHeader => {
		bgHeaderStroke(bgHeader, 1);
	});

	window.addEventListener('scroll', () => {
		changeBgHeaderOpacity();
	});

	function changeBgHeaderOpacity() {
		bgHeaders.forEach(bgHeader => {
			const bgHeaderHeight = bgHeader.offsetHeight;
			const bgHeaderOffset =
				bgHeader.getBoundingClientRect().top + window.scrollY;
			const currentScrollY = window.scrollY + bgHeaderHeight + 200;
			if (
				currentScrollY >= bgHeaderOffset &&
				currentScrollY <= bgHeaderOffset + bgHeaderHeight
			) {
				const opacity = 1 - (currentScrollY - bgHeaderOffset) / bgHeaderHeight;
				bgHeaderStroke(bgHeader, opacity);
			}
		});
	}

	function bgHeaderStroke(bgHeader, opacity) {
		return (bgHeader.style.WebkitTextStroke = `2px rgba(43, 25, 64, ${opacity})`);
	}
});
</script>

<template>
	<TheNavbar />
	<BaseContainer>
		<WelcomeSection />
	</BaseContainer>

	<BackgroundText>Как это</BackgroundText>

	<BaseContainer>
		<AboutSection />
	</BaseContainer>
</template>

<style lang="scss" scoped></style>
