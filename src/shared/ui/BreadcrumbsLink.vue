<script setup>
const props = defineProps({
	url: {
		required: false,
		type: String,
		default: '#',
	},
	name: {
		required: true,
		type: String,
	},
	separator: {
		required: true,
		type: Boolean,
	},
	active: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<li>
		<a :href="props.url" :class="{ active: active }">{{ props.name }}</a>
		<svg
			v-if="props.separator"
			width="5"
			height="8"
			viewBox="0 0 5 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1 7.5L4 4L1 0.5"
				stroke="white"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
	</li>
</template>

<style scoped lang="scss">
li {
	font-size: 14px;
}

svg {
	margin: 0 5px;
}

.active {
	text-decoration: underline;
	text-underline-offset: 2px;
}
</style>
