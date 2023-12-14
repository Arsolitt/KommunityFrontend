<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import { getServices } from '@/use/getServices.js';

const services = getServices();
getServices(services);
</script>

<template>
	<BaseContainer>
		<section>
			<div v-for="service in services" :key="service.ServiceId" class="card">
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
	</BaseContainer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
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
