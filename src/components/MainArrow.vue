<script setup></script>

<template>
	<img
		alt=""
		class="main-arrow main-arrow_bounce"
		src="@/assets/svg/main-arrow.svg" />
</template>

<style lang="scss" scoped>
.main-arrow {
	margin-top: -10px;
	position: absolute;
	margin-left: 16px;
}

.main-arrow_bounce {
	animation: main-arrow_bounce 1s;
}

@keyframes main-arrow_bounce {
	0% {
		transform: translateY(0%);
	}
	50% {
		transform: translateY(30%);
	}
	100% {
		transform: translateY(0%);
	}
}
</style>
