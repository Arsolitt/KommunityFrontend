<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import SliderNavigation from '@ui/SliderNavigation.vue';
import { renderSliderPagination } from '@utils/renderSliderPagination.js';
import { useTeamStore } from '@store/TeamStore.js';
import CardButton from '@ui/CardButton.vue';
import { onMounted, ref } from 'vue';

const modules = [Navigation, Pagination];
const teamStore = useTeamStore();
const team = teamStore.team;
const currentClass = '';
const totalClass = '';

const memberImg = img => {
	if (
		event.target.parentNode.parentNode.classList.contains('swiper-slide-active')
	) {
		event.target.src = img;
	}
};

onMounted(() => {
	const observer = new MutationObserver(mutations => {
		for (const mutation of mutations) {
			const member = team.find(member => {
				return member.memberId === mutation.target.id.split('_')[1];
			});
			if (!mutation.target.classList.contains('swiper-slide-active')) {
				mutation.target.childNodes[1].childNodes[0].src = member.imgStatic
					? member.imgStatic
					: member.img;
			} else {
				mutation.target.childNodes[1].childNodes[0].src = member.img;
				//
			}
		}
	});
	const slides = ref(Array.from(document.getElementsByClassName('team-slide')));
	slides.value.forEach(slide => {
		observer.observe(slide, {
			attributes: true,
		});
	});
});
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
			:id="'team-slide_' + member.memberId"
			class="slider__slide team-slide">
			<a :href="'team/' + member.memberId">
				<img
					:src="member.img"
					alt=""
					class="slider__img"
					@mouseout="memberImg(member.img)"
					@mouseover="
						memberImg(member.imgHover ? member.imgHover : member.img)
					" />
			</a>
			<div>
				<h5 class="slider__name">
					{{ member.name }}
					<CardButton :href="'team/' + member.memberId" />
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

		.card-button {
			vertical-align: bottom;
			margin-top: 5px;
		}
	}

	&__navigation {
		width: 84%;
		margin-top: 40px;
	}
}
</style>
