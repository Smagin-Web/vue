<script setup lang="ts">
import IconGoogle from '../icons/IconGoogle.vue'
import IconYandex from '../icons/IconYandex.vue'
</script>

<template>
	<div class="social-link-group">
		<a class="social-link">
			<IconGoogle />
			<span class="social-link-text">5</span>
		</a>
		<a class="social-link">
			<IconYandex />
			<span class="social-link-text">4.5</span>
		</a>
	</div>
</template>

<style scoped>
.social-link-group {
	display: flex;
	gap: 22px;
}

.social-link-text {
	color: #6d6364;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 700;
}

.social-link {
	display: flex;
	align-items: center;
	gap: 6px;
}
</style>
