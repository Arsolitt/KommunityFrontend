<script setup>
import { useNavbarStore } from '@/store/NavbarStore.js';
import { onMounted, ref } from 'vue';
import BaseContainer from '@/components/BaseContainer.vue';
import PlugComponent from '@/components/PlugComponent.vue';

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
	<section id="shop" ref="section" class="section">
		<BaseContainer></BaseContainer>
	</section>
	<PlugComponent />
</template>

<style lang="scss" scoped></style>
