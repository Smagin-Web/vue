<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconLogo from '../icons/IconLogo.vue'
</script>

<template>
	<div>
		<a href="/">
			<IconLogo class="logo-icon" />
		</a>
	</div>
</template>

<style scoped>
.logo-icon {
	height: auto;
}

@media screen and (max-width: 1360px) {
	.logo-icon {
		width: 220px;
	}
}

@media screen and (max-width: 1100px) {
	.logo-icon {
		width: 194px;
	}
}
</style>
