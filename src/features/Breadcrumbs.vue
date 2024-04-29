<script setup>
import BreadcrumbsLink from '@ui/BreadcrumbsLink.vue';

const props = defineProps({
	links: {
		required: true,
	},
});
</script>

<template>
	<ul>
		<BreadcrumbsLink
			v-for="(link, index) in props.links"
			:key="index"
			:name="link.name"
			:url="link.url"
			:separator="index < props.links.length - 1"
			:active="index < props.links.length - 1" />
	</ul>
</template>

<style scoped lang="scss">
ul {
	display: inline-flex;
}
</style>
