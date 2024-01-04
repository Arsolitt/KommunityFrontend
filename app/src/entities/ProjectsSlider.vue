<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps({
	projects: {
		required: true,
	},
});
const projects = props.projects;
const slidesPerView = projects.length - 1;
</script>

<template>
	<div class="my-wrapper" :style="`height: ${projects.length * 230}px`">
		<Swiper
			:loop="true"
			:slides-per-group="1"
			:slides-per-view="slidesPerView"
			:speed="600"
			class="slider"
			direction="vertical"
			:grab-cursor="true"
			:spaceBetween="-15"
			:threshold="5">
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
	</div>
</template>

<style lang="scss" scoped>
.slider {
	height: 100%;

	&__slide {
		max-height: 230px;
		height: 100%;
		display: flex;
		justify-content: center;
	}

	&__link {
		display: block;
		position: relative;
		height: 100%;
		width: 100%;
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

//.swiper-slide {
//	width: 414px;
//	display: flex;
//	justify-content: center;
//
//	&-prev {
//		max-width: 414px;
//		width: 100%;
//		display: flex;
//		justify-content: center;
//	}
//
//	&-next {
//		display: flex;
//		justify-content: center;
//	}
//}
</style>
