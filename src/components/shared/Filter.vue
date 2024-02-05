<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
defineProps<{
	active: boolean
}>()
</script>
<template>
	<button class="filter" v-bind:class="{ active: active }"><slot /></button>
</template>

<style scoped>
.filter {
	display: flex;
	align-items: center;
	padding-right: 50px;
	padding-left: 50px;

	height: 60px;

	border-radius: 100px;
	border: 2px solid #ae8c8e;
	background-color: transparent;
	color: #ae8c8e;

	font-family: 'BrisaSans';
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	white-space: nowrap;
	transition: 0.2s;
}

.filter.active {
	background-color: #ae8c8e;
	color: #fff;
}

@media (max-width: 1000px) {
	.filter {
		font-size: 14px;
		padding: 6px 20px;
		height: auto;
	}
}
</style>
