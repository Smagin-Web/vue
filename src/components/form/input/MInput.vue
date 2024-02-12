<script setup lang="ts">
const props = defineProps(['placeholder'])
</script>

<template>
	<input class="minput" :placeholder="props.placeholder" />
</template>

<style scoped>
.minput {
	height: 80px;
	padding-left: 40px;
	padding-right: 40px;

	border-radius: 100px;
	border: none;
	background-color: #fff;
}

.minput,
.minput::placeholder {
	color: #6d6364;
	font-family: 'Pelinka', sans-serif;
	font-size: 24px;
	font-weight: 700;
	line-height: 28px;
}
</style>
