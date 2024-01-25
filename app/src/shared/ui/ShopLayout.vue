<script setup>
import { useNavbarStore } from '@store/NavbarStore.js';

const navbarStore = useNavbarStore();

const section = ref(null);
const isIntersecting = ref(false);
import { onMounted, ref } from 'vue';

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
		<slot></slot>
	</section>
</template>

<style scoped lang="scss"></style>
