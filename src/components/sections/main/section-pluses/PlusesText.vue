<script setup lang="ts">
const props = defineProps(['text', 'more'])
</script>

<template>
	<h4 class="h-sm-ultra">
		{{ props.text }}
		<span class="more-text" v-if="!!props.more">{{ props.more }}</span>
	</h4>
</template>
