<script setup>
import WelcomeVideo from '@/components/WelcomeVideo.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import ContactModal from '@/components/ContactModal.vue';
import { useContactStore } from '@/store/ContactStore.js';

const contactStore = useContactStore();

const openModal = () => {
	setTimeout(() => {
		contactStore.contactModalOpen = true;
	}, 200);
};
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
			<BaseButton
				:base-state="'glowing'"
				class="welcome-button"
				@click="openModal">
				Сотворить стилёк
			</BaseButton>
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
		font-size: 20px;
	}
}
.welcome-button {
	margin-top: 50px;
}
</style>
