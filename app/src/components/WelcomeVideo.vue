<script setup></script>

<template>
	<div class="video">
		<video
			autoplay
			class="video__content"
			loop
			muted
			src="@/assets/videos/welcome.mp4"></video>
		<div class="video__background"></div>
	</div>
	<h1 class="video__title">
		Дизайн,
		<br />
		продакшн,
		<br />
		реклама
	</h1>
</template>
<!--TODO: Сделать бэкграунд видоса через псевдоэлемент-->
<style lang="scss" scoped>
.video {
	position: relative;
	&__content {
		display: block;
		width: 100%;
		border-radius: 20px;
	}
	&__background {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		background: linear-gradient(
			90deg,
			#7a02b6 0%,
			#bb2284 30.43%,
			#7a02b6 68.23%,
			#6e0c4d 100%
		);
		background-size: 200% 200%;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		transform: translate(-2px, -2px);
		border-radius: 20px;
		filter: blur(10px);
		transition: filter 0.4s ease-in;
		animation: AnimateBorder 2s ease infinite;
		@keyframes AnimateBorder {
			0% {
				background-position: 0 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0 50%;
			}
		}
	}
	&__title {
		font-weight: 700;
		font-size: 36px;
		line-height: 36px;
		margin-top: -26px;
		text-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
		position: relative;
		@media screen and (min-width: 410px) {
			font-size: 48px;
			line-height: 48px;
		}
	}
}
</style>
