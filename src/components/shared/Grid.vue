<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<component
		class="grid"
		:is="tag"
		:style="{
			paddingBottom: pb,
			gridTemplateColumns: gtc,
			gap: gap
		}"
	>
		<slot></slot>
	</component>
</template>

<script lang="ts">
export default {
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		gap: {
			type: String,
			default: undefined
		},
		gtc: {
			type: String,
			default: undefined
		},
		pb: {
			type: String,
			default: undefined
		}
	}
}
</script>

<style scoped>
.grid {
	display: grid;
}
</style>
