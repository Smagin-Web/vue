<script setup lang="ts">
const props = defineProps(['iconSrc', 'iconBigSrc'])

const getImageUrl = () => {
	return new URL(
		`${props.iconSrc || props.iconBigSrc}`,
		import.meta.url
	).toString()
}
</script>

<template>
	<div class="card-image-wrapper">
		<img src="./slider.png" alt="" class="card-image" />
		<img v-if="props.iconSrc" :src="getImageUrl()" class="svg-picture" />
		<img
			v-if="props.iconBigSrc"
			:src="getImageUrl()"
			class="svg-picture-head"
		/>
	</div>
</template>

<style scoped>
.card-image-wrapper {
	position: absolute;
	right: 5%;
	bottom: 0;
	width: 42%;
}

.svg-picture {
	display: block;
	position: absolute;
	top: 18%;
	right: 23.3%;
	height: 74%;
	width: auto;
}

.card-image {
	display: block;
	width: 100%;
	height: auto;
}
.svg-picture-head {
	display: block;
	position: absolute;
	top: 0;
	width: 103.2%;
	height: auto;
}

@media (max-width: 1600px) {
	.card-image-wrapper {
		max-width: 500px;
	}
}

@media (max-width: 1150px) {
	.card-image-wrapper {
		max-width: 350px;
	}
}

@media (max-width: 1000px) {
	.card-image-wrapper {
    left: 50%;
    transform: translateX(-50%);
		margin-top: 20px;
		position: relative;
		width: 250px;
	}
}
</style>
