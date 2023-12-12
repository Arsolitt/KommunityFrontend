<script setup></script>

<template>
	<span class="background-text">
		<slot />
	</span>
</template>

<style lang="scss" scoped>
.background-text {
	font-size: 130px;
	font-weight: 700;
	white-space: nowrap;
	color: $main-dark;
	background: linear-gradient(
		to right,
		rgba(255, 102, 208, 1),
		rgba(159, 157, 255, 1),
		rgba(255, 255, 255, 1)
	);
	background-clip: text;
	-webkit-background-clip: text;
	margin-left: -20px;
	margin-bottom: 48px;
}
</style>
