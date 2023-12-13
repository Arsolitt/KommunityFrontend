<script setup>
// const props = defineProps({
// 	services: Array,
// });
import { ref } from 'vue';

const services = ref([
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
	{
		name: 'UI/UX-дизайн',
		img: '/temp/service.png',
	},
]);
</script>

<template>
	<section>
		<div v-for="service in services" class="card">
			<h4 class="card__header">{{ service.name }}</h4>
			<div class="card__content">
				<a :href="service.name" class="card__link">
					<img :src="service.img" alt="" class="card__img" />
					<a :href="service.name">
						<img
							alt=""
							class="card__button"
							src="@/assets/svg/card__button.svg" />
					</a>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.card {
	margin-bottom: 40px;
	&__content {
		position: relative;
	}
	&__header {
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		margin-bottom: 14px;
	}
	&__img {
		border-radius: 12px;
		max-height: 205px;
		height: 100%;
		width: 100%;
	}
	&__button {
		position: absolute;
		bottom: 10px;
		right: 10px;
		border-radius: 8px;
		&:hover,
		&:focus {
			background-color: $main-solid;
		}
	}
}
</style>
