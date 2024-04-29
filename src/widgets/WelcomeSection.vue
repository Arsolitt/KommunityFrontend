<script setup>
import WelcomeVideo from '@features/WelcomeVideo.vue';
import BaseContainer from '@ui/BaseContainer.vue';
import ContactModal from '@features/ContactModal.vue';
import WelcomeButton from '@features/WelcomeButton.vue';
</script>

<template>
	<section class="section">
		<BaseContainer>
			<WelcomeVideo />
			<p class="welcome-text">
				Здесь вы можете создать сайт,
				<br />
				заказать фотосет и многое другое ;)
			</p>
			<WelcomeButton />
			<ContactModal />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
.section {
	margin-top: 104px;
}

.welcome-text {
	line-height: 24px;
	font-size: 15px;
	margin-top: 25px;
	@media screen and (min-width: 360px) {
		font-size: 18px;
	}
	@media screen and (min-width: 395px) {
		font-size: 20px;
	}
}
</style>
