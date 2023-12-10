<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import TheContainer from '@/components/TheContainer.vue';

if (
	!(
		'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof DocumentTouch)
	)
) {
	document.body.classList.add('no-touch');
	console.log('ABOBA');
}
</script>

<template>
	<TheContainer>
		<TheNavbar />
	</TheContainer>
</template>

<style lang="scss" scoped></style>
