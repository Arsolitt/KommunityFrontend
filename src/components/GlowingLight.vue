<script setup>
import { onMounted } from 'vue';

const props = defineProps({
	number: Number,
});
const svgPath =
	'/KommunityFrontend/src/assets/svg/light/light-' + props.number + '.svg';
</script>

<template>
	<img :src="svgPath" alt="" />
</template>

<style lang="scss" scoped>
img {
	position: absolute;
	z-index: -1;
}
</style>
