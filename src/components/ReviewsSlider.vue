<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SliderNavigation from '@/components/SliderNavigation.vue';
import { renderSliderPagination } from '@/use/renderSliderPagination.js';
import { Navigation, Pagination } from 'swiper/modules';
import { useReviewsStore } from '@/store/ReviewsStore.js';

const reviewsStore = useReviewsStore();
const reviews = reviewsStore.reviews;
const modules = [Navigation, Pagination];
</script>

<template>
	<Swiper
		:loop="true"
		:modules="modules"
		:navigation="{
			nextEl: '.slider-navigation__button_next',
			prevEl: '.slider-navigation__button_prev',
		}"
		:pagination="{
			el: '.slider-pagination',
			type: 'fraction',
			renderFraction: renderSliderPagination(currentClass, totalClass),
		}"
		:slides-per-group="1"
		:slides-per-view="2"
		:space-between="32"
		:speed="600"
		class="slider">
		<SwiperSlide
			v-for="review in reviews"
			:key="review.reviewId"
			class="slider__slide">
			<div class="slider__header">
				<img :src="review.avatar" alt="" class="slider__avatar" />
				<div class="slider__reviewer">
					<span class="slider__name">{{ review.name }}</span>
					<span class="slider__company">{{ review.company }}</span>
				</div>
			</div>
			<div class="slider__text">{{ review.text }}</div>
		</SwiperSlide>
		<SliderNavigation class="slider__navigation" />
	</Swiper>
</template>

<style lang="scss" scoped>
.slider {
	overflow: visible;
	width: 185%;
	&__navigation {
		width: 54.5%;
		margin-top: 40px;
	}
	&__header {
		display: flex;
		justify-content: space-between;
	}
	&__reviewer {
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	&__avatar {
		border-radius: 50%;
		width: 60px;
		height: 60px;
		object-fit: cover;
	}
	&__name {
		font-size: 20px;
		font-weight: 600;
		line-height: 26px;
	}
	&__text {
		background-color: #fff;
		color: #000;
		padding: 16px;
		margin-top: 20px;
		border-radius: 10px;
	}
	.swiper-slide-next {
		.slider__avatar {
			opacity: 0;
		}
	}
}
</style>
