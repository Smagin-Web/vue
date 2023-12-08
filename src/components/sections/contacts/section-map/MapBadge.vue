<script setup lang="ts">
const props = defineProps(['number', 'color'])

const styleColor = `
background-color: ${props.color || '#ffe116'};
color: ${props.color ? '#fff' : '#000'}
`
</script>

<template>
	<div class="map-badge">
		<div class="map-badge-number" :style="styleColor">{{ number }}</div>
		<p class="text-sm"><slot /></p>
	</div>
</template>

<style scoped>
.map-badge {
	display: flex;
	align-items: center;
	gap: 10px;
}

.map-badge-number {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 31px;
	height: 31px;
	border-radius: 50%;

	color: #000;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 700;
}
</style>
