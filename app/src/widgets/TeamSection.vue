<script setup>
import SectionHeader from '@ui/SectionHeader.vue';
import SectionText from '@ui/SectionText.vue';
import BaseContainer from '@ui/BaseContainer.vue';
import 'swiper/css/bundle';
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@store/NavbarStore.js';
import TeamSlider from '@entities/TeamSlider.vue';

const navbarStore = useNavbarStore();

const section = ref(null);
const isIntersecting = ref(false);
onMounted(() => {
	const observer = new IntersectionObserver(
		([entry]) => {
			isIntersecting.value = !!(entry && entry.isIntersecting);
		},
		{
			threshold: 0.35,
		},
	);
	observer.observe(section.value);
	navbarStore.activeLinks[section.value.id] = isIntersecting;
});
</script>

<template>
	<section id="team" ref="section" class="section">
		<BaseContainer>
			<SectionHeader>Наша команда</SectionHeader>
			<SectionText class="section__text">
				Знакомьтесь! Эти ребята создают
				<br />
				стильные и креативные визуальные
				<br />
				решения:
			</SectionText>
			<TeamSlider />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
.section {
	margin-top: -48px;

	&__text {
		margin-bottom: 32px;
	}
}
</style>
