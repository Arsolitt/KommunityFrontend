<script setup>
import { ref } from 'vue';

const props = defineProps({
	baseState: String,
});
let isActive = ref(false);
let isBasic = ref(true);

let classObject = ref({});
classObject.value[props.baseState] = isBasic;
classObject.value['solid'] = isActive;
</script>

<template>
	<button
		:class="classObject"
		@focus="
			isActive = true;
			isBasic = false;
		"
		@focusout="
			isBasic = true;
			isActive = false;
		"
		@mouseout="
			isActive = false;
			isBasic = true;
		"
		@mouseover="
			isActive = true;
			isBasic = false;
		"
		@click.prevent>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
button {
	height: 48px;
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
		background: $border-gradient;
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
