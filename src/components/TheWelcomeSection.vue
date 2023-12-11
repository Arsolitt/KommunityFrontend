<script setup>
import WelcomeVideo from '@/components/WelcomeVideo.vue';
</script>

<template>
	<section>
		<WelcomeVideo />
		<p class="welcome-text">
			Здесь вы можете создать сайт,
			<br />
			заказать фотосет и многое другое ;)
		</p>
	</section>
</template>

<style lang="scss" scoped>
.welcome-text {
	line-height: 24px;
	font-size: 15px;
	@media screen and (min-width: 410px) {
		font-size: 20px;
	}
}
</style>
