<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import BaseContainer from '@/components/BaseContainer.vue';

if (
	!(
		'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof DocumentTouch)
	)
) {
	document.body.classList.add('no-touch');
}
</script>

<template>
	<TheNavbar />
	<BaseContainer></BaseContainer>
</template>

<style lang="scss" scoped></style>
