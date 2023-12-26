<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import SectionText from '@/components/SectionText.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import 'swiper/css/bundle';
import SliderTeam from '@/components/TeamSlider.vue';
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/store/NavbarStore.js';

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
			<SliderTeam />
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
