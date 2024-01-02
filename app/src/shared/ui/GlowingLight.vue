<script setup>
import { onMounted } from 'vue';

const props = defineProps({
	number: Number,
});
</script>

<template>
	<img :src="`/svg/light/light-${props.number}.svg`" alt="" />
</template>

<style lang="scss" scoped>
img {
	position: absolute;
	z-index: -1;
}
</style>
