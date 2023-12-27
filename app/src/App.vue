<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
</script>

<template>
	<TheNavbar class="nav" />
	<RouterView />
</template>

<style lang="scss" scoped>
//TODO: убрать вместе с заглушкой
@media screen and (min-width: 500px) {
	nav {
		display: none;
	}
}
</style>
