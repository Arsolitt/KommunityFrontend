<script setup></script>

<template>
	<div class="slider-navigation">
		<img
			alt=""
			class="slider-navigation__button_prev"
			src="@/assets/svg/slider-button__prev.svg" />
		<div class="slider-pagination__wrapper">
			<div class="slider-pagination"></div>
		</div>
		<img
			alt=""
			class="slider-navigation__button_next"
			src="@/assets/svg/slider-button__next.svg" />
	</div>
</template>

<style lang="scss" scoped>
.slider-navigation {
	display: flex;
	justify-content: space-between;
}
</style>
