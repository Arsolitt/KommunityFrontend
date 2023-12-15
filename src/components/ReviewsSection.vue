<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import ReviewsSlider from '@/components/ReviewsSlider.vue';
import BaseContainer from '@/components/BaseContainer.vue';
</script>

<template>
	<section id="reviews" class="section">
		<BaseContainer>
			<SectionHeader>Отзывы клиентов</SectionHeader>
			<ReviewsSlider />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped></style>
