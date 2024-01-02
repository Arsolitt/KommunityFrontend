<script setup>
import CardButton from '@ui/CardButton.vue';
import { useServicesStore } from '@store/ServicesStore.js';

const servicesStore = useServicesStore();
const services = servicesStore.services;
</script>

<template>
	<div v-for="service in services" :key="service.serviceId" class="card">
		<h4 class="card__header">{{ service.name }}</h4>
		<div class="card__content">
			<a :href="service.name" class="card__link">
				<img :src="service.img" alt="" class="card__img" />
				<CardButton :href="service.name" class="card__button" />
			</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	margin-bottom: 40px;

	&__content {
		position: relative;
	}

	&__header {
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
		margin-bottom: 14px;
	}

	&__img {
		border-radius: 12px;
		max-height: 205px;
		height: 100%;
		width: 100%;
		vertical-align: bottom;
	}

	&__button {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
}
</style>
