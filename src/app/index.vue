<script setup>
import TheNavbar from '@widgets/TheNavbar.vue';
import PlugComponent from '@shared/PlugComponent.vue';
</script>

<template>
	<TheNavbar class="nav" />
	<RouterView />
	<PlugComponent class="plug" />
</template>

<style lang="scss" scoped>
//TODO: убрать вместе с заглушкой
.plug {
	display: none;
}

@media screen and (min-width: 500px) {
	* {
		display: none;
	}
	.plug {
		display: grid;
	}
}
</style>
