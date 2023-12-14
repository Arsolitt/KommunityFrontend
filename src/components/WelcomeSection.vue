<script setup>
import WelcomeVideo from '@/components/WelcomeVideo.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseContainer from '@/components/BaseContainer.vue';
</script>

<template>
	<section>
		<BaseContainer>
			<WelcomeVideo />
			<p class="welcome-text">
				Здесь вы можете создать сайт,
				<br />
				заказать фотосет и многое другое ;)
			</p>
			<BaseButton
				:active-state="'gradient'"
				:base-state="'glowing'"
				:hover-state="'gradient'">
				Сотворить стилёк
			</BaseButton>
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
section {
	margin-top: 104px;
}
.welcome-text {
	line-height: 24px;
	font-size: 15px;
	margin-top: 25px;
	@media screen and (min-width: 360px) {
		font-size: 20px;
	}
}
</style>
