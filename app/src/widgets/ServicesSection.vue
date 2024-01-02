<script setup>
import BaseContainer from '@ui/BaseContainer.vue';
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@store/NavbarStore.js';
import ServicesList from '@entities/ServicesList.vue';

const navbarStore = useNavbarStore();

const section = ref(null);
const isIntersecting = ref(false);

onMounted(() => {
	const observer = new IntersectionObserver(
		([entry]) => {
			isIntersecting.value = !!(entry && entry.isIntersecting);
		},
		{
			threshold: 0.15,
		},
	);
	observer.observe(section.value);
	navbarStore.activeLinks[section.value.id] = isIntersecting;
});
</script>

<template>
	<section id="services" ref="section" class="section">
		<BaseContainer>
			<ServicesList />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
.section {
	scroll-margin-top: 50px;
}
</style>
