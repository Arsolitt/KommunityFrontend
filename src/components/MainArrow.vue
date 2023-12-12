<script setup>
import { onMounted, ref } from 'vue';

const arrow = ref(null);

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
	// console.log(arrow.value);
	observer.observe(arrow.value);
});
</script>

<template>
	<img
		ref="arrow"
		alt=""
		class="main-arrow"
		src="@/assets/svg/main-arrow.svg" />
</template>

<style lang="scss" scoped>
.main-arrow {
	margin-top: -10px;
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
