<script setup lang="ts">
import { defineProps } from 'vue'
import type { ICategory } from './SectionPrices.vue'
import { PropType } from 'vue'

const props = defineProps({
	activeIndex: Number,
	itemsConcepts: Array<ICategory>,
	setActiveCategory: Function as PropType<(index: number) => void>
})
</script>

<template>
	<div class="sidebar">
		<div class="link-group">
			<a href="#">
				<h5 class="link-text">Все услуги</h5>
			</a>
			<a href="#">
				<h5 class="link-text">Консультации</h5>
			</a>
		</div>

		<h6 class="link-mini">Услуги по концептам</h6>

		<div class="link-group">
			<h5
				v-for="(item, index) in props.itemsConcepts"
				class="link-text"
				:class="props.activeIndex === index && 'active'"
				:key="index"
				@click="() => setActiveCategory(index)"
			>
				{{ item.title }}
			</h5>
		</div>
	</div>
</template>

<style scoped>
.sidebar {
	position: relative;
	width: 400px;
	border-radius: 30px;
	background: #ede4da;
	padding: 40px;
	z-index: 30;
}

.link-group {
	display: grid;
	max-width: 100%;
	gap: 14px;
}

.link-text {
	border-radius: 10px;
	color: #000;
	font-size: 24px;
	padding: 8px 20px 5px;
	margin: 0 -20px;
	cursor: pointer;
	transition: 0.05s;
}

.link-text.active,
.link-text.active:hover {
	background: #ae8c8e;
	color: #fff;

	font-size: 24px;
}

.link-text:hover {
	background: rgba(174, 140, 142, 0.11);
}

.link-mini {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 34px;
	padding-top: 80px;
}

.sidebar-badge {
	border-radius: 10px;
	background: #ae8c8e;
	color: #fff;
	font-size: 24px;
	padding: 8px 20px 5px;

	margin: 0 -20px;
	margin-bottom: 30px;
}

@media (max-width: 1800px) {
	.sidebar {
		width: 360px;
	}
}
</style>
