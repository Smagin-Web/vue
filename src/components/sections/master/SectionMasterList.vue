<script setup>
const props = defineProps(['items'])
</script>

<template>
	<ul class="list">
		<li
			v-for="(item, index) in props.items"
			:key="index"
			class="list-item text-sm"
		>
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
}

@media (max-width: 1000px) {
	.list {
		padding-bottom: 32px;
	}
}
</style>
