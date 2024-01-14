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

console.log(props.separator);
</script>

<template>
	<li>
		<a :href="props.url" :class="{ active: active }">{{ props.name }}</a>
		<span v-if="props.separator">></span>
	</li>
</template>

<style scoped lang="scss">
li {
	font-size: 14px;
}

span {
	margin: 0 5px;
}

.active {
	text-decoration: underline;
	text-underline-offset: 2px;
}
</style>
