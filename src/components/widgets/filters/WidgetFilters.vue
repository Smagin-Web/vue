<script setup>
import Filter from '@/components/shared/Filter.vue'
import { useProceduresStore } from '@/stores/procedures'

const props = defineProps(['items'])

const store = useProceduresStore()
</script>

<template>
	<div class="widget-filters">
		<Filter
			v-for="(item, index) in props.items"
			:active="item.id === store.proceduresApiId"
			:key="index"
			:onClick="() => store.changeProceduresApiId(item.id)"
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
