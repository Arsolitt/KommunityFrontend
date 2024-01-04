<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps({
	projects: {
		required: true,
	},
});
const projects = props.projects;
</script>

<template>
	<Swiper
		:loop="true"
		slides-per-view="3"
		:speed="600"
		class="slider"
		direction="vertical"
		:grab-cursor="true"
		:spaceBetween="-15">
		<SwiperSlide
			v-for="project in projects"
			:key="project.projectId"
			class="slider__slide">
			<a href="" class="slider__link">
				<img :src="project.img" alt="" class="slider__img" />
				<h5 class="slider__title">
					<a href="">{{ project.title }}</a>
				</h5>
			</a>
		</SwiperSlide>
	</Swiper>
</template>

<style lang="scss" scoped>
.slider {
	height: 100%;

	&__slide {
		width: 100%;
		max-height: 230px;
		height: 100%;
	}

	&__link {
		display: block;
		position: relative;
		height: 100%;
	}

	&__title {
		position: absolute;
		bottom: 0;
		font-size: 20px;
		font-weight: 700;
		margin: 0 0 24px 24px;
	}

	&__img {
		vertical-align: bottom;
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: 18px 18px 0 0;
	}
}
</style>
