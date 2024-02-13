<script setup lang="ts">
const props = defineProps(['text', 'more'])
</script>

<template>
	<h4 class="h-xs pluses-text">
		{{ props.text }}
		<span class="more-text" v-if="!!props.more">{{ props.more }}</span>
	</h4>
</template>

<style scoped>
@media (min-width: 1000px) {
	.pluses-text {
		font-size: 18px;
	}
}
</style>
