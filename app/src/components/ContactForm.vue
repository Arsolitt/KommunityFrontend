<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { useServicesStore } from '@/store/ServicesStore.js';
import { useContactStore } from '@/store/ContactStore.js';

const servicesStore = useServicesStore();
const contactStore = useContactStore();
const services = servicesStore.services;
</script>

<template>
	<form action="" class="form">
		<span class="form__label">Выберите тип работы:</span>
		<select class="form__service-field form__field" name="service">
			<option
				v-for="service in services"
				:key="service.serviceId"
				:selected="service.selected"
				class="form__service-option">
				{{ service.name }}
			</option>
		</select>
		<span class="form__label">Уточните, как с вами связаться:</span>
		<input
			class="form__communication-field form__field"
			name="phone"
			placeholder="Телефон или любой удобный мессенджер"
			type="text" />
		<span class="form__label">Расскажите нам подробнее о работе:</span>
		<textarea
			class="form__description-field form__field"
			cols="30"
			name="description"
			rows="10"></textarea>
		<BaseButton
			:base-state="'gradient'"
			class="form__button"
			@click.prevent="contactStore.sendContacts">
			Отправить заявку
		</BaseButton>
	</form>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.form {
	display: flex;
	flex-direction: column;
	&__label {
		font-size: 14px;
	}
	&__field {
		background-color: $main-dark;
		padding: 8px;
		margin-top: 8px;
		border-radius: 8px;
		margin-bottom: 30px;
		outline: none;
		border: 1px solid #ffa5f6;
	}
	&__service-field {
		background-image: url('@/assets/svg/select__arrow.svg');
		background-repeat: no-repeat;
		background-position: 95% 50%;
		font-size: 14px;
		& option {
			color: rgba(255, 255, 255, 0.5);
			font-size: 14px;
		}
	}
	&__communication-field::placeholder {
		color: rgba(255, 255, 255, 0.5);
		font-size: 14px;
	}
	&__description-field {
		height: 100px;
	}
	&__button {
		margin-top: 10px;
	}
}
</style>
