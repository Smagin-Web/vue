<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<component
		class="heading"
		:is="tag"
		:style="{
			paddingBottom: pb,
			color: color,
			fontWeight: fontWeightHeading,
			fontSize: fontSizeHeading,
			letterSpacing: letterSpacingHeading,
			textAlign: textAlignHeading,
			textTransform: textTransform,
			maxWidth: maxWidth,
			margin: m
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
			default: 'h1'
		},
		pb: {
			type: String,
			default: '0px'
		},
		m: {
			type: String,
			default: undefined
		},
		color: {
			type: String,
			default: '#000'
		},
		fontWeightHeading: {
			type: String,
			default: '700'
		},
		fontSizeHeading: {
			type: String,
			default: '32px'
		},
		letterSpacingHeading: {
			type: String,
			default: 'normal'
		},
		textAlignHeading: {
			type: String,
			default: 'center'
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
.heading {
	font-family: 'Pelinka', sans-serif;
}
</style>
