<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import ReviewsSlider from '@/components/ReviewsSlider.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/store/NavbarStore.js';

const navbarStore = useNavbarStore();

const section = ref(null);
const isIntersecting = ref(false);

onMounted(() => {
	const observer = new IntersectionObserver(([entry]) => {
		isIntersecting.value = !!(entry && entry.isIntersecting);
	});
	observer.observe(section.value);

	navbarStore.activeLinks[section.value.id] = isIntersecting;
});
</script>

<template>
	<section id="reviews" ref="section" class="section">
		<BaseContainer>
			<SectionHeader>Отзывы клиентов</SectionHeader>
			<ReviewsSlider />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
.section {
	margin-top: -47px;
}
</style>
