<script setup lang="ts">
import SvgItem1 from './SvgItem1.vue'
import SvgCircle from './SvgCircle.vue'
</script>

<template>
	<div class="list-item">
		<div class="number-wrapper">
			<SvgItem1 class="number" />
			<SvgCircle class="number-circle" />
		</div>
		<p class="list-item-text"><slot /></p>
	</div>
</template>

<style scoped>
.list-item {
	max-width: 400px;
}

.number-wrapper {
	position: relative;
	padding: 0 14px;
}

.number-circle {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0px;
}

.number {
	position: relative;
	opacity: 0.9;
	z-index: 10;
}
.list-item-text {
	color: #6d6364;
	font-size: 22px;
}
</style>
