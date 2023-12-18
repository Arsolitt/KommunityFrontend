<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import SectionText from '@/components/SectionText.vue';
import SectionSeparator from '@/components/SectionSeparator.vue';
import MainArrow from '@/components/MainArrow.vue';
import ContactForm from '@/components/ContactForm.vue';
import ContactRequestNotificationModal from '@/components/ContactRequestNotificationModal.vue';
import { useContactStore } from '@/store/ContactStore.js';

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
				<a href=""><img alt="" src="@/assets/svg/social-link__vk.svg" /></a>
				<a href=""><img alt="" src="@/assets/svg/social-link__tg.svg" /></a>
				<a href=""><img alt="" src="@/assets/svg/social-link__wa.svg" /></a>
				<a href="">
					<img alt="" src="@/assets/svg/social-link__email.svg" />
				</a>
			</div>
			<ContactRequestNotificationModal
				v-if="contactStore.contactRequestNotificationOpen" />
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
