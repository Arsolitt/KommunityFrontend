<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import SliderNavigation from '@/components/SliderNavigation.vue';
import { renderSliderPagination } from '@/use/renderSliderPagination.js';
import { useTeamStore } from '@/store/TeamStore.js';

const modules = [Navigation, Pagination];
const teamStore = useTeamStore();
const team = teamStore.team;
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
		:space-between="26"
		:speed="600"
		class="slider">
		<SwiperSlide
			v-for="member in team"
			:key="member.memberId"
			class="slider__slide">
			<a href="">
				<img :src="member.img" alt="" class="slider__img" />
			</a>

			<div>
				<h5 class="slider__name">
					{{ member.name }}
					<a href=""><img alt="" src="@/assets/svg/card__button.svg" /></a>
				</h5>
				<span class="slider__specialization">
					{{ member.specialization }}
				</span>
			</div>
		</SwiperSlide>
		<SliderNavigation class="slider__navigation" />
	</Swiper>
</template>

<style lang="scss" scoped>
.slider {
	width: 120%;
	overflow: visible;
	&__slide {
		max-width: 214px;
	}
	&__img {
		border-radius: 10px;
		height: 214px;
		width: 100%;
		object-fit: cover;
		margin-bottom: 17px;
	}
	&__name {
		display: flex;
		justify-content: space-between;
		font-weight: 700;
		line-height: 24px;
		font-size: 20px;
	}
	&__navigation {
		width: 84%;
		margin-top: 40px;
	}
}
</style>
