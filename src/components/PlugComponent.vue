<script setup></script>

<template>
	<div class="plug">
		<div class="text">
			<span class="smile">¯\_(ツ)_/¯</span>
			<span class="title"><slot /></span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.plug {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	z-index: 1000;
	background-color: #141114;
}
.text {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.smile {
	font-size: calc(100vw / 5);
	color: #8317b9;
}
.title {
	font-size: calc(100vw / 21);
	color: #8317b9;
}
</style>
