<template>
	<div class="parallax-card-wrapper">
		<img :src="getImageUrl()" class="parallax-card-photo" />
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
	iconFilename: String
})

function getImageUrl() {
	// This path must be correct for your file
	return new URL(`./${props.iconFilename}`, import.meta.url).toString()
}
</script>

<style>
.parallax-card-wrapper {
	transition: 0.4s;
	max-height: 269px;
	border-radius: 88px;
	background-color: #ede4da;
	padding: 20px;
}

.parallax-card-photo {
	display: block;
	height: 100%;
	width: auto;
	max-width: 100%;
}

@media (max-width: 1680px) {
	.parallax-card-wrapper {
		max-height: 232px;
		margin: 0 auto;
		max-width: 100%;
	}
}
</style>
