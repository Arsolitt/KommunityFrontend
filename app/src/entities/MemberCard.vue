<script setup>
const props = defineProps({
	member: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="card">
		<h5 class="card__title">{{ member.name }}</h5>
		<p class="card__description">{{ member.description }}</p>
		<img :src="member.img" alt="" class="card__img" />
	</div>
</template>

<style scoped lang="scss">
.card {
	display: grid;
	margin: 0 auto;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 3fr 3fr;
	grid-template-areas:
		'card__title card__img .'
		'card__description card__img .'
		'card__description card__img .';

	&__title {
		grid-area: card__title;
		font-size: 32px;
		font-weight: 700;
		max-width: 165px;
		align-self: start;
		margin-top: -12px;
	}

	&__description {
		grid-area: card__description;
		font-size: 14px;
		max-width: 165px;
		@media screen and (min-width: 360px) {
			font-size: 15px;
		}
		@media screen and (min-width: 395px) {
			font-size: 16px;
		}
	}

	&__img {
		grid-area: card__img;
		max-width: 175px;
		max-height: 280px;
		width: 100%;
		height: 100%;
		vertical-align: bottom;
		object-fit: cover;
		border-radius: 10px;
		justify-self: end;
	}
}
</style>
