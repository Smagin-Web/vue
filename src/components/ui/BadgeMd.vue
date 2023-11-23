<script lang="ts" setup>
const props = defineProps(['type'])

const className = `badge-${props.type}`
</script>

<template>
	<div class="badge-md" v-bind:class="className"><slot /></div>
</template>

<style scoped>
.badge-md {
	border-radius: 10px;
	background: #eea3a3;
	padding: 8px 10px;

	color: #fff;

	font-family: 'UABrand';
	font-size: 16px;
	font-weight: 700;
	white-space: nowrap;
}

.badge-1 {
	background-color: #98cbfa;
}

.badge-2 {
	background-color: #81cca4;
}

.badge-3 {
	background-color: #eea3a3;
}

@media (max-width: 1000px) {
	.badge-md {
		padding: 4px 7px;
		font-size: 10px;
		border-radius: 6px;
	}
}
</style>
