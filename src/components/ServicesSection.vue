<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import { getServices } from '@/use/getServices.js';
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/store/NavbarStore.js';

const services = getServices();
getServices(services);

const navbarStore = useNavbarStore();

const section = ref(null);
const isIntersecting = ref(false);

onMounted(() => {
	const observer = new IntersectionObserver(
		([entry]) => {
			isIntersecting.value = !!(entry && entry.isIntersecting);
		},
		{
			threshold: 0.2,
		},
	);

	observer.observe(section.value);

	navbarStore.activeLinks[section.value.id] = isIntersecting;
});
</script>

<template>
	<section id="services" ref="section" class="section">
		<BaseContainer>
			<div v-for="service in services" :key="service.serviceId" class="card">
				<h4 class="card__header">{{ service.name }}</h4>
				<div class="card__content">
					<a :href="service.name" class="card__link">
						<img :src="service.img" alt="" class="card__img" />
						<a :href="service.name" class="card__button">
							<img alt="" src="@/assets/svg/card__button.svg" />
						</a>
					</a>
				</div>
			</div>
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.section {
	scroll-margin-top: 50px;
}
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

		img {
			&:hover,
			&:focus {
				background-color: $main-solid;
				border-radius: 8px;
			}
		}
	}
}
</style>
