<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
	backgroundImage: {
		type: String,
		required: false,
	},
	modalOffset: {
		type: String,
		required: false,
	},
});

const emits = defineEmits(['close']);
const close = () => {
	emits('close');
};

const root = ref(null);

onMounted(() => {
	root.value ? root.value.focus() : null;
});
</script>

<template>
	<div
		ref="root"
		class="modal-wrapper"
		tabindex="-1"
		@click.self="close"
		@keydown.esc="close">
		<div :style="`${props.modalOffset}`" class="modal">
			<div class="modal__header">
				<slot name="modal-header" />
				<button class="modal-button_close" @click="close">
					<img alt="" src="@/assets/svg/modal-button_close.svg" />
				</button>
			</div>

			<div class="modal__content">
				<slot name="modal-content" />
			</div>

			<div
				v-if="props.backgroundImage"
				:style="`background-image: url(${props.backgroundImage})`"
				class="modal__background"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.modal-wrapper {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	inset: 0;
	background: rgba(40, 37, 40, 0.75);
	z-index: 10;
	.modal {
		max-width: 366px;
		min-height: 230px;
		width: 100%;
		background: $main-dark;
		border-radius: 12px;
		position: relative;
		padding: 20px;
		&__header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;
			align-items: center;
			z-index: 1;
		}
		&__content {
			z-index: 1;
		}
		&__background {
			position: absolute;
			inset: 0;
			background-position: bottom right;
			background-repeat: no-repeat;
			background-size: auto 100%;
			z-index: 0;
		}
		&-button_close {
			border-radius: 5px;
			padding: 5px;
			z-index: 1;
			&:hover,
			&:focus {
				background-color: rgba(128, 128, 128, 0.5);
			}
			img {
				vertical-align: bottom;
			}
		}
	}
}
</style>
