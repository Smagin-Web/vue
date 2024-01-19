<script setup lang="ts">
import IconLike from './IconLike.vue'
</script>

<template>
	<div class="widget">
		<IconLike />
		<p class="text-sm">
			Более&nbsp;80% подростков и&nbsp;около&nbsp;40% взрослых сталкиваются
			с&nbsp;проблемой угревой сыпи в&nbsp;той или иной степени.
		</p>
	</div>
</template>

<style scoped>
.widget {
	padding: 20px 40px;
	display: grid;
	grid-template-columns: 40px 1fr;
	align-items: center;
	gap: 38px;
	border-radius: 50px;
	background: #c2e5d2;
}
</style>
