<script setup>
import { computed } from 'vue';

const props = defineProps({
	active: {
		type: Boolean,
		default: false,
	},
});
const cardImg = computed(() => {
	return props.active
		? '/svg/product/product__button-active.svg'
		: '/svg/product/product__button.svg';
});
</script>

<template>
	<button class="product__button">
		<img :src="cardImg" alt="" />
	</button>
</template>

<style scoped lang="scss"></style>
