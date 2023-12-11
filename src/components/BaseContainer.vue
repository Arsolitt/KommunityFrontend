<script setup></script>

<template>
	<div class="container"><slot /></div>
</template>

<style lang="scss" scoped>
.container {
	width: 100%;
	max-width: 410px;
	margin: 0 auto;
	padding: 24px;
	@media screen and (min-width: 768px) {
		max-width: 768px;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1200px;
	}
}
</style>
