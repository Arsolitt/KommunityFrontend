<script setup>
import WelcomeVideo from '@/components/WelcomeVideo.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseModal from '@/components/BaseModal.vue';
import ContactForm from '@/components/ContactForm.vue';
import ContactModal from '@/components/ContactModal.vue';
import { useContactStore } from '@/store/ContactStore.js';
import ContactRequestNotificationModal from '@/components/ContactRequestNotificationModal.vue';

const contactStore = useContactStore();
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
				:hover-state="'gradient'"
				class="welcome-button"
				@click="contactStore.contactModalOpen = true">
				Сотворить стилёк
			</BaseButton>
			<ContactModal v-if="contactStore.contactModalOpen" />
			<ContactRequestNotificationModal
				v-if="contactStore.contactRequestNotificationOpen" />
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
