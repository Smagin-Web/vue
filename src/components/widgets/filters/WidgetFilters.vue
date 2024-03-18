<script setup>
import Filter from '@/components/shared/Filter.vue'

const props = defineProps(['items'])
</script>

<template>
	<div class="widget-filters">
		<Filter
			v-for="(item, index) in props.items"
			:active="index === 0"
			:key="index"
		>
			{{ item.title }}
		</Filter>
	</div>
</template>

<style scoped>
.widget-filters {
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	padding-bottom: 70px;
}

@media (max-width: 1400px) {
	.widget-filters {
		gap: 20px;
	}
}

@media (max-width: 1000px) {
	.widget-filters {
		gap: 8px;
		flex-wrap: wrap;
		padding-bottom: 32px;
	}
}
</style>
