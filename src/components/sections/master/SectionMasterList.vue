<script setup lang="ts">
defineProps<{
	items: string[]
}>()
</script>

<template>
	<ul class="list">
		<li v-for="(item, index) in items" :key="index" class="list-item">
			{{ item }}
		</li>
	</ul>
</template>

<style>
.list {
	padding-bottom: 66px;
}

.list-item {
	padding-bottom: 10px;
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;
}

@media (max-width: 1000px) {
	.list {
		padding-bottom: 32px;
	}
	.list-item {
		font-size: 18px;
	}
}
</style>
