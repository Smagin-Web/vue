<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<component
		class="text"
		:is="tag"
		:style="{
			paddingBottom: pb,
			paddingTop: pt,
			color: color,
			fontWeight: fontWeightText,
			fontSize: fontSizeText,
			letterSpacing: letterSpacingText,
			textAlign: textAlignText,
			textTransform: textTransform,
			maxWidth: maxWidth
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
			default: 'p'
		},
		pb: {
			type: String,
			default: undefined
		},
		pt: {
			type: String,
			default: undefined
		},
		color: {
			type: String,
			default: '#6D6364'
		},
		fontWeightText: {
			type: String,
			default: '400'
		},
		fontSizeText: {
			type: String,
			default: '22px'
		},
		letterSpacingText: {
			type: String,
			default: 'normal'
		},
		textAlignText: {
			type: String,
			default: 'left'
		},
		textTransform: {
			type: String,
			default: undefined
		},
		maxWidth: {
			type: String,
			default: undefined
		}
	}
}
</script>

<style scoped>
.text {
	font-family: 'BrisaSans', sans-serif;
}
</style>
