<script setup>
const props = defineProps(['text', 'listArray'])
</script>

<template>
	<div>
		<p class="text-sm">{{ props.text }}</p>
		<ul v-if="!!listArray">
			<li v-for="item in listArray" :key="item" class="text-sm">
				{{ item }}
			</li>
		</ul>
	</div>
</template>
