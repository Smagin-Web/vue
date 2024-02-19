<template>
	<div style="transition: 0.2s">
		<img :src="getImageUrl()" class="image" />
	</div>
</template>

<script setup >

const props = defineProps({
	iconFilename: String
})

function getImageUrl() {
	// This path must be correct for your file
	return new URL(`./${props.iconFilename}`, import.meta.url).toString()
}
</script>

<style>
.image {
	display: block;
	height: 100%;
	width: auto;

	outline: solid 20px #ede4da;
	border-radius: 70px;
}

@media (max-width: 1700px) {
	.image {
		outline: solid 16px #ede4da;
	}
}

@media (max-width: 1400px) {
	.image {
		border-radius: 48px;
	}
}

@media (max-width: 1200px) {
	.image {
		border-radius: 40px;
	}
}

@media (max-width: 700px) {
	.image {
		outline: solid 10px #ede4da;
		border-radius: 40px;
	}
}
</style>
