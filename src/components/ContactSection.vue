<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import SectionText from '@/components/SectionText.vue';
import SectionSeparator from '@/components/SectionSeparator.vue';
import MainArrow from '@/components/MainArrow.vue';
import ContactForm from '@/components/ContactForm.vue';
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
					Мы сразу же ответим!
					<MainArrow />
				</SectionSeparator>
			</SectionContainer>
			<ContactForm />
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped></style>
