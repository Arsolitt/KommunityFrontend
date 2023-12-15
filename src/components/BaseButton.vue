<script setup>
import { ref } from 'vue';

const props = defineProps({
	baseState: String,
	hoverState: String,
	activeState: String,
});
let isHover = ref(false);
// let isActive = ref(false);
let isBasic = ref(true);

let classObject = ref({});
classObject.value[props.baseState] = isBasic;
classObject.value[props.hoverState] = isHover;
// classObject.value[props.activeState] = isActive;
</script>

<template>
	<button
		:class="classObject"
		@focus="
			// isActive = true;
			isHover = true;
			isBasic = false;
		"
		@focusout="
			// isActive = false;
			isBasic = true;
			isHover = false;
		"
		@mouseout="
			isHover = false;
			isBasic = true;
			// isActive = false;
		"
		@mouseover="
			isHover = true;
			isBasic = false;
			// isActive = false;
		"
		@click.prevent>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
button {
	height: 50px;
	width: 100%;
	text-align: center;
	font-size: 18px;
	font-weight: 700;
	position: relative;
	border-radius: 12px;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		margin: -1px;
		border-radius: inherit;
	}
}

.glowing {
	background: $glowing-gradient;
	&::before {
		background: $base-gradient;
	}
}

.gradient {
	background: $base-gradient;
	&::before {
		background: $base-gradient;
	}
}

.solid {
	background-color: $main-solid;
	&::before {
		background: $main-solid;
	}
}
</style>
