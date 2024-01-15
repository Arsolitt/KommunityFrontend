<script setup>
import { onMounted, ref } from 'vue';

const element = ref(null);

const props = defineProps({
	fullBright: {
		type: Boolean,
		required: false,
		default: false,
	},
});

onMounted(() => {
	const bgHeader = element.value;
	bgHeaderStroke(bgHeader, 1);

	props.fullBright
		? bgHeaderStroke(bgHeader, 0)
		: window.addEventListener('scroll', () => {
				changeBgHeaderOpacity();
			});

	function changeBgHeaderOpacity() {
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
	}

	function bgHeaderStroke(bgHeader, opacity) {
		return (bgHeader.style.WebkitTextStroke = `2px rgba(43, 25, 64, ${opacity})`);
	}
});
</script>

<template>
	<span ref="element" class="background-text">
		<slot />
	</span>
</template>

<style lang="scss" scoped>
.background-text {
	font-size: 130px;
	font-weight: 700;
	white-space: nowrap;
	color: $main-dark;
	background: linear-gradient(
		to right,
		rgba(255, 102, 208, 1),
		rgba(159, 157, 255, 1),
		rgba(255, 255, 255, 1)
	);
	background-clip: text;
	-webkit-background-clip: text;
	margin-left: -22px;
	position: relative;
	z-index: -2;
}
</style>
