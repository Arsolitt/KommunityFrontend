<script setup>
import BaseContainer from '@ui/BaseContainer.vue';
import SectionContainer from '@ui/SectionContainer.vue';
import SectionHeader from '@ui/SectionHeader.vue';
import SectionText from '@ui/SectionText.vue';
import SectionSeparator from '@ui/SectionSeparator.vue';
import MainArrow from '@ui/MainArrow.vue';
import ContactForm from '@features/ContactForm.vue';
import ContactRequestNotificationModal from '@features/ContactRequestNotificationModal.vue';
import { useContactStore } from '@store/ContactStore.js';

const contactStore = useContactStore();
</script>

<template>
	<section class="section">
		<BaseContainer>
			<SectionContainer>
				<SectionHeader>Напишите нам</SectionHeader>
				<SectionText>
					Если захотели
					<br />
					поработать с нами
				</SectionText>
				<SectionSeparator>
					Мы сразу же
					<br />
					ответим!
					<MainArrow />
				</SectionSeparator>
			</SectionContainer>
			<ContactForm />
			<SectionText style="margin-top: 60px">
				По всем вопросам и предложениям
				<br />
				можете также связаться с нами через
				<br />
				удобный для вас мессенджер
			</SectionText>
			<div class="social-links">
				<a href="https://vk.com/community42_agency" target="_blank">
					<img alt="" src="@svg/social-link__vk.svg" />
				</a>
				<a href="https://t.me/Ilia_Ekimov" target="_blank">
					<img alt="" src="@svg/social-link__tg.svg" />
				</a>
				<a href="https://wa.me/qr/PFF7NWMI5KA4F1" target="_blank">
					<img alt="" src="@svg/social-link__wa.svg" />
				</a>
				<a href="">
					<img alt="" src="@svg/social-link__email.svg" />
				</a>
			</div>
			<ContactRequestNotificationModal />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
.section {
	margin-top: -47px;
}

.social-links {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
	margin-top: 25px;
}
</style>
