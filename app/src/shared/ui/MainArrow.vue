<script setup>
import { onMounted, ref } from 'vue';

const element = ref(null);

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('main-arrow_bounce');
			return;
		}
		entry.target.classList.remove('main-arrow_bounce');
	});
});

onMounted(() => {
	const arrow = element.value;
	observer.observe(arrow);
});
</script>

<template>
	<img ref="element" alt="" class="main-arrow" src="@svg/main-arrow.svg" />
</template>

<style lang="scss" scoped>
.main-arrow {
	margin-top: -25px;
	position: absolute;
	margin-left: 16px;
}

.main-arrow_bounce {
	animation: main-arrow_bounce 1s;
}

@keyframes main-arrow_bounce {
	0% {
		transform: translateY(0%);
	}
	50% {
		transform: translateY(30%);
	}
	100% {
		transform: translateY(0%);
	}
}
</style>
