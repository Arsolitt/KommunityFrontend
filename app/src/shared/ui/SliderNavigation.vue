<script setup></script>

<template>
	<div class="slider-navigation">
		<img
			alt=""
			class="slider-navigation__button_prev"
			src="@svg/slider-button__prev.svg" />
		<div class="slider-pagination-wrapper">
			<div class="slider-pagination"></div>
		</div>
		<img
			alt=""
			class="slider-navigation__button_next"
			src="@svg/slider-button__next.svg" />
	</div>
</template>

<style lang="scss" scoped>
.slider-navigation {
	display: flex;
	justify-content: space-between;
}
</style>
